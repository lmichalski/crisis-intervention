import { FormattedMessage } from "react-intl";
import "./Guides.scss";

const Guides: React.FC<{}> = () => {
  return (
    <div className="container">
      <div className="panel debrief">
        <header>
          <h2>
            <FormattedMessage
              id="Guide.title"
              defaultMessage="Educator Guides"
              description="educator guides title"
            />
          </h2>
        </header>
        <div className="main">
          <div className="content cf">
            <div className="guide-content">
              <p>
                The following user guides were developed to help educators
                integrate this virtual gaming simulation in a course, training,
                and/or workshop.
              </p>
              <a
                href="/docs/educator-guide-course.pdf"
                className="button"
                download
              >
                Course User Guide
              </a>{" "}
              <a
                href="/docs/educator-guide-training.pdf"
                className="button"
                download
              >
                Training and Workshop User Guide
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;
