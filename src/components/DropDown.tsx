import { useCallback, useState } from "react";
import "./DropDown.scss";

interface iProps {
  className?: string;
  label: string;
}

const DropDown: React.FC<iProps> = ({ className, label, children }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = useCallback(() => {
    setExpanded((e) => !e);
  }, []);

  const collapse = useCallback(() => {
    setExpanded(false);
  }, []);
  const baseClassName = `DropDown DropDown${
    expanded ? "--expanded" : "-collapsed"
  }`;

  return (
    <div
      className={className ? `${baseClassName} ${className}` : baseClassName}
    >
      <button
        onClick={toggleExpanded}
        className="DropDown__button"
        onBlur={collapse}
      >
        {label}
      </button>
      <div className="DropDown__content" onClick={collapse}>
        {children}
      </div>
    </div>
  );
};

export default DropDown;
