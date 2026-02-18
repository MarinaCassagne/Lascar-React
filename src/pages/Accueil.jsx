// import Header from '../components/layout/Header/Header'
import './Accueil.css';
import LOGO from '../assets/IMG/Logo.png'


export default function Accueil() {
  return (
    <>
      {/* // <Header />   */}
      <section className="presentation">
        <h1>Las'Car - Plateforme de covoiturage</h1>
      </section>
      <section className="section-actus">
        <h2>Les Actualités</h2>
        <div className="A propos">
          <img src={LOGO}/>
        </div>
      </section>
    </>
  );
}