// src/components/PopupProfil.jsx
import React from 'react';
import '../style.css';

const PopupProfil = ({ onClose }) => {
  const profilData = {
    geografis: `Secara Geografis, Kelurahan Kemasan terletak pada -7081'86.5" lintang selatan dan 112001'58.0" bujur timur. 
    Jarak dari Kelurahan Kemasan ke kantor Kecamatan 2 km dan dari Kelurahan Kemasan ke balai kota adalah 1 km.`,
    batasWilayah: `
      - Sebelah Utara: Kelurahan Balowerti dan Kelurahan Dandangan
      - Sebelah Selatan: Kelurahan Jagalan
      - Sebelah Timur: Kelurahan Banjaran 
      - Sebelah Barat: Kecamatan Setono Gedong dan Kelurahan Banjaran
    `,
    ekonomiUnggulan: [
      'UMKM Ikan Hias',
      'Bakpia Almair',
      'Kecakot',
      'TNT Souvenir',
    ],
    potensiKelurahan: 'Kampung Pecut adalah salah satu potensi unggulan Kelurahan Kemasan, yang dikenal dengan kerajinan tangan dan budaya lokalnya.',
  };

  return (
    <div className="popup-profil-overlay">
      <div className="popup-profil-content">
        <h2>Profil Kelurahan Kemasan</h2>
        
        <section>
          <h3>1. Kondisi Geografis</h3>
          <p>{profilData.geografis}</p>
        </section>

        <section>
          <h3>2. Batas Wilayah Kelurahan Kemasan</h3>
          <pre>{profilData.batasWilayah}</pre>
        </section>

        <section>
          <h3>3. Struktur Pemerintahan Kelurahan Kemasan</h3>
          <img src="/kemasan-mapping/diagram-struktur.png" alt="Diagram Struktur Pemerintahan" />
        </section>

        <section>
          <h3>4. Ekonomi Unggulan</h3>
          <ul>
            {profilData.ekonomiUnggulan.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3>5. Potensi Kelurahan (Kampung Pecut)</h3>
          <p>{profilData.potensiKelurahan}</p>
        </section>

        <button className="popup-profil-close-btn" onClick={onClose}>Tutup</button>
      </div>
    </div>
  );
};

export default PopupProfil;