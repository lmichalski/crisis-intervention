import { FormattedMessage } from "react-intl";
import "./Credits.scss";

const Credits: React.FC<{}> = () => {
  return (
    <div className="container">
      <div className="panel credits">
        <header>
          <h2>
            <FormattedMessage
              id="Credits.title"
              defaultMessage="Credits"
              description="credits title"
            />
          </h2>
        </header>
        <div className="main">
          <div className="content cf">
            <h2>Funder</h2>
            <ul>
              <li>eCampusOntario</li>
              <li>
                <a href="https://www.ecampusontario.ca/" target="_blank" rel="noreferrer">ecampusontario.ca</a>
              </li>
            </ul>

            <h2>Research Project Manager</h2>
            <ul>
              <li>Roxanne Ramjattan, PhD, MSW, RSW</li>
            </ul>

            <h2>Virtual Gaming Simulation Consultant</h2>
            <ul>
              <li>Margaret Verkuyl, NP, PHC, MN</li>
              <li>Professor, Nursing Centennial College</li>
            </ul>

            <h2>Cast</h2>
            <ul>
              <li>Michael Jenkins (Therapist, Marcus)</li>
              <li>Catherine Ouimet (Client, Kelly)</li>
              <li>Cintra Ramkissoon (Friend, Talia)</li>
            </ul>

            <h2>Film Producer</h2>
            <ul>
              <li>Ryan Marley</li>
            </ul>

            <h2>Editor</h2>
            <ul>
              <li>Guino Anderson</li>
            </ul>

            <h2>Website Designer</h2>
            <ul>
              <li>Lucas Michalski</li>
            </ul>

            <h2>Research Assistants</h2>
            <h3>Winter 2021</h3>
            <ul>
              <li>Grace (Jasper) Bakker </li>
              <li>Jen Humber </li>
              <li>Ivan Lange </li>
              <li>Sophia Miller </li>
              <li>Cintra Ramkissoon </li>
            </ul>
            <h3>Summer 2021</h3>
            <ul>
              <li>Daniella Antongiovanni </li>
              <li>Damon Dam </li>
              <li>Sandrine Bendavid </li>
              <li>Tiffani Lucas </li>
              <li>Megan Williams</li>
            </ul>
            <h3>Fall 2021</h3>
            <ul>
              <li>Daniella Antongiovanni </li>
              <li>Damon Dam </li>
              <li>Sandrine Bendavid </li>
              <li>Tiffani Lucas </li>
            </ul>

            <h2>Advisory Committee</h2>
            <div className="advisory-committee">
              <h4>Maris Karklins</h4>
              <h5>
                Assistive Technologist, Counselling and Accessibility Services{" "}
              </h5>
              <h6>Seneca College </h6>

              <h4>Erica Watson, MSW, RSW</h4>
              <h5>Clinical Supervisor & Educational Coordinator </h5>
              <h6>
                SickKids Centre | Garry Hurvitz Center for Community Mental
                Health{" "}
              </h6>

              <h4>Seemab Mushtaq, BA</h4>
              <h5>Crisis Worker </h5>
              <h6>Distress Centre of Greater Toronto </h6>

              <h4>Rebecca Oliveira, RN, BScN, CPMHN</h4>
              <h5>Nurse Educator </h5>
              <h6>Center for Addiction and Mental Health </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;
