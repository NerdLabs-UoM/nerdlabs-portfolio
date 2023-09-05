import Card from "./Card";
import React, { Component, useRef, useEffect } from "react";
import fingerprint from "../../images/fingerprint.jpg";
import management from "../../images/management.jpeg";
import health from "../../images/health.jpeg";
import s from "./WebCards.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Timeline } from "gsap/gsap-core";

const WebCards = () => {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const desktop2Ref = useRef(null);
  const slideRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
      scrollTrigger: {
        trigger: desktop2Ref.current,
        start:"top top",
        end:"+=100",
        markers:true,
        scrub:1
      }
    })
    .to(
      card1Ref.current,
      {
        xPercent:100,
        duration:2,
        ease:"linear"
      })
      gsap.timeline({
        scrollTrigger: {
          trigger: desktop2Ref.current,
          start:"100 top",
          end:"+=100",
          markers:true,
          scrub:1
        }
      })
      // .to(card1Ref.current,{xPercent:150,opacity:0})
      .to(card2Ref,{x:100,opacity:1})

  }, []);



  return (
    <React.Fragment>
      <div className={s.desktop2} ref={desktop2Ref}>
        <div className={s.desktop2_topic}>Featured Projects</div>
        <div className={s.slide} ref={slideRef}>
          <Card
            ref={card1Ref}
            cardTitle="Fingerprint-based ATM system"
            cardImg={fingerprint}
            text="The Fingerprint-based ATM system project enhances security and 
            convenience by replacing traditional PINs with biometric authentication. 
            Users access their accounts by 
            scanning their fingerprints, ensuring a more secure and user-friendly banking experience."
            cardContainerCls={s.card}
            cardTitleCls={s.card_title}
            cardImgCls={s.card_image}
            cardtextCls={s.card_text}
            cardBtnCls={s.card_button}
            style={{ transform: "translateX(0%)", opacity: "1" }}
          />

          <Card
            ref={card2Ref}
            cardTitle="Advanced Employee Management System"
            cardImg={management}
            text="An advanced employee management system 
streamlines HR tasks, automates payroll, tracks 
attendance, manages benefits, and enhances 
employee engagement. It optimizes workforce 
operations, fostering efficiency and collaboration for 
organizational success."
            cardContainerCls={s.card}
            cardTitleCls={s.card_title}
            cardImgCls={s.card_image}
            cardtextCls={s.card_text}
            cardBtnCls={s.card_button}
            style={{ transform: "translateX(-200%)", opacity: "1" }}
          />

          <Card
            ref={card3Ref}
            cardTitle="Android Patient Tracker"
            cardImg={health}
            text="An Android patient tracker project offers a comprehensive 
            solution for healthcare management, enabling users to efficiently 
            track medical records, appointments, prescriptions, and vital information,
             ultimately improving patient care and healthcare accessibility."
            cardContainerCls={s.card}
            cardTitleCls={s.card_title}
            cardImgCls={s.card_image}
            cardtextCls={s.card_text}
            cardBtnCls={s.card_button}
            style={{ transform: "translateX(-300%)", opacity: "1" }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default WebCards;
