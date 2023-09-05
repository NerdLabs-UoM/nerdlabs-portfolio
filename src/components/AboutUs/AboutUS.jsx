import React from "react";

import stylescontent from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <div  className={stylescontent.topic1}>
      <span style ={{ color : " white" } }> Innovation </span>
      <span style={ { color : " purple" } }>  Meets </span>
      <span style={{ color : " white" } }> Expertise </span>
    </div>
  );
}
