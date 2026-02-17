import "./Header.css";

import HeaderResearch from "../../ui/HeaderResearch/HeaderResearch";
import Logo from "../../ui/Logo/Logo";
import MenuIcon from "../../ui/MenuIcon/MenuIcon";

export default function Header() {

  return (
    <>
      <div className='header-box'>
        <Logo/>
        <HeaderResearch/>
        <MenuIcon/>
      </div>
    </>
  );
}