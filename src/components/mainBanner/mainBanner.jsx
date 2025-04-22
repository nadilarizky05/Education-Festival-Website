import React from 'react';
import { Button } from 'react-bootstrap';
import { FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import '../mainBanner/mainBanner.css';

const MainBanner = () => {
  const handleRegisterClick = () => {
    console.log('Registration button clicked');
  };

  return (
    <div className='main-banner'>
      <div className="container">
        <div className="banner-content">
          <p className="banner-tagline">Datang & Konsultasi Gratis</p>
          <h1 className="banner-title" style={{ textShadow:'5px 5px 5px black' }}>
            Festival Pendidikan Kuliah <br className="d-none d-md-block" />
            Luar Negeri <br className="d-none d-md-block" />
            <span className="banner-year">2025</span>
          </h1>
          <ul className="banner-details">
            <li><FaMapMarkerAlt className="icon icon-location" />Medan, Jakarta, Bandung, Yogyakarta, Surabaya, Makassar, & Denpasar</li>
            <li><FaCalendar className="icon" />26 Juni - 05 Juli 2025</li>
          </ul>
          <Button className='custom-register-btn' onClick={handleRegisterClick} href="#daftar" type='button'>Daftar Sekarang</Button>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;