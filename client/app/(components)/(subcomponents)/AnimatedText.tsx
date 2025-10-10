"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const AnimatedText: React.FC = () => {
  return (
    <TypeAnimation
      sequence={[
        "Full Stack Developer", 2000,
        "DevOps Engineer", 2000,
        "AWS Expert", 2000,
        "Software Engineer", 2000,
      ]}
      repeat={Infinity}
    />
  );
};

export default AnimatedText;
