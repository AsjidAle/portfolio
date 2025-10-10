"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaLaravel,
  FaNode,
  FaDocker,
  FaGitAlt,
  FaBootstrap,
  FaDatabase,
} from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { TbSeo } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { DiRedis } from "react-icons/di";
import {
  SiExpress,
  SiMongodb,
  SiKubernetes,
  SiJenkins,
  SiSonarqube,
  SiTerraform,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiApachekafka,
} from "react-icons/si";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 60,
    },
  },
};

const Projects: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const images = [...Array(12)].map((_, index) => `/a${index + 1}.png`);

  const handleImageClick = (index: number) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const nextImage = () => {
    if (currentIndex !== null && currentIndex < images.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setSelectedImage(images[nextIndex]);
    }
  };

  const prevImage = () => {
    if (currentIndex !== null && currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      setSelectedImage(images[prevIndex]);
    }
  };

  return (
    <>
      {/* === Projects Section === */}
      <section
        id="projects"
        className="bg-white text-black py-20 px-6 scroll-mt-20"
      >
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          🚀 Some Works Carried Out
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-2xl mx-auto">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={index * 0.07}
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={src}
                alt={`Project ${index + 1}`}
                width={400}
                height={250}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  View Project
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                className="absolute top-6 right-6 text-white text-4xl"
                onClick={closeModal}
              >
                ×
              </button>
              <button
                className="absolute left-4 text-white text-4xl"
                onClick={prevImage}
              >
                ‹
              </button>
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={selectedImage}
                  alt="Selected"
                  width={900}
                  height={600}
                  className="rounded-xl shadow-2xl max-h-[80vh] object-contain"
                />
              </motion.div>
              <button
                className="absolute right-4 text-white text-4xl"
                onClick={nextImage}
              >
                ›
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* === Experience Section === */}
      <section
        id="experience"
        className="bg-gradient-to-b from-black via-gray-900 to-black text-gray-200 py-20 px-6 scroll-mt-20"
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-6 text-white"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          🎯 Experience and Services
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-12"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          custom={0.2}
          viewport={{ once: true }}
        >
          Contributed to major projects with{" "}
          <span className="text-blue-400">Stack System Technologies</span>
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-2xl mx-auto">
          {/* Web Dev Card */}
          <motion.div
            className="bg-gray-900/80 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            custom={0.3}
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              Web Development
            </h3>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-y-4 text-lg"
            >
              {[
                [<SiJavascript className="text-yellow-400" />, "JavaScript"],
                [<SiTypescript className="text-blue-500" />, "TypeScript"],
                [<FaReact className="text-cyan-400" />, "React"],
                [<FaNode className="text-green-500" />, "Node.js"],
                [<SiMongodb className="text-green-400" />, "MongoDB"],
                [<FaDatabase className="text-orange-500" />, "MySQL"],
                [<FaDocker className="text-blue-400" />, "Docker"],
                [<SiKubernetes className="text-blue-600" />, "Kubernetes"],
                [<SiJenkins className="text-red-400" />, "Jenkins"],
                [<SiSonarqube className="text-blue-300" />, "SonarQube"],
                [<SiTerraform className="text-purple-400" />, "Terraform"],
                [<TbSeo className="text-pink-400" />, "SEO"],
                [<IoRocketSharp className="text-white" />, "Optimization"],
                [<FaLaravel className="text-red-600" />, "Laravel"],
                [<SiExpress className="text-gray-400" />, "Express"],
                [<FaGitAlt className="text-orange-600" />, "Git"],
                [<DiRedis className="text-red-600" />, "Redis"],
                [<SiApachekafka className="text-yellow-400" />, "Kafka"],
                [<FaBootstrap className="text-purple-500" />, "Bootstrap"],
                [<SiTailwindcss className="text-blue-400" />, "Tailwind"],
                [<RiNextjsFill className="text-white" />, "Next.js"],
              ].map(([icon, label], i) => (
                <motion.div
                  variants={itemVariants}
                  key={i}
                  className="flex items-center gap-2"
                >
                  {icon} {label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Audit Card */}
          <motion.div
            className="bg-gray-900/80 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            custom={0.4}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              Audit Services
            </h3>
            <ul className="list-disc pl-5 space-y-3 text-lg text-gray-300">
              <li>
                <strong>Usability:</strong> Seamless navigation & UI.
              </li>
              <li>
                <strong>Accessibility:</strong> WCAG-compliant designs.
              </li>
              <li>
                <strong>Performance:</strong> Fast load & SEO optimized.
              </li>
              <li>
                <strong>Load Balancing:</strong> Efficient request handling.
              </li>
              <li>
                <strong>Resource Optimization:</strong> Images, caching &
                scripts.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
