import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header/Header';
import { useState } from 'react';
import VOITURE from '../../assets/IMG/Voiture.png';
import Footer from '../../components/layout/Footer/Footer';
import './Login.css';
// On importe notre instance Axios centralisée
import api from '../../api/axiosInstance';
// On importe le store Zustand pour stocker les tokens
import useAuthStore from '../../store/authStore';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // On récupère les fonctions du store Zustand
  const { setTokens, setUser } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const {data} = await api.post('/api/login',{
        email: email,
        mot_de_passe: password,
      });

      console.log('Data reçue:', data);
      // On stocke les tokens dans Zustand
      // token sans le "Bearer " car l'intercepteur l'ajoute automatiquement
      setTokens(data.token, data.refresh_token);

      // On stocke les infos utilisateur dans Zustand
      setUser(data.user);

      navigate('/');
    } catch (error) {
      console.error('Erreur réseau:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="login-wrapper">

        {/* Image à gauche */}
        <div className="login-illustration">
          <img src={VOITURE} alt="Voiture LAS'CAR" />
        </div>

        {/* Formulaire à droite */}
        <div className="login-card">
          <h1>Connectez-vous</h1>

          <form onSubmit={handleSubmit}>
            <div className="login-field">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                required
              />
            </div>

            <div className="login-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>

            <p>
              <Link to="/inscription">Pas encore membre ? Inscrivez-vous</Link>
            </p>

            <button type="submit" className="login-btn">
              Se connecter
            </button>
          </form>
        </div>

      </div>

      <Footer />
    </>
  );
}