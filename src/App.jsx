import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Login from './pages/Login';
// import Register from './pages/register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </BrowserRouter> 
  );
}

export default App
