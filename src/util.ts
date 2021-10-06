import { useContext, useCallback } from "react";
import { useLocation, useHistory } from "react-router";
import RootScopeContext from "./controllers/RootScopeContext";

export function generateUUID(): string {
  var r: string;
  let d = new Date().getTime();
  if (
    typeof performance !== "undefined" &&
    typeof performance.now === "function"
  ) {
    d += performance.now(); //use high-precision timer if available
  }
  r = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return r;
}

export const useGotoMenu = () => {
  const location = useLocation();
  const history = useHistory();

  const rootScope = useContext(RootScopeContext);

  const gotoMenu = useCallback(() => {
    rootScope.resumeURL = location.pathname;
    rootScope.logGameEvent("", "open", "menu", "", "");
    history.push("/");
  }, [rootScope, history, location.pathname]);
  return gotoMenu;
};

export function getBrowser() {
  var browser, isIE;
  // @ts-ignore
  isIE = /*@cc_on!@*/ false || !!document.documentMode;

  // @ts-ignore
  if (
    // @ts-ignore
    (!!window.opr && !!opr.addons) ||
    // @ts-ignore
    !!window.opera ||
    navigator.userAgent.indexOf(" OPR/") >= 0
  ) {
    browser = "Opera";

    // @ts-ignore
  } else if (typeof InstallTrigger !== "undefined") {
    browser = "Firefox";
    // @ts-ignore
  } else if (
    // @ts-ignore
    /constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === "[object SafariRemoteNotification]";
    })(
      // @ts-ignore
      !window["safari"] ||
        // @ts-ignore
        (typeof safari !== "undefined" && safari.pushNotification)
    )
  ) {
    browser = "Safari";
  } else if (isIE) {
    browser = "Internet Explorer";
    // @ts-ignore
  } else if (!isIE && !!window.StyleMedia) {
    browser = "Edge";
    // @ts-ignore
  } else if (
    // @ts-ignore
    !!window.chrome &&
    // @ts-ignore
    (!!window.chrome.webstore || !!window.chrome.runtime)
  ) {
    browser = "Chrome";
  } else {
    browser = "Unknown browser";
  }
  return browser;
}

//////////////////////////////////////////////////
// Cookies + State, it's messy here
//////////////////////////////////////////////////

var maxAge = 21 * 24 * 60;

function isLocalStorageAvailable() {
  var str = "test";
  try {
    localStorage.setItem(str, str);
    localStorage.removeItem(str);
    return true;
  } catch (e) {
    return false;
  }
}

const cookies = {
  put(key: string, value: string, maxAge: number) {
    var cookie = `${key}=${value};path=/;max-age=${maxAge};`
    console.log(cookie)
    document.cookie = cookie;
  },
  get(cname: string): string | null {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  },
  remove (key: string) {
    this.put(key, "", -1)
  },
};

export const Storage = {
  set: function (key: string, value: string) {
    if (isLocalStorageAvailable()) {
      window.localStorage.setItem(key, value);
    } else {
      cookies.put(key, value, maxAge);
    }
  },
  get: function (key: string): string | null {
    var r = isLocalStorageAvailable()
      ? window.localStorage.getItem(key)
      : cookies.get(key);
    return r;
  },
  setObject: function (key: string, value: any) {
    const o = JSON.stringify(value);
    if (isLocalStorageAvailable()) {
      window.localStorage.setItem(key, o);
    } else {
      cookies.put(key, o, maxAge);
    }
  },
  getObject: function (key: string) {
    var r = isLocalStorageAvailable()
      ? window.localStorage.getItem(key)
      : cookies.get(key);
    return r ? JSON.parse(r) : false;
  },
  remove: function (key: string) {
    if (isLocalStorageAvailable()) {
      window.localStorage.removeItem(key);
    } else {
      cookies.remove(key);
    }
  },
};
