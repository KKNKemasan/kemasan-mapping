// src/components/Navbar.jsx
import React, { useState } from 'react';
import '../style.css'; // File CSS untuk styling

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      setMobileMenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className="navbar"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="navbar-container">
        <div className="navbar-logo">KemasanMapping</div>
        <div className="navbar-toggle" onClick={toggleMobileMenu}>
          ☰
        </div>
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home">Profil Desa</a></li>
          <li><a href="#about">Map</a></li>
          <li><a href="#services">Sejarah</a></li>
          <li><a href="#contact">Tentang Kami</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;