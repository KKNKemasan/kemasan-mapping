// src/components/PopupSejarah.jsx
import React from 'react';
import '../style.css'; // File CSS untuk styling popup sejarah

const PopupSejarah = ({ onClose }) => {
  const sejarahDesa = `
    Asal usul nama Kemasan berasal dari fakta bahwa dulunya adalah rumah bagi banyak tukang emas, 
    yaitu warga yang menjadi tukang emas. Lantaran banyak di huni pande emas, daerah di tengah kota Kediri ini di kenal sebagai Kemasan. 
    Namun kini pengrajinnya sudah bergeser pertokoan. Ratusan tahun yang lalu, pada zaman kerajaan Kediri kuno, wilayah Kemasan di kenal tempatnya emas. 
    Bukan hanya karena banyak komoditas logam mulia diperjualbelikan di sana, tetapi warga yang tinggal disana pun bermata pencaharian sebagai tukang pande emas. 
    Karenanya daerah ini di kenal pula dengan permukiman pengrajin emas. Di Kemasan ini dulunya banyak warga yang menjadi pengrajin emas baik nyepluh maupun membuat perhiasan murni. 
    Para pengrajin ini tersebar hampir diseluruh wilayah Kemasan, yang mana sekarang ini dikenal dengan nama Jalan Sriwijaya, Jalan Panglima Polim, hingga Patiunus. 
    Namun, seiring perkembangan zaman para pande emas ini semakin lama semakin berkurang. Usaha mereka jarang ada yang meneruskan dikarenakan pengrajinnya banyak yang sudah meninggal, dan tidak ada penerusnya lagi, 
    jadi semakin sedikit. Meski begitu, hingga kini di sepanjang Jl. Sriwijaya masih bisa di temui pande emas. Hanya saja, jumlahnya sudah tidak sebanyak dahulu dan keberadaan para perajin emas tersebut rupanya sudah tergeser oleh toko emas. 
    Untuk pande sendiri masih bisa ditemui, akan tetapi sangat terbatas jumlahnya. Kalaupun ada, kebanyakan dari mereka sudah merupakan pendatang yang ikut di toko emas. 
    Selain latar belakang permukiman pande emas, nama Kemasan juga di percaya muncul karena cerita Kisah Maling Gentiri. Sosok pencuri sakti pembela kaum miskin ini yang melawan penjajah belanda. Konon katanya, bisa di tangkap pemerintah kolonial lantaran di khianati temannya sendiri. Penjajah belanda pun membunuhnya di wilayah kelurahan jagalan. “Orang-orang zaman dulu juga ada yang menceritakan, kalau Kisah Maling Gentiri yang di jagal atau dipegggal kepalanya di wilayah Jagalan itu, kemudian di kemas di wilayah Kemasan.” Jadi, kata Kemasan sendiri di ambil dari proses kemas. Yakni merapikan, membungkus, mengemas jasad Maling Gentiri yang terpotong-potong. Jasad Maling Gentiri yang berupa potongan-potongan tubuh itu sempat dimandikan, dikremasi dan di bungkus di wilayah Kemasan.” Setelah itu, barulah kepalanya di kuburkan di daerah ringsinsari yang kini di kenal menjadi Lapangan Jayabaya. Lokasinya berada di belakang pusat perbelanjaan Jl Jayabaya, Kota Kediri. Sementara badannya di makamkan di wilayah Kemasan.tepatnya di daerah RT03/RW01 atau utara SMPN 3 Kediri.
  `;

  return (
    <div className="popup-sejarah-overlay">
      <div className="popup-sejarah-content">
        <h2>Sejarah Kelurahan Kemasan</h2>
        <p>{sejarahDesa}</p>
        <button onClick={onClose}>Tutup</button>
      </div>
    </div>
  );
};

export default PopupSejarah;