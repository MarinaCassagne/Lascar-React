import iconPerson from "../../../assets/IMG/iconPerson_45dp_E3C892_011267.svg";
import arrowVisitor from "../../../assets/IMG/arrow_45dp_E3C892_011267.svg";
import "./MenuIcon.css";

export default function MenuIcon() {
  return (
    <>
      <img src={iconPerson} alt="Icon personnage dans un cercle" />
      <img src={arrowVisitor} alt="Flèche vers le haut" />
      {/* Faire une variable flèche vers le bas au click */}
    </>
  );
}
