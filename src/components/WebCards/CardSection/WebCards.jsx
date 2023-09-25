import Card from "./Card";
import React, { useRef, useState } from "react";
import fingerprint from "../../../assets/fingerprint.jpg";
import management from "../../../assets/management.jpeg";
import health from "../../../assets/health.jpeg";
import train from "../../../assets/train.jpg";
import chess from "../../../assets/chess.jpg";
import social from "../../../assets/social.jpg";
import s from "./WebCards.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const WebCards = () => {
  const slideRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);
  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };
  const cards = [
    <Card
      cardTitle="Fingerprint-based ATM system"
      cardImg={fingerprint}
      text="The Fingerprint-based ATM system enhances banking security by replacing 
      traditional PINs with biometric authentication. Users can access their accounts 
      by scanning their fingerprints, offering a more secure and user-friendly ATM 
      experience, reducing the risk of unauthorized access and fraud."
      cardContainerCls={s.card}
      card_btn={s.card_btn}
      cardTitleCls={s.card_title}
      cardImgCls={s.card_image}
      cardtextCls={s.card_text}
      cardBtnCls={s.card_button}
    />,
    <Card
      cardTitle="Android Patient Tracker"
      cardImg={health}
      text="The Android Patient Tracker project is a healthcare management 
      app that allows healthcare providers to efficiently monitor and manage 
      patient records. It provides real-time access to patient information, 
      appointment scheduling, and medical history, enhancing the quality of 
      patient care and healthcare administration."
      cardContainerCls={s.card}
      card_btn={s.card_btn}
      cardTitleCls={s.card_title}
      cardImgCls={s.card_image}
      cardtextCls={s.card_text}
      cardBtnCls={s.card_button}
    />,
    <Card
      cardTitle="Local Train Ticketing System"
      cardImg={train}
      text="The Local Train Ticketing System is a software project 
      that streamlines the process of purchasing and managing train 
      tickets for local commuter trains. It enables users to book, 
      pay for, and store tickets electronically,enhancing convenience 
      and efficiency in urban transportation."
      cardContainerCls={s.card}
      card_btn={s.card_btn}
      cardTitleCls={s.card_title}
      cardImgCls={s.card_image}
      cardtextCls={s.card_text}
      cardBtnCls={s.card_button}
    />,
    <Card
      cardTitle="Advanced Employee Management System"
      cardImg={management}
      text="An advanced employee management system 
            streamlines HR tasks, automates payroll, tracks 
            attendance, manages benefits, and enhances 
            employee engagement. It optimizes workforce 
            operations, fostering efficiency and collaboration for 
            organizational success."
      cardContainerCls={s.card}
      card_btn={s.card_btn}
      cardTitleCls={s.card_title}
      cardImgCls={s.card_image}
      cardtextCls={s.card_text}
      cardBtnCls={s.card_button}
    />,
    <Card
      cardTitle="Chess Game"
      cardImg={chess}
      text="The Chess Mobile Game is an engaging software project that brings 
      the classic strategy game to mobile devices. Players can enjoy chess matches,
       challenge friends, and sharpen their tactical skills while experiencing an 
       intuitive and visually appealing mobile gaming interface."
      cardContainerCls={s.card}
      card_btn={s.card_btn}
      cardTitleCls={s.card_title}
      cardImgCls={s.card_image}
      cardtextCls={s.card_text}
      cardBtnCls={s.card_button}
    />,
    <Card
      cardTitle="Social Networking"
      cardImg={social}
      text="The Social Networking System project creates an online platform for 
      users to connect, share content, and build relationships. It features user 
      profiles, news feeds, messaging, and robust privacy controls, fostering a vibrant 
      and interactive online community."
      cardContainerCls={s.card}
      card_btn={s.card_btn}
      cardTitleCls={s.card_title}
      cardImgCls={s.card_image}
      cardtextCls={s.card_text}
      cardBtnCls={s.card_button}
    />,
  ];
  return (
    <React.Fragment>
      <div className={s.desktop2}>
        <div className={s.desktop2_topic}>Featured Projects</div>
        <div className={s.nav_button}>
          <button
            style={{ margin: "1% 30%" }}
            onClick={() => {
              handleHorizantalScroll(slideRef.current, 25, 100, -9);
            }}
            disabled={arrowDisable}
          >
            <FaArrowLeft style={{ color: "#a259ff" }} />
          </button>
          <button
            style={{ margin: "1% 30%" }}
            onClick={() => {
              handleHorizantalScroll(slideRef.current, 25, 100, 9);
            }}
          >
            <FaArrowRight style={{ color: "#a259ff" }} />
          </button>
        </div>
        <div className={s.slide} ref={slideRef}>
          {cards.map((cardPlace, i) => (
            <span key={i}>{cardPlace}</span>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
export default WebCards;
