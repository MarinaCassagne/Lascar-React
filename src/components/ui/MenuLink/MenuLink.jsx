import "./MenuLink.css";
import arrowVisitorDown from "../../../assets/IMG/arrowDown_45dp_E3C892_011267.svg";
import { NavLink } from "react-router-dom";

export default function MenuLink({ label, path }) {
  return (
    <li className="menu_link">
      <NavLink className="menu_link-NavLink" to={path}>
        {label}
        <img src={arrowVisitorDown} />
      </NavLink>
    </li>
  );
}
