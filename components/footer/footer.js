import React, { useState } from "react";
import { Logo } from "../navbar/navbar";
import styles from "./footer.module.css";
import facebook from "../../public/static/icons/facebook.png";
import twitter from "../../public/static/icons/twitter.png";
import instagram from "../../public/static/icons/instagram.png";
import USA from "../../public/static/icons/USA.png";
import Image from "next/image";
import { Link } from "react-scroll";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const footerNav = [
  "Browse Classes",
  "Shop Now",
  "Our Studios",
  "Services",
  "Pricing",
  "Our Blogs",
  "About Us",
  "Contact Us",
];
const Footer = () => {
  const [language, setLanguage] = useState("usa");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className={styles.footer}>
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
              to={item}
              className={styles.logoLink}
              key={index}
            >
              {item}
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
          classes={styles.footerSelect}
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
