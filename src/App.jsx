import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Login from './pages/Login';
import Inscription from './pages/inscription';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App
