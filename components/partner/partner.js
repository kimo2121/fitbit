import React from "react";
import styles from "./partner.module.css";
import nike from "../../public/static/icons/nike.png";
import armour from "../../public/static/icons/armour.png";
import puma from "../../public/static/icons/puma.png";
import addidas from "../../public/static/icons/addidas.png";
import Image from "next/image";
const images = [nike, armour, puma, addidas];

const Partner = () => {
  return (
    <div className={styles.partner}>
      <div className={styles.innerPartner}>
        <p>OUR BRAND PARTNERS</p>
        <div className={styles.brands}>
          {images.map((item, index) => (
            <Image key={index} src={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
