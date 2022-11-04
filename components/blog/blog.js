import Image from "next/image";
import React from "react";
import Title from "../title/title";
import styles from "./blog.module.css";
import Button from "../button/button";
import train2 from "../../public/static/images/train2.png";
import train from "../../public/static/images/train.png";
import salad from "../../public/static/images/salad.png";

const BlogSample = ({ img, leftSample, label }) => {
  return (
    <div
      id="Blog"
      className={leftSample ? styles.blogSampleLeft : styles.blogSampleRight}
    >
      <Image src={img} />
      <div className={styles.sampleDetail}>
        <h1>{label}</h1>
        <Button label="Read Blog" ClassNameAtt="sampleButton" />
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div className={styles.blog}>
      <Title title="Our Blogs" />
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <BlogSample img={salad} label="How to stay healthy?" leftSample />
        </div>
        <div className={styles.containerRight}>
          <BlogSample img={train} label="Workout for Beginners" />
          <BlogSample img={train2} label="Is Cardio Important?" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
