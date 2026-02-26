import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Research from './pages/Research/Research';
import Publish from './pages/Publish/Publish';
import PublishDriver from './pages/PublishDriver/PublishDriver';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/publish/driver" element={<PublishDriver />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App

