import "./MenuLink.css";
import arrowVisitorDown from "../../../assets/IMG/arrowDown_45dp_E3C892_011267.svg";
import { NavLink } from 'react-router-dom';

export default function MenuLink({pageTitle, path}) {
  return (
    <>
      <NavLink className="menu_link" to={path} >
        {pageTitle}
        <img src={arrowVisitorDown} />   
      </NavLink>
    </>
  );
}
