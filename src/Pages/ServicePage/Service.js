import React from "react";
import "./Service.css";
import barber from "../../assets/barber.jpeg";
import shaving from "../../assets/shaving.jpeg";
import styling from "../../assets/styling.jpeg";

const Service = () => {
  return (
    <React.Fragment>
      <h1 className="serviceheader"> Our Services</h1>
      <div className="section1">
        <img src={barber} alt="" className="img1" />
        <br />
        <h1 className="haircut">HAIR-CUTS </h1>
        <h1>
          Men HairCut <span> ━━━ Rs.150</span>
        </h1>
      </div>
      <div className="section2">
        <img src={shaving} alt="" className="img2" />
        <br />
        <h1 className="shaving">SHAVING</h1>
        <h1>
          Men Shaving <span>━━━ Rs.150</span>
        </h1>
      </div>
    </React.Fragment>
  );
};

{
  /* <img src={styling} alt="" className='image3'/>    
        <img src={styling} alt="" className='image4'/>     */
}

export default Service;
