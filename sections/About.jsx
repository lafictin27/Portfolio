"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const About = () => (
  <section id="about" className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[20px] text-[16px] text-center text-secondary-white"
      >
        Hey there, I am{" "}
        <span className="font-extrabold text-white">Vansh Gupta,</span>
        and I'm on the verge of completing my final year in Bachelors in <span className="font-extrabold text-white">Information 
        Technology</span> at the renowned <span className="font-extrabold text-white">IIIT Allahabad</span>.{" "}
        Enraptured by OS, DBMS, OOPS, and DSA throughout my academic journey. 
        They fuel my passion for software development.
        <br />
        <br />
        But hey, that's not all! I've dived headfirst into the world of programming 
        languages and frameworks, embracing the power of C++, Java, Python, React, Next.js, 
        Node.js, and Express.js. Armed with this arsenal, I've crafted captivating
        <span className="font-extrabold text-white">
        {" "}Full Stack web applications{" "}
        </span>{" "}that weave magic on the digital canvas.
        And working with database like MongoDB.
        <br />
        <br />
        What truly makes my heart race is Machine Learning, I believe it will revolutionize 
        the world of technology, sparking astonishing advancements and transformative 
        breakthroughs. I like exploring things in this field.
        <br />
        <br />
        Thriving in challenging environments, I approach projects with
        dedication and enthusiasm. Eager to contribute to innovative software
        development, I bring dedication, motivation, and exceptional results.
        <br />
        To <span className="font-extrabold text-white">explore</span> my projects, scroll down.
      </motion.p>

      <AnchorLink href="#projects">
        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[38px] h-[38px] object-contain mt-[28px] cursor-pointer hover:scale-120 border rounded-full p-2 animate-bounce transition duration-200"
        />
      </AnchorLink>
    </motion.div>
  </section>
);

export default About;
