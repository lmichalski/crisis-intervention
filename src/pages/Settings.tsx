import React, { useCallback } from "react";
import "./Settings.scss";

interface iProps {
  subtitlesEnabled: boolean;
  onSubtitlesToggled: (enabled: boolean) => void;
}

const Settings: React.FC<iProps> = ({
  subtitlesEnabled,
  onSubtitlesToggled,
}) => {
  const isFullscreen = false;

  const handleSubtitlesChange = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      onSubtitlesToggled(evt.target.value === "on");
    },
    [onSubtitlesToggled]
  );

  return (
    <div className="container">
      <div className="panel settings">
        <header>
          <h2>Game Options</h2>
        </header>
        <div className="main">
          <div className="content">
            <div className="cf">
              <h2>Display:</h2>
              <div className="radio">
                <div>
                  <input
                    type="radio"
                    name="display_mode"
                    id="mode_window"
                    ng-model="sg.fullscreen"
                    ng-value="false"
                    ng-change="toggleFullScreen()"
                  />
                  <label
                    htmlFor="mode_window"
                    tabIndex={0}
                    role="radio"
                    aria-checked={!isFullscreen}
                    ng-keydown="onFullscreenKeydown($event)"
                  >
                    Window
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="display_mode"
                    id="mode_fullscreen"
                    ng-model="sg.fullscreen"
                    ng-value="true"
                    ng-change="toggleFullScreen()"
                  />
                  <label
                    htmlFor="mode_fullscreen"
                    tabIndex={0}
                    role="radio"
                    aria-checked={isFullscreen}
                    ng-keydown="onFullscreenKeydown($event)"
                  >
                    Fullscreen
                  </label>
                </div>
              </div>
            </div>
            <br />
            <div className="cf">
              <h2>Subtitles:</h2>
              <div className="radio" onChange={handleSubtitlesChange}>
                <div>
                  <input
                    type="radio"
                    name="subtitles"
                    id="subtitles_off"
                    value="off"
                    defaultChecked={!subtitlesEnabled}
                  />
                  <label
                    htmlFor="subtitles_off"
                    tabIndex={0}
                    role="radio"
                    aria-checked={!subtitlesEnabled}
                    ng-keydown="onSubtitlesKeydown($event)"
                  >
                    Off
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="subtitles"
                    id="subtitles_en"
                    value="on"
                    defaultChecked={subtitlesEnabled}
                  />
                  <label
                    htmlFor="subtitles_en"
                    tabIndex={0}
                    role="radio"
                    aria-checked={subtitlesEnabled}
                  >
                    On
                  </label>
                </div>
              </div>
            </div>
            {/* <!--<br>
				<div className="cf">
					<h2>Video Quality:</h2>
					<div className="radio">
						<div>
							<input type="radio" name="quality" id="quality_720p"
								ng-model="sg.quality"
								ng-value="'-720p'"
								ng-change="saveState()"/> 
							<label for="quality_720p">High (720p)</label>
						</div>
						<div>
							<input type="radio" name="quality" id="quality_360p"
								ng-model="sg.quality"
								ng-value="''"
								ng-change="saveState()"/> 
							<label for="quality_360p">Low (360p)</label>
						</div>
					</div>
				</div>--> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
