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
import { MdOutlineBuildCircle } from "react-icons/md";
import { MdCloudSync } from "react-icons/md";
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Section */}
          <MotionWrapper
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <AnimatedText />
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Passionate developer specializing in building exceptional digital experiences.
                Proficient in modern web technologies and cloud architecture with a focus on
                scalable and maintainable solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/resume" target="_blank">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Resume
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-6 py-3 bg-transparent border-2 border-blue-600 hover:bg-blue-600/20 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
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
            className="flex-1 space-y-8"
          >
            <div className="relative w-64 h-64 mx-auto">
              <Image
                src="/profile2.png"
                alt="Professional headshot"
                width={356}
                height={456}
                className="w-full h-full opacity-1 object-cover rounded-full shadow-2xl"
                priority
              />
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto opacity-2">
              <MotionWrapper
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center justify-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 w-32"
              >
                <span className="flex items-center drop-shadow-[0_0_3px_rgba(255,255,255,1)] text-nowrap text-white gap-[1px]">
                  <PiNumberSixBold className="text-4xl -mr-[2px]" />
                  <span className="relative top-[5px] -ml-[4px]">Year +</span>
                </span>

                <span className="mt-2 text-sm text-center whitespace-normal break-words">
                  Experience
                </span>
              </MotionWrapper>

              <MotionWrapper
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center justify-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 w-32"
              >
                180+
                <TbTargetArrow
                  size={35}
                  className="text-3xl text-red-700 drop-shadow-[0px_0px_3px_rgba(255,255,255,1)] mb-3"
                />

                <span className="mt-2 text-sm text-nowrap">180+ Projects</span>
              </MotionWrapper>

              <MotionWrapper
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center justify-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 w-32"
              >
                {/* <IoIosRocket className="text-3xl text-blue-500 mb-3" /> */}
                <IoIosRocket className="text-3xl text-red-500 mb-3 bg-white p-1 rounded-full" />
                <span className="mt-2 text-sm">13+ SaaS</span>
              </MotionWrapper>
            </div>
          </MotionWrapper>
        </div>
      </div>

      <MotionWrapper
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex justify-center items-center"
      >
        <div className="grid grid-cols-8 gap-5 w-full max-w-5xl mx-auto mt-10">
          {techStack.map((tech) => (
            <MotionWrapper
              key={tech.name}
              whileHover={{ scale: 1.3 }}
              className="flex flex-col items-center justify-center w-full p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
            >
              <tech.icon className="text-3xl text-blue-500" />
              <span className="mt-2 text-sm">{tech.name}</span>
            </MotionWrapper>
          ))}
        </div>
      </MotionWrapper>
    </div>
  );
};

export default Herosection;