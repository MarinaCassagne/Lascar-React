import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import "./Publish.css";
import { Link } from "react-router-dom";

export default function Publish() {
  return (
    <>
      <Header />
      <h1>Proposer un trajet</h1>
      <p>En tant que:</p>
      <Link to="/publish/driver">
        <button>Conducteur</button>
      </Link>
      <Link to="/publish/passenger">
        <button>Passager</button>
      </Link>
      <Footer />
    </>
  );
}
