import Image from "next/image";
import React from "react";

import styles from "./launchCard.module.css";

const LaunchCard = ({ product }) => {
  return (
    <div className={styles.launchCard}>
      <Image
        className={styles.img}
        src={product.img}
        alt={product.name}
        width={200}
        height={200}
      />
      <div className={styles.cardDetail}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>{product.price}</p>
      </div>
      <p>{product.category}</p>
    </div>
  );
};

export default LaunchCard;
