import "./MenuPanel.css";
import MenuLink from "../MenuLink/MenuLink";
import { useState } from "react";

export default function MenuPanel({ isMenuOpen }) {
  //TODO Avoir si on peut passez le tableau ci-dessous comme ça si token on utilise le tableau MenuVisitor
  // const VisitorMenu = {
  //   "S'inscrire" : "/register",
  //   "Se connecter" : "/login"
  // };

  // const MemberMenu = {
  //   "Espace membre" : "/",
  //   "Planning de mes trajets" : "/",
  //   "Mon solde" : "/",
  //   "Mes paramètres" : "/",
  //   "Se déconnecter" : "/",
  // };

  return (
    <>
      <ul className={`menu_panel-visitor-${isMenuOpen ? "display" : "hidden"}`}>
        <li>
          <MenuLink pageTitle="S'inscrire" path="/register" />
        </li>
        <li>
          <MenuLink pageTitle="Se connecter" path="/login" />
        </li>
      </ul>
    </>
  );
}
