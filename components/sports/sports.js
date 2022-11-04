import React from "react";
import styles from "./sports.module.css";
import workout from "../../public/static/images/workout.png";
import store from "../../public/static/images/store.png";
import equipment from "../../public/static/images/equipment.png";
import yoga from "../../public/static/images/yoga.png";
import Button from "../button/button";
import Image from "next/image";

const data = [
  { img: workout, title1: "Workout", title2: "Classes", btn: "Browse" },
  {
    img: equipment,
    title1: "Browse",
    title2: "Equipment",
    btn: "Browse",
  },
  { img: yoga, title1: "Yoga", title2: "Classes", btn: "Browse" },
  { img: store, title1: "Brand", title2: "Store", btn: "Shop now" },
];
const Sports = () => {
  return (
    <div id="Browse Classes" className={styles.sportsContainer}>
      {data.map((item, index) => (
        <div key={index} className={styles.card}>
          <Image className={styles.cardImg} src={item.img} />
          <div className={styles.cardName}>
            <div>
              <h1>{item.title1}</h1>
              <h1>{item.title2}</h1>
            </div>
            <Button ClassNameAtt="sportsBtn" label={item.btn} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sports;
