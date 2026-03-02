import "./Register.css";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import voiture from "../../assets/IMG/Voiture.png";

export default function Register() {
  return (
    <>
      <Header />
      
      <div className="register-wrapper">
        <img src={voiture} alt="Voiture LAS'CAR" />

        <form action="">
          <h1>Inscrivez-vous</h1>
          <label>
            Votre prénom
            <input name="firstName" placeholder="Prénom" />
          </label>

          <label>
            Votre nom
            <input name="lastName" placeholder="Nom" />
          </label>

          <label>
            Date de naissance
            <input
              type="date"
              name="birthDate"
              placeholder="Date de naissance"
            />
          </label>

          <label>
            Votre téléphone
            <input type="tel" name="phone" placeholder="Téléphone" />
          </label>

          <label>
            Votre adresse e-mail
            <input type="email" name="e-mail" placeholder="E-mail" />
          </label>

          <label>
            Votre mot de passe
            <input type="password" name="password" placeholder="Mot de passe" />
          </label>

          <button type="submit">S'inscrire</button>
        </form>
      </div>
      <Footer />
    </>
  );
}
