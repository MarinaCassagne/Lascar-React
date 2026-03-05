import "./Register.css";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import voiture from "../../assets/IMG/Voiture.png";
import api from '../../api/axiosInstance';
import { useState } from 'react';

export default function Register() {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const {data} = await api.post('/api/users/register',{
        nom: nom,
        prenom: prenom,
        date_naissance: dateNaissance,
        telephone: tel,
        email: email,
        mot_de_passe: password,
      });

      console.log('Data reçue:', data);
    } catch (error) {
      console.error('Erreur réseau:', error);
    }
  };
  
  
  return (
    <>
      <Header />
      
      <div className="register-wrapper">
        <img src={voiture} alt="Voiture LAS'CAR" />

        <form onSubmit={handleSubmit}>
          <h1>Inscrivez-vous</h1>
          <label>
            Votre prénom
            <input id="prenom"
                type="text"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                placeholder="Prénom"
                required />
          </label>

          <label>
            Votre nom
            <input id="nom"
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder="Nom"
                required />
          </label>

          <label>
            Date de naissance
            <input
                id="dateNaissance"
                type="date"
                value={dateNaissance}
                onChange={(e) => setDateNaissance(e.target.value)}
                required
            />
          </label>

          <label>
            Votre téléphone
            <input id="téléphone"
                type="telephone"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                placeholder="Téléphone"
                required />
          </label>

          <label>
            Votre adresse e-mail
            <input  id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                required />
          </label>

          <label>
            Votre mot de passe
            <input id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe"
                required />
          </label>

          <button type="submit">S'inscrire</button>
        </form>
      </div>
      <Footer />
    </>
  );
}
