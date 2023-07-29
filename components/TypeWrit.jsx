import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => (
  <Typewriter
    options={{
      strings: [
        "Engineer",
        "Software Developer",
        "Freelancer",
        "MERN Stack Developer",
        "Problem Solver",
        "Full Stack Developer",
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 30,
    }}
  />
);

export default Type;
