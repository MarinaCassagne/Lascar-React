import { Link, useNavigate } from 'react-router-dom';
// import Header from '../components/layout/Header/Header';
import { useState } from 'react';
import VOITURE from '../assets/IMG/Voiture.png';
import Footer from '../components/layout/Footer/Footer';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          mot_de_passe: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login Réussi:', data);
        localStorage.setItem('Token', data['token']);
        navigate('/');
      } else {
        console.error('Erreur de login', data.message);
      }
    } catch (error) {
      console.error('Erreur réseau:', error);
    }
  };

  return (
    <>
      {/* <Header /> */}
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