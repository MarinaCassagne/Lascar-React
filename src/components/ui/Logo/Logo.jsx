import "./Logo.css";
import logo from "../../../../src/assets/IMG/logo.svg";
import { NavLink } from 'react-router-dom';


export default function Logo() {
  return <NavLink to="/" className="logo"><img src={logo} alt="Logo LAS'CAR" /></NavLink>;
}
