import React from 'react'
import '../about/about.css'
import { Button } from 'react-bootstrap';

const about = () => {
  return (
    <div>
      <div className="background-about" id="wef">
          <div className="row">
            <div className="col-lg-6 px-5">
                <h3><span className='content-green'>Konsultasi Gratis : </span>
                  101 Beasiswa
                </h3>
                <p>
                  World Education Festival adalah pameran pendidikan kuliah luar negeri yang dihadiri puluhan kampus dari banyak negara. Para peserta memiliki kesempatan untuk berkonsultasi eksklusif dengan lebih dari 300 universitas luar negeri, diwakili oleh perwakilan kampus dan konsultan <a href="https://www.niecindonesia.com/" target="blank">NIEC Indonesia</a>.
                </p>
                <h3 className='pt-2'>
                  <span className='content-green'>Menangkan Doorprize : </span>Free Flight Ticket to Singapore
                </h3>
                <p>
                  Untuk kamu yang bawa dokumen dan langsung apply kampus.<i className='text-danger'> <br /> *syarat & ketentuan berlaku</i> 
                </p>
            </div>
            <div className="col-lg-6 mb-5 px-5">
                <h3><span className='content-green'>Gara-Gara ini,</span> Kuliah Keluar Negeri Jadi Mudah</h3>
                <div className="benefit">
                  <ul className="pricing-content">
                    <li className='pb-1'>Gratis Workshop Kampus Luar Negeri</li>
                    <li className='pb-1'>Paid Internship J1 USA, Gaji hingga 500jt/tahun</li>
                    <li className='pb-1'>Total Beasiswa Ratusan juta rupiah</li>
                    <li className='pb-1'>Gratis Kursus Bahasa Inggris</li>
                    <li className='pb-1'>Gratis IELTS/ TOEFL Simulation Test</li>
                    <li className='pb-1'>Gratis Talent Mapping (anti salah jurusan!)</li>
                    <li className='pb-1'>Potongan Biaya Transkrip Dokumen</li>
                    <li className='pb-1'>Dapatkan Promo & Merchandise menarik</li>
                    <li className='pb-1'>Games, Kompetisi, Snack, dan masih banyak lagi</li>
                  </ul>
                </div>
            </div>
            <div className="button-container">
              <Button className='custom-register-btn' href="#daftar" type='button'>Daftar Sekarang</Button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default about