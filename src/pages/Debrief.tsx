import { FormattedMessage } from "react-intl";
import "./Debrief.scss";

const Credits: React.FC<{}> = () => {
  return (
    <div className="container">
      <div className="panel debrief">
        <header>
          <h2>
            <FormattedMessage
              id="Debrief.title"
              defaultMessage="Self-Debrief"
              description="debrief title"
            />
          </h2>
        </header>
        <div className="main">
          <div className="content cf">
            <div className="debrief-content">
              <h2>Instructions</h2>
              <p>
                In this crisis intervention virtual gaming simulation, you
                assumed the role of Marcus, a counsellor at the Student Wellness
                Centre on campus. Kelly, a university student, is brought into
                the clinic by her friend, Talia, who believes Kelly is in
                crisis.
              </p>
              <p>
                Upon completion of this virtual gaming simulation, we would like
                you to self-debrief on the following 12 questions. It may take
                you up to 60 minutes to complete the questions. We encourage you
                to use your simulation summary report and class notes/resources
                to support your reflection. These questions will guide you
                through a facilitated reflection on your virtual gaming
                simulation experience. The questions will help you express your
                reactions, analyze issues, reflect on your performance and make
                connections to aid in your future clinical practice.
              </p>

              <h2>Reflection Questions</h2>

              <ol>
                <li className="debrief-item">
                  What are your thoughts and feelings about acting in the role
                  of Marcus, the mental health counsellor?
                </li>
                <li className="debrief-item">
                  How did you feel in the role of the mental health counsellor
                  during this simulation?
                </li>
                <li className="debrief-item">
                  Share what you learned about counselling Kelly.
                </li>
                <li className="debrief-item">
                  Did you play the game more than once? If so, how was this
                  helpful to you?{" "}
                </li>
                <li className="debrief-item">
                  Not everyone works their way through this scenario perfectly.
                  What can you take away from the incorrect decisions/responses
                  you may have made?
                </li>
                <li className="debrief-item">
                  As you worked your way through this simulation, did you find
                  yourself going to other sources to learn more about caring for
                  a client in crisis? If you did go to others sources, what
                  types of information did you review to help increase your
                  knowledge?
                </li>
                <li className="debrief-item">
                  The learning outcomes of this virtual gaming simulation are:{" "}
                  <ol type="i">
                    <li>Apply best practices to assess the risk of suicide.</li>
                    <li>
                      Select the best evidence-based techniques and skills
                      needed to work with a suicidal client.
                    </li>
                    <li>
                      Evaluate the appropriate methods of action to ensure
                      client safety.
                    </li>
                    <span>
                      Please discuss how each learning outcome was helpful or
                      unhelpful to your learning process.{" "}
                    </span>
                  </ol>
                </li>
                <li className="debrief-item">
                  Did it come as a surprise at the end of the video when you had
                  to contact emergency services? What was your initial reaction to this
                  correct response?{" "}
                </li>
                <li className="debrief-item">
                  If a similar situation arose in the future, what would you
                  take away from this simulation to incorporate into your
                  practice?{" "}
                </li>
                <li className="debrief-item">
                  What questions remain unanswered for you in relation to this
                  scenario?
                </li>
                <li className="debrief-item">
                  At the end of the virtual gaming simulation, did you feel more
                  or less confident to work with suicidal clients?
                </li>
                <li className="debrief-item">
                  How did you feel after completing this virtual gaming
                  simulation?
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;
