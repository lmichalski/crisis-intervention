import "./ChartContent.scss";

const ChartContent: React.FC = () => {
  return (
    <div className="ChartContent">
      <div className="Chart-title">
        <h2>Drop-in Visit</h2>
        <h3>Client Form</h3>
      </div>

      <div className="Chart-basic-info">
        <div className="Chart-basic-left-column">
          <div>Name: Flynn, Kelly</div>
          <div>Appointment Date: 2021-11-10</div>
        </div>
        <div className="Chart-basic-left-column">
          <div>Referral #: 23458K0</div>
        </div>
      </div>

      <hr></hr>

      <div className="Chart-address">
        <div className="Chart-address-left-column">
          <div>Address: 122 Bedford Road</div>
          <div>Province: Ontario</div>
        </div>
        <div className="Chart-address-right-column">
          <div>City: Toronto</div>
          <div>Postal Code: MQR 092</div>
        </div>
      </div>

      <hr></hr>

      <div className="Chart-client-profile">
        <h3>Client Profile</h3>
        <div className="Chart-profile-columns">
          <div>Sex: Female</div>
          <div>DOB: 1999-10-14</div>
          <div>Age: 22</div>
        </div>
      </div>

      <hr></hr>

      <div className="Chart-presenting-problems">
        <p>
          Presenting Challenges: Kelly’s friend Talia brought her to the clinic
          after booking an appointment. Talia has concerns about Kelly’s
          wellbeing and recent behaviours. (updated note from previous session
          date)
        </p>
      </div>

      <hr></hr>

      <div className="Chart-languages">
        <div>Language(s) Spoken: English</div>
        <div>Preferred Language: English</div>
      </div>

      <hr></hr>

      <div className="Chart-key-info">
        <h3>Key Assessment Information</h3>
        <ul>
          <li>History of suicide attempt</li>
          <li>Current issue with alcohol consumption</li>
          <li>Feelings of anxiousness and depression</li>
          <li>Isolation from friends and family</li>
          <li>Not performing as well as usual in school</li>
          <li>High expectations for herself regarding school</li>
          <li>Initial family support was unsteady</li>
          <li>Currently living with her friend Talia</li>
        </ul>
      </div>

      <hr></hr>

      <div className="Chart-footer">
        <div>Appointment With: Marcus Jackson, Drop-In Clinic Counsellor</div>
        <div>Unit Extension: 5643</div>
      </div>
    </div>
  );
};

export default ChartContent;
