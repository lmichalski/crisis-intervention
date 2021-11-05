import { FormattedMessage } from "react-intl";

const Resources: React.FC<{}> = () => {
  return (
    <div className="container">
      <div className="panel credits">
        <header>
          <h2>
            <FormattedMessage
              id="Resources.title"
              defaultMessage="Resources"
              description="resources title"
            />
          </h2>
        </header>
        <div className="main">
          <div className="content cf">
            <ul>
              <h2>Canada</h2>

              <li>
                <span>
                  Crisis Services Canada <br />
                </span>
                <span>
                  Website: https://www.crisisservicescanada.ca/en/ <br />
                </span>
                <span>Telephone: 1-833-456-4566 </span>
              </li>

              <li>
                <span>
                  Kids Help Phone <br />
                </span>
                <span>
                  Website: https://kidshelpphone.ca/urgent-help
                  <br />
                </span>
                <span>Telephone: 1-800-668-6868 </span>
              </li>

              <h2>Ontario, Canada</h2>

              <li>
                <span>
                  Distress Centres of Greater Toronto <br />
                </span>
                <span>
                  Website:
                  https://www.dcogt.com/canada-suicide-prevention-service <br />
                </span>
                <span>Telephone: 416-408-HELP (4357) </span>
              </li>

              <li>
                <span>
                  {" "}
                  Gerstein Centre <br />
                </span>
                <span>
                  {" "}
                  Website: https://gersteincentre.org/ <br />
                </span>
                <span> Telephone: 416-929-5200 </span>
              </li>

              <h2>United States</h2>

              <li>
                <span>
                  {" "}
                  National Suicide Prevention Lifeline <br />
                </span>
                <span>
                  {" "}
                  Website: https://suicidepreventionlifeline.org/ <br />
                </span>
                <span> Telephone: 1-800-273-8255 </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
