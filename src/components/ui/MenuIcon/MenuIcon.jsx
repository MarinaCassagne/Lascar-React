import iconPerson from "../../../assets/IMG/iconPerson_45dp_E3C892_011267.svg";
import arrowVisitorUp from "../../../assets/IMG/arrowUp_45dp_E3C892_011267.svg";
import arrowVisitorDown from "../../../assets/IMG/arrowDown_45dp_E3C892_011267.svg";
import "./MenuIcon.css";
import { useState } from "react";

export default function MenuIcon() {
  const [menu, setMenu] = useState('close');
    function handleClick() {
      setMenu("open");
      
        if (menu === 'close') {
          return (
            <>
              <button>
                <img src={iconPerson} alt="Icon personnage dans un cercle" />
                <img src={arrowVisitorDown} alt="Flèche vers le bas" />
              </button>
            </>
          );

        if (menu === 'open') {
          return (
            <>
              <button>
                <img src={iconPerson} alt="Icon personnage dans un cercle" />
                <img src={arrowVisitorUp} alt="Flèche vers le haut" />
              </button>
            </>
          );
      }1
    }
  }
}