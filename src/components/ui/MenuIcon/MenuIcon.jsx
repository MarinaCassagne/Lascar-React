import "./MenuIcon.css";
import iconPerson from "../../../assets/IMG/IconPerson_45dp_E3C892_011267.svg";
import arrowVisitorDown from "../../../assets/IMG/arrowDown_45dp_E3C892_011267.svg";

export default function MenuIcon({ isMenuOpen,ToggleMenu}) {
  return (
    <>
      <div className="menu_icon" onClick={ToggleMenu}>
        <img src={iconPerson} alt="Icon personnage dans un cercle" />
        <img
          className={`menu_icon-${isMenuOpen ? "close" : ""}`}
          src={arrowVisitorDown}
          alt={isMenuOpen ? "Flèche vers le bas" : "Flèche vers le haut"}
        />
      </div>
    </>
  );
}
