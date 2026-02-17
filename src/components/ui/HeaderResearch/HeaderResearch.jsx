import search from "../../../assets/IMG/Search_20dp_011267.png";
import "./HeaderResearch.css";

export default function HeaderResearch() {
  return (
    <>
      <div className="header_research-box">
        <img src={search} alt="Loupe" />
        <h3>Rechercher</h3>
      </div>
    </>
  );
}
