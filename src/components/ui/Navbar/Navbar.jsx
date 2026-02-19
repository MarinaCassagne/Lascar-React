import "./Navbar.css";

import HeaderResearch from "../../ui/HeaderResearch/HeaderResearch";
import MenuIcon from "../../ui/MenuIcon/MenuIcon";
import MenuPanel from "../MenuPanel/MenuPanel";
import { useState } from "react";

export default function Navbar() {
  // Définir une variable permettant de dire, si le menu est ouvert ou fermé.
  // Si le menu est ouvert, alors on définit la variable isMenuOpen a 'true'.
  // Si le menu est fermé, alors on définit la variable isMenuOpen a 'false'.
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Lorsqu'on évoque la fonction Click alors on fait passer la variable isMenuOpen de false à true.

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
