import React, { forwardRef } from "react";
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
    style,
    card_btn
  },
  ref
) => {
  return (
    <div className={cardContainerCls} ref={ref} style={style}>
      <div className={cardTitleCls}>{cardTitle}</div>
      <div className={cardImgCls}>
        <img src={cardImg} alt="card-image" />
      </div>
      <p className={cardtextCls}>{text}</p>
      <div className={card_btn}>
        <button className={cardBtnCls}>Read More</button>
      </div>
    </div>
  );
};
export default forwardRef(Card);
