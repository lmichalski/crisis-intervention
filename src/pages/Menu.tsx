import MenuItems from "../components/MenuItems";

import "./Menu.scss";

interface iProps {
  pagesToShow: {
    principles: boolean;
  };
}

const Menu: React.FC<iProps> = ({ ...props }) => {
  return (
    <div className="Menu container">
      <div className="panel menu">
        <div className="main">
          <div className="content">
            <MenuItems className="controls" {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
