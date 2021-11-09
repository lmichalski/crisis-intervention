import "./Polaroid.scss";

const Polaroid: React.FC = () => {
  return (
      <div className="polaroid rotate_right">
        <img
          src="/images/patient-photo-cropped.jpg"
          alt="Caucasian patient sitting and looking at the camera"
          width="284"
          height="213"
        ></img>
        <p className="caption">Client: Kelly FLynn</p>
      </div>
  );
};

export default Polaroid;
