import React, { useState } from 'react';
import PopupSejarah from './Sejarah';
import PopupProfil from './PopupProfil';
import '../style.css'; // File CSS untuk styling

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSejarahPopup, setShowSejarahPopup] = useState(false);
  const [showProfilPopup, setShowProfilPopup] = useState(false);

  const handleSejarahClick = () => {
    setShowSejarahPopup(true);
  };

  const handleProfilClick = () => {
    setShowProfilPopup(true);
  };

  const handleCloseSejarahPopup = () => {
    setShowSejarahPopup(false);
  };

  const handleCloseProfilPopup = () => {
    setShowProfilPopup(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">KemasanMapping</div>
        <div className="navbar-toggle" onClick={toggleMobileMenu}>
          ☰
        </div>
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <button onClick={handleProfilClick} className="navbar-button">
              Profil
            </button>
          </li>
          <li>
            <button 
              onClick={handleSejarahClick} 
              className="navbar-button"
            >
              Sejarah
            </button>
          </li>
          <li>
          <button
              className="navbar-button"
            >
              Tentang Kami
            </button>
          </li>
        </ul>
      </div>
      {showSejarahPopup && <PopupSejarah onClose={handleCloseSejarahPopup} />}
      {showProfilPopup && <PopupProfil onClose={handleCloseProfilPopup} />}
    </nav>
  );
};

export default Navbar;
