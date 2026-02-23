import "./Navbar.css";

import HeaderResearch from "../../ui/HeaderResearch/HeaderResearch";
import MenuIcon from "../../ui/MenuIcon/MenuIcon";
import MenuPanel from "../MenuPanel/MenuPanel";
import { useState } from "react";

export default function Navbar() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    
  /**
   * Change le statut de la variable isMenuOpen : true <-> false
   * @example 
   * // Au clic sur un composant 
   * onClick={ToggleMenu}
   */
  function ToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <nav className="navbar">
        <HeaderResearch />
        <MenuIcon isMenuOpen={isMenuOpen} ToggleMenu={ToggleMenu}/>
        <MenuPanel isMenuOpen={isMenuOpen} />
      </nav>
    </>
  );
}
