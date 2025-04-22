import React from "react";
import '../footer/footer.css'
import Logo from '../../images/logo.svg'
import { FaCalendarAlt, FaMapMarkedAlt, FaInstagram, FaFacebookF, FaTiktok, FaYoutube, FaLinkedinIn} from 'react-icons/fa';
import { HiAtSymbol } from 'react-icons/hi';

const Footer = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Venue Location</h3>
                <span>
                  <FaCalendarAlt/> 26 Juni - 05 Juli 2025
                </span>

                <p className="location">
                  <FaMapMarkedAlt/> <a href="https://maps.app.goo.gl/Uir7gqh2UabnZPBA6" target="_blank" rel="noopener noreferrer">Grand Mercure Maha Cipta Medan Angkasa</a>
                </p>

                <p className="location">
                  <FaMapMarkedAlt/> <a href="https://maps.app.goo.gl/JFH3GSWJLntrCLtV6" target="_blank" rel="noopener noreferrer">Swiss Belresidences Kalibata - Jakarta</a> 
                </p>

                <p className="location">
                  <FaMapMarkedAlt/> <a href="https://maps.app.goo.gl/c1jmUm3Z1zJDhPCf8" target="_blank" rel="noopener noreferrer">Ibis Bandung Pasteur - Bandung</a> 
                </p>

                <p className="location">
                  <FaMapMarkedAlt/> <a href="https://maps.app.goo.gl/v7Kf8qMoXvTNY6cX9" target="_blank" rel="noopener noreferrer">Royal Ambarukmo Hotel - Yogyakarta</a>
                </p>

                <p className="location">
                  <FaMapMarkedAlt/> <a href="https://maps.app.goo.gl/RqcUUJ9xMHEBv9iUA" target="_blank" rel="noopener noreferrer">Wyndham Hotel - Surabaya</a>
                </p>
                
                <p className="location">
                  <FaMapMarkedAlt/> <a href="https://maps.app.goo.gl/is3tJFzWUvwP9yeH8" target="_blank" rel="noopener noreferrer">Four Points by Sheraton - Makassar</a>
                </p>

                <p className="location">
                  <FaMapMarkedAlt/> <a href="https://maps.app.goo.gl/NoqCZZDBmC7g1aiT8" target="_blank" rel="noopener noreferrer">Swiss BellHotel Rainforest Kuta - Bali</a>
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Social Connection</h3>
                <p>
                  Don&apos;t miss Link thing! Receive daily news. You should
                  connect social area for Any Proper Updates Anytime.
                </p>

                <ul className="social-links">
                  {/* ========= YOUTUBE ========== */}
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCA5qiOgJdfMvADpyU7Oz7fQ"
                      className="youtube"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube/>
                    </a>
                  </li>

                  {/* ========= INSTAGRAM ============ */}
                  <li>
                    <a
                      href="https://www.instagram.com/niec_indonesia/"
                      className="instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram/>
                    </a>
                  </li>
                  
                  {/* ========= LINKEDIN ========== */}
                  <li>
                    <a
                      href="https://www.linkedin.com/company/niec-indonesia/posts/?feedView=all"
                      className="linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn/>
                    </a>
                  </li>

                  {/* ========= FACEBOOK ========== */}
                  <li>
                    <a
                      href="https://www.facebook.com/niec.indonesia/?locale=id_ID"
                      className="facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF/>
                    </a>
                  </li>

                  {/* ========= TIKTOK ============ */}
                  <li>
                    <a
                      href="https://www.tiktok.com/@niec_indonesia/"
                      className="tiktok"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTiktok/>
                    </a>
                  </li>

                  
                  {/* ========= x ========== */}
                  {/* <li>
                    <a
                      href="https://www.youtube.com/channel/UCA5qiOgJdfMvADpyU7Oz7fQ"
                      className="x"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTimes/>
                    </a>
                  </li> */}
                  {/* ========= THREADS ========== */}
                  <li>
                    <a
                      href="https://www.threads.net/@niec_indonesia"
                      className="threads"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <HiAtSymbol/>
                    </a>
                  </li>
                  
                  
                </ul>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="copyright-area">
                <div className="logo mx-auto">
                  <a href="/">
                    <img
                      src={Logo}
                      alt="logo"
                      width="60"
                      height="38"
                    />
                  </a>
                </div>

                <p>
                  <br />
                  © 2025 Copyright <a href="https://niecindonesia.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration:'none', color:'white', fontWeight:600 }}>NIEC Indonesia</a>. All Rights Reserved. CV Naresy Indonesia <br />Designed by NIEC IT Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
