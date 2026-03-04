import "./MenuLink.css";
import arrowVisitorDown from "../../../assets/IMG/arrowDown_45dp_E3C892_011267.svg";
import { NavLink } from "react-router-dom";

export default function MenuLink({ label, path, onClick }) {
  return (
    <li className="menu_link">
      <NavLink className="menu_link-NavLink" to={path} onClick={onClick} >
        {label}
        <img src={arrowVisitorDown} />
      </NavLink>
    </li>
  );
}