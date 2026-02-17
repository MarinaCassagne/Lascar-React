import "./Header.css";

import Logo from "../../ui/Logo/Logo";
import HeaderResearch from "../../ui/HeaderResearch/HeaderResearch";
import MenuIcon from "../../ui/MenuIcon/MenuIcon";

export default function Header() {
  return (
    <>
      <div className="header-box">
        <Logo />
        <div className="navbar-box">
          <HeaderResearch />
          <MenuIcon />
        </div>
      </div>
    </>
  );
}
