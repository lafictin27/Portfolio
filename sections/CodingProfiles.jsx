"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { CodingProf, TypingText } from "../components";

const CodingProfiles = () => {
  const profiles = [
    {
      imgUrl: "/lc_prof.png",
      title: "LeetCode : Solved over 400+ questions",
      subtitle: [
        "Ranks Under top 20% globally",
        "Consistent with problem solving since last 6 months, covered DSA and Courseworks",
      ],
      Links: [
        {
          url: "https://leetcode.com/lafictin27/",
          val: "Lafictin27",
          img: "/leetcode.png",
        },
      ],
    },
    {
      imgUrl: "/cf_prof.png",
      title: "Codeforces : Highest rating 1255",
      subtitle: [
        "Participating in Competitive Programming Contests",
        "Scored rank under Top 1000, against 25000+ students ",
      ],
      Links: [
        {
          url: "https://codeforces.com/profile/lafictin27?csrf_token=47c86c39e3f4efd716394481e3479a19",
          val: "Lafictin27",
          img: "/codeforces.png",
        },
      ],
    },
    {
      imgUrl: "/cc_prof.png",
      title: "CodeChef : Highest Rating 1517",
      subtitle: [
        "Solely Practicing CP questions",
        "Marked 3 digit Global rank for more than 3 times, and still consisten",
      ],
      Links: [
        {
          url: "https://www.codechef.com/users/lafictin_07",
          val: "Lafictin_07",
          img: "/codechef.png",
        },
      ],
    },
  ];
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Coding Profiles" textStyles="text-center" />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {profiles.map((item, index) => (
            <CodingProf key={`insight-${index}`} {...item} index={index + 1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CodingProfiles;
