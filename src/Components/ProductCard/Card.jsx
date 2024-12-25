import React from "react";
import Styles from "./style.module.css";

const Card = ({ title, Desc, image, category, price, rate, count }) => {
  return (
    <div className={Styles.divContainer}>
      <div className={Styles.cardImg}>
        <img src={image} alt={title} />
      </div>
      <div className={Styles.cardInfo}>
        <h2 className={Styles.cardTitle}>{title}</h2>
        <small className={Styles.cardCategory}>
          <a href="#">{category}</a>
        </small>
        <p className={Styles.cardDesc}>{Desc}</p>
        <p className={Styles.cardPrice}>Price: <strong>${price}</strong></p>
        <p className={Styles.cardRate}>
          Rating: <strong>{rate}</strong> ({count} reviews)
        </p>
        <button className={Styles.buyButton}>Buy Now</button>
      </div>
    </div>
  );
};

export default Card;
