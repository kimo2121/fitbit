import styles from "./button.module.css";
import clsx from "classnames";

const Button = ({
  label,
  onClick,
  icon,
  ClassNameAtt,
  children,
  bannerBtn,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(styles[ClassNameAtt], styles.basicStyle)}
    >
      {bannerBtn ? icon : undefined}
      {children}
      {label}
    </button>
  );
};

export default Button;
