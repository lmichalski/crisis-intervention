import { FormattedMessage } from "react-intl";
import "./Principles.scss";

interface iProps {
  strings: {
    paragraph: string;
    bullet_list: string[];
  };
}

const Principles: React.FC<iProps> = ({ strings }) => {
  return (
    <div className="container">
      <div className="panel info">
        <header>
          <h2>
            <FormattedMessage
              id="Principles.title"
              defaultMessage="Essential Principles"
              description="Principles title"
            />
          </h2>
        </header>
        <div className="main">
          <div className="content cf">
            <p>{strings.paragraph}</p>
            <ol>
              {strings.bullet_list.map((list_item) => (
                <li>{list_item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principles;
