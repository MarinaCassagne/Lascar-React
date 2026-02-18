import "./Header.css";

import Logo from "../../ui/Logo/Logo";
import HeaderResearch from "../../ui/HeaderResearch/HeaderResearch";
import MenuIcon from "../../ui/MenuIcon/MenuIcon";

export default function Header() {
  return (
    <>
      <header>
        <Logo />
        <div className="navbar">
          <HeaderResearch />
          <MenuIcon />
        </div>
      </header>
    </>
  );
}
