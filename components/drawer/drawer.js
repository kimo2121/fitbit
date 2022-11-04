import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import styles from "./drawer.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";
const links = [
  "Browse Classes",
  "Shop",
  "Pricing",
  "Blog",
  "About Us",
  "Contact Us",
];

export default function MobileDrawer() {
  const [state, setState] = React.useState(false);

  return (
    <div>
      <React.Fragment>
        <Button onClick={() => setState(true)}>{<MenuIcon />}</Button>
        <Drawer anchor={"right"} open={state} onClose={() => setState(false)}>
          <Box sx={{ width: 250 }} role="presentation">
            <CloseIcon
              onClick={() => setState(false)}
              className={styles.closeIcon}
            />
            <div className={styles.mobNavLinks}>
              {links.map((item, index) => (
                <Link
                  onClick={() => setState(false)}
                  smooth={true}
                  duration={1000}
                  to={item}
                  className={styles.navLinks}
                  key={index}
                >
                  {item}
                </Link>
              ))}
            </div>
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
