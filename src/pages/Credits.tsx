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
                Ontario and the Virtual Learning Strategy. To learn more about
                the Virtual Learning Strategy visit{" "}
                <span>
                  <a
                    href="https://vls.ecampusontario.ca/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    vls.ecampusontario.ca
                  </a>
                </span>
                {". "}
              </p>

              <h3>Research Project Manager</h3>
              <ul>
                <li>
                  <span className="person">
                    Roxanne Ramjattan, PhD, MSW, RSW
                  </span>
                </li>
              </ul>

              <h3>Virtual Gaming Simulation Consultant</h3>
              <ul>
                <li>
                  <span className="person">Margaret Verkuyl, NP, PHC, MN</span>
                </li>
                <span className="title">
                  Professor <br />
                </span>
                <span className="organization">Nursing Centennial College</span>
              </ul>

              <h3>Cast</h3>
              <ul>
                <li>Michael Jenkins (Therapist, Marcus)</li>
                <li>Catherine Ouimet (Client, Kelly)</li>
                <li>Cintra Ramkissoon (Friend, Talia)</li>
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

              <h3>Research Assistants</h3>
              <h4>Winter 2021</h4>
              <ul>
                <li>Grace (Jasper) Bakker </li>
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
                  <span className="person">Maris Karklins</span>
                </li>
                <span className="title">
                  Assistive Technologist, Counselling and Accessibility Services{" "}
                  <br />
                </span>
                <span className="organization">Seneca College</span>

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
