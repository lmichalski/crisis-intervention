import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
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
            <h2>Content Providers</h2>
            <ul>
              <li>Margaret Verkuyl NP:PHC, MN</li>
              <li>Dr. Jennifer Lapum, RN, PhD</li>
              <li>Dr. Oona St-Amant RN, PhD </li>
              <li>Behi Nikaiin RN MScN</li>
              <li>Michelle Hughes RN, MEd</li>
              <li>Dr. Paula Mastrilli RN, PhD</li>
              <li>Dr. Daria Romaniuk RN, PhD</li>
              <li>Lorraine Betts RN, MN</li>
            </ul>
            <h2>Cast</h2>
            <ul>
              <li>Karen Lee</li>
              <li>Sarah Winstanley</li>
            </ul>

            <h2>Project Coordination</h2>
            <ul>
              <li>Lars Svekis</li>
              <li>Sushila Parikh</li>
            </ul>
            <h2>Game Design & Development</h2>
            <ul>
              <li>Igor Karasyov</li>
              <li>Lucas Michalski</li>
            </ul>
            <h2>Video Production</h2>
            <ul>
              <li>Daniil Novikov</li>
              <li>Ilya Emilianov</li>
              <li>Arseniy Semin</li>
              <li>Cassandra Ferworn</li>
              <li>Kelvin Kong</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;
