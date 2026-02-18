import './footer.css';
import Twitter from '../../../assets/IMG/twitter_45dp_011267.svg';
import Instagram from '../../../assets/IMG/instagram_45dp_011267.svg';
import Facebook from '../../../assets/IMG/facebook_45dp_011267.svg';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <img src={Instagram} alt="Logo-Instagram"/>
          <img src={Facebook} alt="Logo-Facebook"/>
          <img src={Twitter} alt="Logo-Twitter"/>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;