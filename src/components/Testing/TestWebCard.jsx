import TestCard from "./TestCard1";
import React, { Component, useRef, useEffect } from "react";
import fingerprint from "../../images/fingerprint.jpg";
import management from "../../images/management.jpeg";
import health from "../../images/health.jpeg";
// import s from "../WebCards/WebCards.module.css";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const TestWebCards = () => {
  const card1Ref = useRef(null);
  // const card2Ref = useRef(null);
  // const card3Ref = useRef(null);

  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);

    gsap.to(card1Ref.current,{x:500,y:600,rotation:360,duration:4})

  }, []);

  
  return (
    <div>
      <div className="bg-black h-[120vh] container">
        <div className="text-center text-white text-[35px] font-normal">Featured Projects</div>
        <div className="mx-auto py-9" ref={card1Ref}>
        <TestCard />         
        
          
        </div>
      </div>
    </div>
  );
};

export default TestWebCards;
