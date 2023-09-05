// import react from '@heroicons/react';
import React, { forwardRef } from "react";
// import Card from "./ab";
import s from "./WebCards.module.css";

const Card = (
  {
    text,
    cardTitle,
    cardImg,
    cardContainerCls,
    cardTitleCls,
    cardImgCls,
    cardtextCls,
    cardBtnCls,
    style
  },
  ref
) => {
  return (
    <div className={cardContainerCls} ref={ref} style={style}>
      <div className={cardTitleCls}>{cardTitle}</div>
      <div className={cardImgCls}>
        <img src={cardImg} alt="image" />
      </div>
      <p className={cardtextCls}>{text}</p>
      <div className={s.card_btn}>
        <button className={cardBtnCls}>Read More</button>
      </div>
    </div>
  );
};

export default forwardRef(Card);
