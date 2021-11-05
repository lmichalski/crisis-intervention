import { FormattedMessage } from "react-intl";

const Research: React.FC<{}> = () => {
  return (
    <div className="container">
      <div className="panel credits">
        <header>
          <h2>
            <FormattedMessage
              id="Resources.title"
              defaultMessage="Research"
              description="resources title"
            />
          </h2>
        </header>
        <div className="main">
          <div className="content cf">
            <h2>research-goes-here</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
