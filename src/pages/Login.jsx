import { Link , useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header/Header';
import {useState} from 'react';
import VOITURE from '../assets/IMG/Voiture.png';
import Footer from '../components/layout/Footer/Footer';
import './Login.css';

export default function Login() {
  // utilisation de useState pour gérer l'état du mail et du mot de passe dans le formulaire
  // useNavigate permet de gérer les redirections de routes
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // Function HandleSubmit qui permet de gérer ce qu'il se passe lors de la soumission du formulaire:
  // Appelle de l'API et de la route pour se login avec la méthode (POST), les informations Headers,
  // et le body de la requête qui contiendra le mail et le mot de passe au format demandé par l'API
  const handleSubmit = async (e) => {
    // preventDefault évite le rechargement de la page
    e.preventDefault();
    try{
      const response = await fetch('http://localhost:8000/api/login', {
        method : 'POST',
        headers : {'Content-Type' :'application/json'},
        body: JSON.stringify({
          'email' : email,
          'mot_de_passe' : password,
        }),
      });
      
      // Récupération de la réponse de l'API contenant le TOKEN et des infos utilisateurs
      const data = await response.json();

      // Si la réponse est ok (200) alors je stock le token dans mon localstorage
      if(response.ok){
        console.log('Login Réussi:', data);
        localStorage.setItem('Token', data['token']);
        navigate("/");
      // Sinon erreur de connexion
      }else{
        console.error('Erreur de login', data.message);
      }
    }catch(error){
      console.error('Erreur réseau:', error);
    }

  };

  return (
    <>
        <Header />
        <div>
          <img src={VOITURE} alt="image voiture"/>
          <form onSubmit={handleSubmit}>
            <label>E-mail</label>
            <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
            <label>Password</label>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Mot de passe"/>
            <p>
              <Link to="/inscription">Pas encore membre ? Inscrivez-vous</Link>
            </p>
            <button type="submit">Se connecter</button>
          </form>
        </div>
        <Footer />
    </>
  );
}