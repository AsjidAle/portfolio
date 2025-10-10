import React from "react";
import { FaAws } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";
import { FaSearchengin, FaGears } from "react-icons/fa6";
import { SiGooglesearchconsole } from "react-icons/si";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { IoIosRocket } from "react-icons/io";
import Link from "next/link";
import { PiNumberSixBold } from "react-icons/pi";
import Image from "next/image";
import AnimatedText from "./(subcomponents)/AnimatedText";
import { MdOutlineBuildCircle, MdCloudSync } from "react-icons/md";
import MotionWrapper from "./(subcomponents)/MotionWrapper";

const Herosection: React.FC = () => {
  const techStack = [
    { icon: MdOutlineBuildCircle, name: "Code from Scratch" },
    { icon: SiGooglesearchconsole, name: "Website Maintinance" },
    { icon: FaSearchengin, name: "SEO Optimization" },
    { icon: GrOptimize, name: "Website Upgrade" },
    { icon: MdCloudSync, name: "Cloud Automation" },
    { icon: FaGears, name: "CI/CD Setup" },
    { icon: FaAws, name: "AWS Expert" },
    { icon: BsFillFileEarmarkCodeFill, name: "Code Base Optimization" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Flex */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Section */}
          <MotionWrapper
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                <AnimatedText />
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                Passionate developer specializing in building exceptional
                digital experiences. Proficient in modern web technologies and
                cloud architecture with a focus on scalable and maintainable
                solutions.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/resume" target="_blank">
                <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Resume
                </button>
              </Link>
              <Link href="/contact">
                <button className="w-full sm:w-auto px-6 py-3 bg-transparent border-2 border-blue-600 hover:bg-blue-600/20 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Contact Me
                </button>
              </Link>
            </div>
          </MotionWrapper>

          {/* Right Section */}
          <MotionWrapper
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8 flex flex-col items-center"
          >
            {/* Profile Image */}
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto">
              <Image
                src="/profile2.png"
                alt="Professional headshot"
                fill
                className="rounded-full object-cover shadow-2xl"
                priority
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xs sm:max-w-none mx-auto">
              <MotionWrapper
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center justify-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
              >
                <span className="flex items-center text-white gap-1">
                  <PiNumberSixBold className="text-4xl" />
                  <span className="text-sm">Years+</span>
                </span>
                <span className="mt-2 text-sm">Experience</span>
              </MotionWrapper>

              <MotionWrapper
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center justify-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
              >
                <TbTargetArrow size={35} className="text-red-600 mb-2" />
                <span className="mt-1 text-sm">180+ Projects</span>
              </MotionWrapper>

              <MotionWrapper
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center justify-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
              >
                <IoIosRocket className="text-3xl text-red-500 mb-2 bg-white p-1 rounded-full" />
                <span className="mt-1 text-sm">13+ SaaS</span>
              </MotionWrapper>
            </div>
          </MotionWrapper>
        </div>
      </div>

      {/* Tech Stack */}
      <MotionWrapper
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mt-12"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 w-full max-w-5xl">
          {techStack.map((tech) => (
            <MotionWrapper
              key={tech.name}
              whileHover={{ scale: 1.2 }}
              className="flex flex-col items-center justify-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 text-center"
            >
              <tech.icon className="text-2xl sm:text-3xl text-blue-500" />
              <span className="mt-2 text-xs sm:text-sm">{tech.name}</span>
            </MotionWrapper>
          ))}
        </div>
      </MotionWrapper>
    </div>
  );
};

export default Herosection;
