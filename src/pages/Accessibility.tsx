import { FormattedMessage } from "react-intl";
import "./Accessibility.scss";

const Accessibility: React.FC<{}> = () => {
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
            <h2>Accessibility Statement</h2>
            <p>
              Seneca is committed to providing an accessible teaching, learning,
              living and working community that is barrier-free and inclusive
              for all individuals. Seneca’s Accessibility Statement Policy is in
              place to ensure practices and procedures are consistent with the
              accessibility standards under the Accessibility for Ontarians with
              Disabilities Act (AODA) and the Canadian Charter of Rights and
              Freedoms.
            </p>
            <h3>Accessibility Standards</h3>
            <p>
              The Web Content Accessibility Guidelines (WCAG) defines
              requirements for designers and developers to improve accessibility
              for people with disabilities. It defines three levels of
              conformance: Level A, Level AA, and Level AAA. This project has
              been designed to conform with Web Content Accessibility Guidelines
              (WCAG) 2.0 Level AA, as required by the AODA.
            </p>
            <h3>Accessible Features of this Resource</h3>
            <p>The course content has been optimized for accessibility:</p>
            <ul>• All content is navigable by keyboard.</ul>
            <ul>
              • Hyperlinks are visually distinct and are formatted with
              meaningful text.
            </ul>
            <ul>
              • Proper heading structures were implemented to optimize screen
              reader navigation.
            </ul>
            <ul>
              • All images have alternative text, and when appropriate, a long
              description.
            </ul>
            <ul>
              • The colour contrast of text complies with accessibility
              guidelines.
            </ul>
            <ul>• Colour is not used alone to convey information.</ul>
            <ul>• All videos have closed captioning.</ul>
            <ul>
              • Video transcripts have been created for videos created in-house
              and for some externally sourced videos.
            </ul>
            <h3>Known Accessibility Issues and Feedback</h3>
            <p>
              We have made every attempt to ensure that this resource is as
              accessible and usable as possible. We welcome your feedback on any
              accessibility issues you may find with this resource. Please
              contact us and let us know if you encounter any accessibility
              barriers. We try to respond to feedback within 2 business days.{" "}
            </p>
            <p>
              If you find any issues, please provide the following information:
            </p>
            <ul>• The page title and a link to the page with the issue</ul>
            <ul>• A detailed description of the issue</ul>

            <ul>
              • The operating system, browser, and assistive technology (if
              applicable) used. For Example:
              <ul> • Windows 10</ul>
              <ul>• Google Chrome (Version 98.0.4758.102)</ul>
              <ul>• Jaws screen reader </ul>
            </ul>

            <p>
              Any accessibility issues that have been identified will be listed
              below.
            </p>
            <ul>
              • Currently, there are no known accessibility issues in this
              resource.
            </ul>
            <p>This statement was last updated on 23 February 2022.</p>

            <h3>Contact Information</h3>
            <p>E-mail: teaching@senecacollege.ca</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
