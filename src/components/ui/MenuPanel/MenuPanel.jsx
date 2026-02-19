import "./MenuPanel.css";
import MenuLink from "../MenuLink/MenuLink";
import { useState } from "react";

export default function MenuPanel({ isMenuOpen }) {
  
  //Menu Visiteur
  const VisitorMenu = [
    { label: "S'inscrire", path: "/register" },
    { label: "Se connecter", path: "/login" },
  ];

  //Menu Membre (Passager | Conducteur)
  const MemberMenu = [
    { label: "Espace membre", path: "/" },
    { label: "Planning de mes trajets", path: "/" },
    { label: "Mon solde", path: "/" },
    { label: "Mes paramètres", path: "/" },
    { label: "Se déconnecter", path: "/" },
  ];

  const [isConnected, setIsConnected] = useState(false);
  //TODO En fonction de la présence du token modifier l'état

  const VisitorList = VisitorMenu.map((page) => (
    <MenuLink label={page.label} path={page.path} />
  ));

  const MemberList = MemberMenu.map((page) => (
    <MenuLink label={page.label} path={page.path} />
  ));

  return (
    <ul className={`menu_panel-${isMenuOpen ? "display" : "hidden"}`}>
      {isConnected ? MemberList : VisitorList}
    </ul>
  );
}
