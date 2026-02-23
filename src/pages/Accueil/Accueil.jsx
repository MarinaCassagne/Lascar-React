import { useEffect , useState} from 'react';
// import Header from '../components/layout/Header/Header'
import './Accueil.css';
import LOGO from '../../assets/IMG/logo.svg'
import Footer from '../../components/layout/Footer/Footer';
import api from '../../api/axiosInstance';


export default function Accueil() {

  const [trajets, setTrajets] = useState([]);

  useEffect(()=>{
    async function listTrajet() {
      try{
        
        // Il faut utiliser {} autour de data pour récupérer uniquement le body de la réponse
        // Sinon Axios récupère tout un objet reponse
        const { data }  = await api.get('/api/trajets');

        if (data) {
          console.log('Liste des trajets', data);
          setTrajets(data);
        } else {
          console.error('Aucun trajet de trouver', data.message);
        }
      } catch (error) {
        console.error('Erreur réseau:', error);
      }
    }
    // Cette fonction s'exécute une seule fois après le premier rendu du composant (au "chargement" de la page).
    // Ici, on appelle la fonction listTrajet() pour récupérer la liste des trajets depuis l'API.
    // 
    // Le tableau vide [] à la fin indique à React qu'il ne doit exécuter ce useEffect qu'une seule fois.
    // Sans ce tableau, useEffect serait appelé à chaque rendu du composant,
    // ce qui pourrait provoquer des appels répétés à l'API et ralentir l'application.

    listTrajet();
  },[]);

  return (
    <>
      {/* // <Header />   */}
      <section className="presentation">
        <h1>Las'Car - Plateforme de covoiturage</h1>
      </section>
      <section className="section-actus">
        <h2>Les Actualités</h2>
        <div className="a-propos">
          <h3>A propos</h3>
          <div className='a-propos-content'>
            <img src={LOGO}/>
            <p>LAS’CAR est une application de transport fondée sur une communauté. Elle permet chaque année à XX de membres actifs de partager un trajet en France.
            La plateforme met en relation des conducteurs ayant des places libres avec des passagers se rendant dans la même direction, afin qu’ils puissent partager les frais du trajet.</p>
          </div>
        </div>
        <div className="derniers-avis">
          <h3>Derniers avis</h3>
        </div>
        <div className="taux-activites">
          <h3>Taux d'activités</h3>
        </div>
        <div className="nouveaux-trajets">
          <h3>Nouveaux Trajets</h3>
          <div className='trajet-container'>
            {trajets.length === 0 ? (
            <p>Aucun Trajet Trouvé</p>
            ) : (
              trajets.map((trajets)=>{
              const [date, heure] =trajets.date_de_depart.split(" ");
              const [year, month, day] = date.split("-");
              const [hour,minute] = heure.split(":");

              return( <div key={trajets.id} className='carte-trajet'>
                  <h4>{trajets.lieu_depart}→{trajets.lieu_arrivee}</h4>
                  <p>Date de départ: {day}-{month}-{year}</p>
                  <p>Heure de départ: {hour}h{minute}</p>
               </div>
               ); 
              })
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}