import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";

interface iProps {
  className?: string;
  pagesToShow: {
    principles: boolean;
  };
  onItemClicked?: () => void;
}

const MenuItems: React.FC<iProps> = ({
  className,
  onItemClicked,
  pagesToShow: { principles: showPrinciples },
}) => {
  return (
    <ul className="controls">
      <li>
        <NavLink
          to={`/instructions/`}
          className="Menu__link"
          activeClassName="Menu__link--active"
          onClick={onItemClicked}
        >
          <FormattedMessage
            id="Menu.instructions"
            defaultMessage="1. How to Play"
            description="How to Play Button"
          />
        </NavLink>
      </li>

      <li>
        <NavLink
          to={`/objectives/`}
          className="Menu__link"
          activeClassName="Menu__link--active"
          onClick={onItemClicked}
        >
          <FormattedMessage
            id="Menu.objectives"
            defaultMessage="2. Learning Objectives"
            description="Objectives Button"
          />
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/principles/`}
          className="Menu__link"
          activeClassName="Menu__link--active"
          onClick={onItemClicked}
        >
          <FormattedMessage
            id="Menu.principles"
            defaultMessage="3. Essential Principles"
            description="Principles Button"
          />
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/scenario/`}
          className="Menu__link"
          activeClassName="Menu__link--active"
          onClick={onItemClicked}
        >
          <FormattedMessage
            id="Menu.scenario"
            defaultMessage="4. Client Background"
            description="Client-Background Button"
          />
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/chart/`}
          className="Menu__link"
          activeClassName="Menu__link--active"
          onClick={onItemClicked}
        >
          <FormattedMessage
            id="Menu.chart"
            defaultMessage="5. Client Chart"
            description="Client chart button"
          />
        </NavLink>
      </li>

      <li>
        <NavLink
          to={`/research/`}
          className="Menu__link"
          activeClassName="Menu__link--active"
          onClick={onItemClicked}
        >
          <FormattedMessage
            id="Menu.research"
            defaultMessage="6. Research"
            description="Research button"
          />
        </NavLink>
      </li>

      <li>
        <NavLink
          to={`/resources/`}
          className="Menu__link"
          activeClassName="Menu__link--active"
          onClick={onItemClicked}
        >
          <FormattedMessage
            id="Menu.resources"
            defaultMessage="7. Crisis Resources"
            description="Resources button"
          />
        </NavLink>
      </li>

      <li>
        <NavLink
          to={`/credits/`}
          className="Menu__link"
          activeClassName="Menu__link--active"
          onClick={onItemClicked}
        >
          <FormattedMessage
            id="Menu.credits"
            defaultMessage="8. Credits"
            description="Credits Button"
          />
        </NavLink>
      </li>
    </ul>
  );
};

export default MenuItems;
