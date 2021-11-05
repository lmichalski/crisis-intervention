import "./DropDown.scss";

interface iProps {
  label: string;
}

const DropDown: React.FC<iProps> = ({ label, children }) => {
  return (
    <div className="DropDown">
      <button className="DropDown__button">{label}</button>
      <div className="DropDown__content">{children}</div>
    </div>
  );
};

export default DropDown;
