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
            <div className="credits-content">
              <h3>Funding</h3>
              <p>
                This project is made possible with funding by the Government of
                Ontario and through eCampusOntario’s support of the Virtual
                Learning Strategy. To learn more about the Virtual Learning
                Strategy visit: https://vls.ecampusontario.ca. This project was
                developed by the staff and students from Seneca College, School
                of Community Services.{" "}
                <span>
                  <a
                    href="https://vls.ecampusontario.ca/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    vls.ecampusontario.ca
                  </a>
                </span>
                . This project was developed by the staff and students from
                Seneca College, School of Community Services.
              </p>

              <h3>Research Project Manager</h3>
              <ul>
                <li>
                  <span className="person">
                    Roxanne Ramjattan, PhD, MSW, RSW
                  </span>
                </li>
                <span className="title">
                  Professor, Bachelor of Community Mental Health <br />
                </span>
                <span className="organization">
                  Seneca College, School of Community Services
                </span>
              </ul>

              <h3>Virtual Gaming Simulation Consultant</h3>
              <ul>
                <li>
                  <span className="person">Margaret Verkuyl, NP, PHC, MN</span>
                </li>
                <span className="title">
                  Professor, Nursing <br />
                </span>
                <span className="organization">
                  Nursing Centennial College, School of Community and Health
                  Studies
                </span>
              </ul>

              <h3>Cast</h3>
              <ul>
                <li>Michael Jenkins (Therapist, Marcus)</li>
                <li>Catherine Ouimet (Client, Kelly)</li>
                <li>Cintra Ramkissoon (Friend, Talia)</li>
                <li>Tiffani Lucas (Secretary, Sofia)</li>
              </ul>

              <h3>Film Producer</h3>
              <ul>
                <li>Ryan Marley</li>
              </ul>

              <h3>Editor</h3>
              <ul>
                <li>Guino Anderson</li>
              </ul>

              <h3>Website Designer</h3>
              <ul>
                <li>Lucas Michalski</li>
              </ul>

              <h3>Research Coordinator (Summer 2021 - Fall 2021)</h3>
              <ul>
                <li>Tessa Bound</li>
              </ul>

              <h3>Research Assistants</h3>
              <span className="title">
                Seneca College, School of Community Services, <br />
                Bachelor of Community Mental Health Program
                <br />
              </span>
              <h4>Winter 2021</h4>
              <ul>
                <li>Jasper Bakker </li>
                <li>Jen Humber </li>
                <li>Ivan Lange </li>
                <li>Sophia Miller </li>
                <li>Cintra Ramkissoon </li>
              </ul>
              <h4>Summer 2021</h4>
              <ul>
                <li>Daniella Antongiovanni </li>
                <li>Damon Dam </li>
                <li>Sandrine Bendavid </li>
                <li>Tiffani Lucas </li>
                <li>Megan Williams</li>
              </ul>
              <h4>Fall 2021</h4>
              <ul>
                <li>Daniella Antongiovanni </li>
                <li>Damon Dam </li>
                <li>Sandrine Bendavid </li>
                <li>Tiffani Lucas </li>
              </ul>

              <h3>Advisory Committee</h3>
              <ul>
                <li>
                  <span className="person">Erica Watson, MSW, RSW</span>
                </li>
                <span className="title">
                  Clinical Supervisor & Educational Coordinator <br />
                </span>
                <span className="organization">
                  SickKids Centre | Garry Hurvitz Center for Community Mental
                  Health
                </span>

                <li>
                  <span className="person">Seemab Mushtaq, BA</span>
                </li>
                <span className="title">
                  Crisis Worker <br />
                </span>
                <span className="organization">
                  Distress Centre of Greater Toronto
                </span>

                <li>
                  <span className="person">Maris Karklins</span>
                </li>
                <span className="title">
                  Assistive Technologist, Counselling and Accessibility Services{" "}
                  <br />
                </span>
                <span className="organization">Seneca College</span>

                <li>
                  <span className="person">
                    Rebecca Oliveira, RN, BScN, CPMHN
                  </span>
                </li>
                <span className="title">
                  Nurse Educator <br />
                </span>
                <span className="organization">
                  Center for Addiction and Mental Health
                </span>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;
