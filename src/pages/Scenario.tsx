import { FormattedMessage } from "react-intl";
import "./Objectives.scss";

interface iProps {
  strings: {
    introCards: string[];
  };
}

const Objectives: React.FC<iProps> = ({ strings }) => {
  return (
    <div className="container">
      <div className="panel info">
        <header>
          <h2>
            <FormattedMessage
              id="Scenario.title"
              defaultMessage="Client Background"
              description="Scenario title"
            />
          </h2>
        </header>
        <div className="main">
          <div className="content cf">
            <div>
              <p>
                Towards the end of the Fall semester, Talia, Kelly’s roommate,
                noticed that Kelly had become distant, less communicative and
                had difficulty getting out of bed. Talia also noticed that Kelly
                was coming home late from parties, was frequently intoxicated
                and would often miss classes. During exams, Kelly was very
                anxious and attempted suicide by taking over-the-counter
                medication. Talia suggested that Kelly attend the Student
                Wellness Centre on campus. Kelly agreed and received support
                from Marcus, a counsellor at the centre. Kelly only attended one
                session but reported she was feeling much better.
              </p>
              <p>
                Due to financial restrictions, Kelly was unable to return home
                during the Winter holidays and stayed on-campus. Talia felt
                comfortable leaving Kelly alone since she had reported she was
                feeling better, and returned to her hometown for the holidays.
                When Talia returned from her holiday vacation, she noticed that
                Kelly looked unkept, had lost a lot of weight, and their dorm
                was filled with alcohol bottles. Kelly reported she failed most
                of her classes last semester and was not doing well emotionally.
                Talia suggested that Kelly go to the Student Wellness Centre.
                Initially, Kelly resisted the idea of seeking professional help
                again, but after some discussion with Talia, Kelly agreed to
                make an appointment to see Marcus. Talia decided to accompany
                Kelly to her appointment to provide support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
