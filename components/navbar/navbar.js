import React, { useState } from "react";
import Button from "../button/button";
import styles from "./navbar.module.css";
import Image from "next/image";
// import Link from "next/link";
import clsx from "classnames";

import { Link } from "react-scroll";
import MobileDrawer from "../drawer/drawer";

const links = [
  "Browse Classes",
  "Shop",
  "Pricing",
  "Blog",
  "About Us",
  "Contact Us",
];
export const Logo = ({ ClassNameAtt }) => {
  return (
    <div className={clsx(styles[ClassNameAtt], styles.logo)}>
      <p>Fitbit</p>
      <small>.</small>
    </div>
  );
};
const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className={styles.navbar}>
      <div className={styles.innerNavbar}>
        <Logo ClassNameAtt="logo" />
        <div className={styles.navLinks}>
          {links.map((item, index) => (
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
        <div className={styles.mobStyles}>
          <Button
            bannerBtn={false}
            onClick={() => setIsLogged(!isLogged)}
            ClassNameAtt="login"
            label={isLogged ? "Log out" : "Login"}
          />
          <div className={styles.mobilNav}>
            <MobileDrawer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
