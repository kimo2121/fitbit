import React, { useState } from "react";
import { Logo } from "../navbar/navbar";
import styles from "./footer.module.css";
import facebook from "../../public/static/icons/facebook.png";
import twitter from "../../public/static/icons/twitter.png";
import instagram from "../../public/static/icons/instagram.png";
import USA from "../../public/static/icons/USA.png";
import Image from "next/image";
import { Link } from "react-scroll";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const footerNav = [
  {
    name: "Browse Classes",
    to: "Browse Classes",
  },
  {
    name: "Shop Now",
    to: "Shop",
  },
  {
    name: "Our Studios",
    to: "Our Studios",
  },
  {
    name: "Services",
    to: "Services",
  },
  {
    name: "Pricing",
    to: "Pricing",
  },
  {
    name: "Our Blog",
    to: "Blog",
  },
  {
    name: "About Us",
    to: "About Us",
  },
  {
    name: "Contact Us",
    to: "Contact Us",
  },
];

const Footer = () => {
  const [language, setLanguage] = useState("usa");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div id="Contact Us" className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerTopContainer}>
          <Logo ClassNameAtt="footerLogo" />
          <div className={styles.socialMedia}>
            <Image src={instagram} alt="instagram" />
            <Image src={twitter} alt="twitter" />
            <Image src={facebook} alt="facebook" />
          </div>
        </div>
        <div className={styles.footerGrid}>
          {footerNav.map((item, index) => (
            <Link
              smooth={true}
              duration={1000}
              to={item.to}
              className={styles.logoLink}
              key={index}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>Copyright © 2022 Fitbit. All rights reserved.</p>
        <div className={styles.footerBotLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Sitemap</a>
        </div>

        <Select
          value={language}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="usa">
            <Image src={USA} alt="USA" />
            <em> United States</em>
          </MenuItem>
        </Select>
      </div>
    </div>
  );
};

export default Footer;
