import "./Header.css";

import Logo from "../../ui/Logo/Logo";
import Navbar from "../../ui/Navbar/Navbar";
import { NavLink } from "react-router-dom";


export default function Header() {
  return (
    
      <header>
        <NavLink to="/"><Logo /></NavLink>
        <Navbar />
      </header>
    
  );
}
