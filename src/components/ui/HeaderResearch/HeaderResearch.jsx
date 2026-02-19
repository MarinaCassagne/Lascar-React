import search from "../../../assets/IMG/search_45dp_011267.svg";
import "./HeaderResearch.css";
import { NavLink } from 'react-router-dom';

export default function HeaderResearch() {
  return (
    <>
      <a className="header_research" href="/research">
        <img src={search} alt="Loupe" />
        Rechercher
      </a>
    </>
  );
}
