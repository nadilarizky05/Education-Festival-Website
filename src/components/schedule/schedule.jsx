import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import '../schedule/schedule.css';
import { FaUser, FaClock, FaMapMarkedAlt } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import Author1 from '../../images/author1.jpg';
import Author3 from '../../images/author3.jpg';
import Author4 from '../../images/author4.jpg';
import Author5 from '../../images/author5.jpg';
import Author6 from '../../images/author6.jpg';
import Author7 from '../../images/author7.jpeg';
import CampusPartner from '../../images/logo_kampus_partner.png';
import CampusPartner2 from '../../images/logo_kampus_partner_mobile.png';

const scheduleData = [
  {
    city: "Medan",
    date: "Kamis, 26 Juni 2025",
    time: "16:00 - 20:00 WIB",
    title: "Free Workshop : TBA",
    speaker: {
      name: "Nadiyah Nilfannisa",
      role: "Business Development of NIEC Medan",
      image: Author1
    },
    location: {
      name: "Grand Mercure Maha Cipta Medan Angkasa - Medan",
      mapUrl: "https://maps.app.goo.gl/Uir7gqh2UabnZPBA6"
    }
  },
  {
    city: "Jakarta",
    date: "Sabtu, 28 Juni 2025",
    time: "15:00 - 19:00 WIB",
    title: "Free Workshop : TBA",
    speaker: {
      name: "Vicky",
      role: "Branch Manager of NIEC Jakarta",
      image: Author7
    },
    location: {
      name: "Swiss Belresidences Kalibata - Jakarta",
      mapUrl: "https://maps.app.goo.gl/JFH3GSWJLntrCLtV6"
    }
  },
  {
    city: "Bandung",
    date: "Minggu, 29 Juni 2025",
    time: "15:00 - 19:00 WIB",
    title: "Free Workshop : TBA",
    speaker: {
      name: "Nasaruddin",
      role: "Country Director of NIEC INDONESIA",
      image: Author4
    },
    location: {
      name: "Ibis Bandung Pasteur - Bandung",
      mapUrl: "https://maps.app.goo.gl/c1jmUm3Z1zJDhPCf8"
    }
  },
  {
    city: "Yogyakarta",
    date: "Selasa, 01 Juli 2025",
    time: "16:00 - 20:00 WIB",
    title: "Free Workshop : TBA",
    speaker: {
      name: "Afkari Rahmadiani",
      role: "English Teacher of NIEC Yogyakarta",
      image: Author3
    },
    location: {
      name: "Royal Ambarukmo Hotel - Yogyakarta",
      mapUrl: "https://maps.app.goo.gl/iHjBvi8dVpZVp5Rw8"
    }
  },
  {
    city: "Surabaya",
    date: "Kamis, 03 Juli 2025",
    time: "16:00 - 20:00 WIB",
    title: "Free Workshop : TBA",
    speaker: {
      name: "Nasaruddin",
      role: "Country Director of NIEC INDONESIA",
      image: Author4
    },
    location: {
      name: "Wyndham Hotel - Surabaya",
      mapUrl: "https://maps.app.goo.gl/RqcUUJ9xMHEBv9iUA"
    }
  },
  {
    city: "Makassar",
    date: "Jumat, 04 Juli 2025",
    time: "16:00 - 20:00 WITA",
    title: "Free Workshop : TBA",
    speaker: {
      name: "Ardiansyah",
      role: "Branch Manager of NIEC Makassar",
      image: Author5
    },
    location: {
      name: "Four Points by Sheraton - Makassar",
      mapUrl: "https://maps.app.goo.gl/is3tJFzWUvwP9yeH8"
    }
  },
  {
    city: "Denpasar",
    date: "Sabtu, 05 Juli 2025",
    time: "15:00 - 19:00 WITA",
    title: "Jangan Salah Pilih Jurusan Kuliah \"Gratis Test Psikologi\"",
    speaker: {
      name: "Leny Savitri",
      role: "Corporate Human Resource of NIEC INDONESIA",
      image: Author6
    },
    location: {
      name: "Swiss BellHotel Rainforest Kuta - Bali",
      mapUrl: "https://maps.app.goo.gl/NoqCZZDBmC7g1aiT8"
    }
  }
];

const ScheduleItem = ({ event, isMobile }) => {
  return (
    <div className="single-schedule">
      <div className="schedule-date">
        <div className="d-table">
          <div className="d-table-cell">
            {event.city}
            <span>{event.date}</span>
          </div>
        </div>
      </div>
      
      <div className="schedule-content">
        {isMobile ? (
          // Mobile layout
          <div className="schedule-info">
            <h3><a href="#jadwal">{event.title}</a></h3>
            <ul>
              <li>
                <FaUser/> By{" "}
                <a href="#jadwal">{event.speaker.name}</a> {event.speaker.role}
              </li>
              <li>
                <FaClock/> <b>{event.time}</b>
              </li>
              <li>
                <FaMapMarkedAlt/> <a href={event.location.mapUrl} target="_blank" rel="noopener noreferrer" className="location">{event.location.name}</a>
              </li>
            </ul>
          </div>
        ) : (
          // Desktop layout
          <>
            <div className="author">
              <img 
                className="img2" 
                src={event.speaker.image} 
                title={event.speaker.name} 
                alt="schedule" 
                width={150} 
                height={150} 
              />
            </div>
            <div className="schedule-info">
              <h3><a href="#jadwal">{event.title}</a></h3>
              <ul>
                <li>
                  <FaUser/> By{" "}
                  <a href="#jadwal">{event.speaker.name}</a> {event.speaker.role}
                </li>
                <br />
                <li>
                  <FaClock/> {event.date} <b>({event.time})</b>
                </li>
              </ul>
              <ul>
                <li>
                  <FaMapMarkedAlt/> <a href={event.location.mapUrl} target="_blank" rel="noopener noreferrer" className="location">{event.location.name}</a>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const MobileScheduleItem = ({ event }) => {
  return (
    <div className="single-schedule mobile-schedule">
      <div className="schedule-date">
        {event.city}
        <span>{event.date}</span>
      </div>
      
      <div className="schedule-content mobile">
        <div className="schedule-image">
          <img 
            className="img2" 
            src={event.speaker.image} 
            title={event.speaker.name} 
            alt="schedule" 
          />
        </div>
        <div className="schedule-info">
          <h3>{event.title}</h3>
          <p className="speaker-info">
            <FaUser className="icon" /> By <a href="#jadwal" className="speaker-name">{event.speaker.name}</a> {event.speaker.role}
          </p>
          <p className="time-info">
            <FaClock className="icon" /> <b>{event.time}</b>
          </p>
          <p className="location-info">
            <FaMapMarkedAlt className="icon" /> <a href={event.location.mapUrl} target="_blank" rel="noopener noreferrer" className="location">{event.location.name}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

const EventSchedules = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="schedule-area bg-image">
        <div className="container">
          <div className="section-title-schedule">
            <div className="bg-title">Event</div>
            <h2 className="pb-2">Schedule Event</h2>
            <Button className='custom-register-btn btn-schedule' href="#daftar" type='button'>
              Daftar Sekarang
            </Button>
          </div>

          <div className="row">
            {isMobile ? (
              // Mobile view
              <div className="mobile-schedule-container">
                {scheduleData.map((event, index) => (
                  <MobileScheduleItem key={index} event={event} />
                ))}
                <div className="campus-partner-container">
                  <img
                    className="img2"
                    src={CampusPartner2}
                    alt="campus_partner"
                  />
                </div>
              </div>
            ) : (
              // Desktop view
              <Swiper navigation={true} modules={[Navigation]} className="schedule-slides">
                <SwiperSlide className="col-lg-12 col-md-12">
                  <div className="schedule-slides-item">
                    {scheduleData.map((event, index) => (
                      <ScheduleItem key={index} event={event} isMobile={isMobile} />
                    ))}
                    
                    <div className="campus-partner-container">
                      <img
                        className="img2 pt-5"
                        src={CampusPartner}
                        alt="campus_partner"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            )}
          </div>
        </div>

        {/* <div className="shape2 rotateme">
          <img src={Shapes1} alt="shape2" width={38} height={38} />
        </div>
        <div className="shape3 rotateme">
          <img src={Shapes3} alt="shape3" width={51} height={57} />
        </div>
        <div className="shape4">
          <img src={Shapes4} alt="shape4" width={29} height={29} />
        </div> */}
      </div>
    </>
  );
};

export default EventSchedules;