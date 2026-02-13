import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;