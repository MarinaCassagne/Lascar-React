import NavBar from '../NavBar/NavBar';
import './Header.css';

export default function MyHeader() {
  return (
    <header className="header">
      <div className="header-container">
        <h1>LAS'CAR</h1>
        <NavBar />
      </div>
    </header>
  );
}