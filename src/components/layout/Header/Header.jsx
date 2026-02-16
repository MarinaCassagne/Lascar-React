import './Header.css';
import LOGO from '../../../assets/IMG/Logo.png';

export default function MyHeader() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo + titre */}
        <div className="logo-title">
          <img src={LOGO} alt="Logo Las'car" className="logo" />
        </div>

        {/* Barre de recherche */}
        <div className="search-container">
          <input
            type="search"
            placeholder="Rechercher"
            className="search-input"
            aria-label="Rechercher"
          />
          <button className="search-button" aria-label="Rechercher">
            🔍
          </button>
        

          {/* Bouton utilisateur */}
          <button className="user-button" aria-label="Profil utilisateur">
            👤
          </button>
        </div>
      </div>
    </header>
  );
}
