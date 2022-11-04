import React from "react";
import Title from "../title/title";
import styles from "./about.module.css";
import Image from "next/image";
import about from "../../public/static/images/about.png";

const About = () => {
  return (
    <div id="About Us" className={styles.about}>
      <div className={styles.aboutLeft}>
        <Title title="About Us." />
        <p>
          Fitbit was founded in 2020 as a family owned and operated business
          specialising in supplying high-quality gym equipment at great prices.
        </p>
      </div>
      <div className={styles.aboutRight}>
        <Image alt="about" src={about} />
      </div>
    </div>
  );
};

export default About;
