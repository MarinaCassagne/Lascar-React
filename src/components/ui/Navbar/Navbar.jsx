import "./Navbar.css";

import HeaderResearch from "../../ui/HeaderResearch/HeaderResearch";
import MenuIcon from "../../ui/MenuIcon/MenuIcon";
import MenuPanel from "../MenuPanel/MenuPanel";
import { useEffect, useState } from "react";
// On importe le store Zustand pour stocker les tokens

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

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const tokenStorage = localStorage.getItem("auth-storage");
    setIsConnected(tokenStorage !== null); 
  }, []);

  
  return (
    <>
      <nav className="navbar">
        <HeaderResearch />
        <MenuIcon isMenuOpen={isMenuOpen} ToggleMenu={ToggleMenu} />
        <MenuPanel isMenuOpen={isMenuOpen} isConnected={isConnected} />
      </nav>
    </>
  );
}
