import React from "react";
import '../speakers/speaker.css'
import Speaker1 from '../../images/speakers1.jpg';
import Speaker3 from '../../images/speakers3.jpg';
import Speaker4 from '../../images/speakers4.jpg';
import Speaker5 from '../../images/speakers5.jpg';
import Speaker6 from '../../images/speakers6.jpg';

const SpeakersMemberData = [
  {
    image: Speaker1,
    name: "Nadiyah",
    designation: "Business Development of NIEC Medan",
  },
  {
    image: Speaker3,
    name: "Afkari",
    designation: "English Teacher of NIEC Yogyakarta",
  },
  {
    image: Speaker4,
    name: "Nasaruddin",
    designation: "Country Director of NIEC INDONESIA",
  },
  {
    image: Speaker5,
    name: "Ardiansyah",
    designation: "Branch Manager of NIEC Makassar",
  },
  {
    image: Speaker6,
    name: "Leny Savitri",
    designation: "Corporate HR of NIEC INDONESIA",
  },
];

const Speakers = () => {
  return (
    <div className="speakers-section">
      <div className="container">
        <div className="section-title">
          <span>LISTEN TO THE EVENT SPEAKERS</span>
          <h2>Who's Speaking</h2>
          <div className="bar"></div>
          <div className="bg-title">Speakers</div>
        </div>
      </div>
      <div className="speakers-container">
        {SpeakersMemberData.map((speaker, index) => (
          <div className="speaker-card" key={index}>
            <div className="elkevent-single-speakers">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="speaker-image"
              />
              <div className="speakers-content">
                <h3>{speaker.name}</h3>
                <span>{speaker.designation}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;