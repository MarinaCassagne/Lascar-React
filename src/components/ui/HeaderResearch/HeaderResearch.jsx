import search from "../../../assets/IMG/search_45dp_011267.svg";
import "./HeaderResearch.css";

export default function HeaderResearch() {
  return (
    <>
      <a className="header_research" href="/">
        <img src={search} alt="Loupe" />
        Rechercher
      </a>
    </>
  );
}
