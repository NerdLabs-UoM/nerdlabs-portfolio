import React from "react";

import stylescontent from "./AboutUs.module.css";
import image1 from "../AboutUs/aboutus1.png";
import image2 from "../AboutUs/aboutus2.png";
import image3 from "../AboutUs/aboutus3.png";

export default function AboutUs() {
  return (
    <div>
      <div className={stylescontent.topic1}>
        <span style={{ color: " white" }}> Innovation </span>
        <span style={{ color: " purple" }}> Meets </span>
        <span style={{ color: " white" }}> Expertise </span>
      </div>

      <div>
        <p style={{ color:" violet"}}className={stylescontent.intro1}>
          We specialize in delivering tailored IT solutions that drive growth,
          efficiency, and digital transformation
        </p>
      </div>

      <div>
        <div className={stylescontent.images}>
          <div>
            <img className={stylescontent.img1} src={image1} alt="image1" />
          </div>
          <div>
            <img className={stylescontent.img2} src={image2} alt="image2" />
          </div>
          <div>
            <img className={stylescontent.img3} src={image3} alt="image3" />
          </div>
        </div>
      </div>
    </div>
  );
}
