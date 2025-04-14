import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './header.css';

function Header({ onLogoClick }) {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    onLogoClick(); 
    navigate('/game'); 
  };
  
  return (
    <header className="header">
      <nav className="menu">
        
        <Link to="/dictionary">Словарь</Link>
        <Link to="/stats">Статистика</Link>
        <Link to="/about">О приложении</Link>
      </nav>
      <div className="logo">
        <Link to="/" className="logo-link" onClick={handleLogoClick}>Speak-Peak</Link>
      </div>
    </header>
  );
}

export default Header;