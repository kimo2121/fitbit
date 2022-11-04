import React, { useEffect, useRef } from "react";
import Button from "../button/button";
import styles from "./banner.module.css";
import play from "../../public/static/icons/Play.png";
import Image from "next/image";
import ReactPlayer from "react-player";

const Banner = () => {
  const videoRef = useRef();
  // useEffect(() => {
  //   window.onload = () => {
  //     document.getElementById("autoplay").play();
  //   };
  // }, []);
  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div className={styles.banner}>
      <video
        ref={videoRef}
        id="autoplay"
        playsInline
        muted
        className={styles.video}
        loop
        autoPlay
      >
        <source src={require("../../public/video.mp4")} type="video/mp4" />
      </video>
      <h1 className={styles.Title}>Dare to be great.</h1>
      <div className={styles.btns}>
        <Button ClassNameAtt="bannerBtn1st" label="Get Started" />
        <Button
          ClassNameAtt="bannerBtn2nd"
          bannerBtn={true}
          icon={<Image src={play} alt="play" />}
          label="Watch Demo"
        />
      </div>
    </div>
  );
};

export default Banner;
