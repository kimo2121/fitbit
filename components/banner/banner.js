import React, { useEffect, useRef } from "react";
import Button from "../button/button";
import MuxPlayer from "@mux/mux-player-react";
import styles from "./banner.module.css";
import play from "../../public/static/icons/Play.png";
import Image from "next/image";
import useSwr from "swr";

const fetcher = (url) => {
  return fetch(url).then((res) => res.json());
};

const Banner = () => {
  const { data, error } = useSwr(() => "/api/postVideo", fetcher, {
    refreshInterval: 5000,
  });
  const asset = data && data.asset;
  console.log(asset?.playback_id, "asset");

  // useEffect(() => {
  //   window.onload = () => {
  //     document.getElementById("autoplay").play();
  //     document.querySelector("#autoplay").play();
  //   };
  // }, []);

  // useEffect(() => {
  //   // attemptPlay();
  //   // window.onload = () => {
  //   const playVideo = () => {
  //     videoRef.current.play();
  //   };
  //   playVideo();
  //   // };
  //   // video
  //   //   .play()
  //   //   .then(function () {})
  //   //   .catch(function (error) {});
  // });

  return (
    <div className={styles.banner}>
      <MuxPlayer
        autoplay="muted"
        loop
        stream-type="on-demand"
        className={styles.video}
        playbackId={asset?.playback_id}
      />
      {/* <video
        // ref={videoRef}
        // id="autoplay"
        playsInline
        muted
        className={styles.video}
        loop
        autoPlay
      >
        <source
          src="https://storage.googleapis.com/video-storage-gcp-us-east4-vop1-uploads/VPheIEvo1nG245ExFFwbgMDtFBG5pJOjX02do4DdI8QA?Expires=1668092226&GoogleAccessId=uploads-gcp-us-east1-vop1%40mux-video-production.iam.gserviceaccount.com&Signature=u6lWof58HQXkKMUopMyo1wXfQ9Z1SjV3I4%2FPz67xHZ5QBpgdldSF1dkEpPlse5XQc8KSQDvDlOyqjkCbeEvC5q%2BxWQlHGd20m36QN5qYlgTI3Lcrp3ZKlIoWdGr7F%2BClMySCznDzPoQsodoxOCVphMSZP5C7xlcu8uPuNrk5PN39iqDHdvJzHL%2BQQ3Ov872KxnPg69XeqkdHJtl2jyeyzwo5xmTBddUMmuOhUELBwiFvEcj4Uc%2FVEZuz7dCsD1h2Eb0s%2FtkMcpMTg30DWGUrSsdwbNHCL%2Bs8KEmE%2B3VmJXzIAdWY5ApHeOEJ8I7%2FQX4d%2BrA3e%2FMFfFqW1Crj2dXvKA%3D%3D&upload_id=ADPycdvGVMnhgeZsL6hb8bfhVMhAUtZ0Vh94N0t5OBDaoJNxrrF--SeaboEEToCz-CcJCgomHCrpN2N6jQAaC1ClMyRATw"
          type="video/mp4"
        />
      </video> */}
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
