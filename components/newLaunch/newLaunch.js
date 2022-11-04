import React from "react";
import Button from "../button/button";
import styles from "./newLaunch.module.css";
import Title from "../title/title";
import shoes from "../../public/static/images/shoes.png";
import shoes2 from "../../public/static/images/shoes2.png";
import handbag from "../../public/static/images/handbag.png";
import pants from "../../public/static/images/pants.png";
import bag from "../../public/static/images/bag.png";
import mask from "../../public/static/images/mask.png";
import LaunchCard from "../launchCard/launchCard";

const products = [
  {
    img: shoes,
    name: "Nike Metcon 7",
    price: "$120.00",
    category: "Training Shoes",
  },
  {
    img: handbag,
    name: "Nike Heritage",
    price: "$11.99",
    category: "Crossbody Bag",
  },
  {
    img: pants,
    name: "Nike Pro Dri-FIT",
    price: "$25.00",
    category: "Women's Training Leggings",
  },
  {
    img: bag,
    name: "Nike One",
    price: "$45.00",
    category: "Women's Training Tote Bag",
  },
  {
    img: mask,
    name: "Nike Venturer",
    price: "$34.99",
    category: "Performance Face Mask",
  },
  {
    img: shoes2,
    name: "Nike Metcon 4",
    price: "$105.00",
    category: "Women's Training Shoes",
  },
];

const NewLaunch = () => {
  return (
    <div id="Shop" className={styles.newLaunch}>
      <div className={styles.launchHeader}>
        <Title title="New Launch" />
        <Button label="View All" ClassNameAtt="launchBtn" />
      </div>
      <div className={styles.launchCards}>
        {products.map((product, index) => (
          <LaunchCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewLaunch;
