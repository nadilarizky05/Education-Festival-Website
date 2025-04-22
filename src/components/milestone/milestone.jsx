import React from "react";
import '../milestone/milestone.css';

const milestoneData = [
  {
    iconName: "icofont-briefcase",
    number: "15",
    text: "Tahun Pengalaman",
  },
  {
    iconName: "icofont-graduate",
    number: "6000+",
    text: "Student",
  },
  {
    iconName: "icofont-university",
    number: "250+",
    text: "Partner Kampus",
  },
  {
    iconName: "icofont-globe",
    number: "20+",
    text: "Negara",
  },
];

const Milestone = () => {
  return (
    <div className="milestone">
      <div className="container">
        <div className="row justify-content-center">
          {milestoneData.map((value, i) => (
            <div className="col-sm-3" key={i}>
              <div className="content-milestone">
                <div>
                  <i className={value.iconName}></i>
                </div>
                <h3>{value.number}</h3>
                <p>{value.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Milestone;