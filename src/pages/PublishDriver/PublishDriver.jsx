import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import { useState } from 'react';
import api from '../../api/axiosInstance';
// import { useNavigate } from 'react-router-dom';
import './PublishDriver.css';


export default function PublishDriver() {
    const [typeTrajet, setTypeTrajet] = useState('');
    const [adresseDepart, setAdresseDepart] = useState('');
    const [adresseArrivee, setAdresseArrivee] = useState('');
    const [dateDepart,setDateDepart] = useState('');
    const [nombrePlace, setNombrePlace] = useState('');
    const [prix, setPrix] = useState('');
    const [natureTrajet] = useState('Offre');
    // const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const { data } = await api.post('/api/publier_trajet',{
                date_de_depart: dateDepart,
                lieu_de_depart: adresseDepart,
                lieu_arrivee: adresseArrivee,
                nombre_de_place: nombrePlace,
                prix: prix,
                nature_trajet: natureTrajet,
                type_trajet: typeTrajet,
            })
            console.log('Data reçue:', data);
        }catch (error){
            console.error('Erreur réseau:', error);
        }
    };

    return (
        <>
            <Header />
            <h1>Informations du trajet</h1>
            <form onSubmit={handleSubmit}>
                <h3>Type de trajet</h3>
                <input type="radio" id="Domicile Travail" name="type_trajet" value="Domicile Travail" onChange={(e) => setTypeTrajet(e.target.value)}/>
                <label htmlFor="type_trajet">Domicile↔️Travail</label><br />

                <input type="radio" id="Evenement" name="type_trajet" value="Evenement" onChange={(e) => setTypeTrajet(e.target.value)}/>
                <label htmlFor="type_trajet">Evenement (culture/sportif)</label><br/>

                <h3>Adresse de départ</h3>
                <input type="text" id="AdresseDepart" name="lieu_de_depart" value={adresseDepart} onChange={(e) => setAdresseDepart(e.target.value)}/>

                <h3>Adresse d'arrivée</h3>
                <input type="text" id="AdresseDepart" name="lieu_arrivee" value={adresseArrivee} onChange={(e) => setAdresseArrivee(e.target.value)}/>

                <h3>Date et Heure de départ</h3>
                <input type="datetime-local" id="dateDepart" name="date_de_depart" value={dateDepart} onChange={(e) => setDateDepart(e.target.value)}/>

                <h3>Nombre de place dans la voiture</h3>
                <input type="number" id="NombrePlace" name="nombre_de_place" value={nombrePlace} onChange={(e) => setNombrePlace(e.target.value)}/>

                <h3>Prix</h3>
                <input type="number" step="0.01" id="prix" name="prix" value={prix} onChange={(e) => setPrix(e.target.value)}/>

                <button type="submit" className="publish-btn">
                    Publier le trajet
                </button>
            </form>

            <Footer />
        </>
    );
}