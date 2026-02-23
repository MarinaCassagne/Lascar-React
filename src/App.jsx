import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
// import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Research from './pages/Research/Research';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Welcome />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/research" element={<Research />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App

