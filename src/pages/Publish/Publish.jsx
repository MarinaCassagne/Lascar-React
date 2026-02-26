import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import {Link} from "react-router-dom";


export default function Publish(){
    return (
        <>
            <Header />
            <h2>Proposer un trajet</h2>
            <p>En tant que:</p>
            <Link to="/publish/driver"><button>Conducteur</button></Link>
            <Link to="/publish/passenger"><button>Passager</button></Link>
            <Footer />
        </>
    );
}