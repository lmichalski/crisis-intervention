import "./Instructions.scss";

interface iProps {
  minSteps: number;
  strings: {
    paragraph: string;
    bullet_list: string[];
  };
}

const Instructions: React.FC<iProps> = ({ minSteps, strings }) => {
  return (
    <div className="container">
      <div className="panel info">
        <header>
          <h2>Introduction</h2>
          <div>
            This virtual gaming simulation is focused on using the best
            practices for working with a suicidal client. The simulation was
            generously funded by eCampusOntario.
          </div>
        </header>

        <div className="main">
          <h2>How to Play</h2>
          <div className="content cf">
            <ul>
              <li>
                Watch interactions between Kelly and the mental health
                counsellor.
              </li>
              <li>
                Following each interaction, you will be asked to select the most
                appropriate response. Possible responses are classified as:
                {"  "}
                <img
                  src="/images/icon-correct.png"
                  alt="green circular checkmark icon"
                  width="20"
                  height="20"
                ></img>{" "}
                Correct,{" "}
                <img
                  src="/images/icon-partial.png"
                  alt="yellow triangular warning icon"
                  width="20"
                  height="20"
                ></img>{" "}
                Not-the-Best, and{" "}
                <img
                  src="/images/icon-incorrect.png"
                  alt="red circular x icon"
                  width="20"
                  height="20"
                ></img>{" "}
                Incorrect.
              </li>
              <li>
                You can repeat this game numerous times for practice and to
                improve your responses.
              </li>
              <li>
                The game can be paused and resumed at any time by leaving the
                game and returning to this page.
              </li>
              <li>
                At the end of the game you will see a summary report with links
                to the suggested module readings.
              </li>
              <li>This game has sound. Adjust your volume accordingly.</li>
              <li>
                The game makes use of high-resolution videos, which require
                high-speed Internet.
              </li>
              <li>The game will take 30-60 minutes to complete.</li>
            </ul>
          </div>

          <h2>Trigger Warning</h2>
          <div>
            This virtual gaming simulation contains sensitive information that
            may be triggering for some players. If at any time you are unable to
            continue playing, please take a break or stop immediately. If you
            continue to feel triggered, please use the resources provided to
            obtain support.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
