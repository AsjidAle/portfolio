"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(images[currentIndex + 1]);
    }
  };

  const prevImage = () => {
    if (currentIndex !== null && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(images[currentIndex - 1]);
    }
  };

  return (
    <>
      {/* Projects Section */}
      <section
        className="bg-white text-black py-16 px-6 scroll-mt-20"
        id="projects"
      >
        <motion.h2
          className="text-center text-3xl font-bold mb-10"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          Some Works Carried Out
        </motion.h2>

        <div className="mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((src, index) => (
              <motion.div
                key={index}
                className="cursor-pointer group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={index * 0.1}
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={src}
                  alt={`Project ${index + 1}`}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <span className="text-white font-semibold">View Project</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 p-4">
            <button
              className="absolute top-6 right-6 text-white text-4xl"
              onClick={closeModal}
            >
              ×
            </button>
            <button
              className="absolute left-4 text-white text-3xl"
              onClick={prevImage}
            >
              &lt;
            </button>
            <Image
              src={selectedImage}
              alt="Selected"
              width={900}
              height={600}
              className="rounded-lg shadow-xl max-h-[80vh] object-contain"
            />
            <button
              className="absolute right-4 text-white text-3xl"
              onClick={nextImage}
            >
              &gt;
            </button>
          </div>
        )}
      </section>

      {/* Experience Section */}
      <section
        className="bg-gradient-to-b from-black via-gray-900 to-black text-gray-200 py-16 px-6 scroll-mt-20"
        id="experience"
      >
        <motion.h2
          className="text-center text-3xl font-bold mb-6"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          Experience and Services
        </motion.h2>
        <motion.p
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          custom={0.2}
          viewport={{ once: true }}
        >
          I have been part of the{" "}
          <span className="text-blue-400">Stack System Technologies</span> team
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-2xl mx-auto">
          {/* Web Dev Card */}
          <motion.div
            className="bg-gray-900/70 rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            custom={0.3}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              Web Development
            </h3>
            <div className="grid grid-cols-2 gap-y-4 text-lg">
              <div className="flex items-center gap-2">
                <SiJavascript className="text-yellow-400" /> JavaScript
              </div>
              <div className="flex items-center gap-2">
                <SiTypescript className="text-blue-500" /> TypeScript
              </div>
              <div className="flex items-center gap-2">
                <FaReact className="text-cyan-400" /> React
              </div>
              <div className="flex items-center gap-2">
                <FaNode className="text-green-500" /> Node.js
              </div>
              <div className="flex items-center gap-2">
                <SiMongodb className="text-green-400" /> MongoDB
              </div>
              <div className="flex items-center gap-2">
                <FaDatabase className="text-orange-500" /> MySQL
              </div>
              <div className="flex items-center gap-2">
                <FaDocker className="text-blue-400" /> Docker
              </div>
              <div className="flex items-center gap-2">
                <SiKubernetes className="text-blue-600" /> Kubernetes
              </div>
              <div className="flex items-center gap-2">
                <SiJenkins className="text-red-400" /> Jenkins
              </div>
              <div className="flex items-center gap-2">
                <SiSonarqube className="text-blue-300" /> SonarQube
              </div>
              <div className="flex items-center gap-2">
                <SiTerraform className="text-purple-400" /> Terraform
              </div>
              <div className="flex items-center gap-2">
                <TbSeo className="text-pink-400" /> SEO
              </div>
              <div className="flex items-center gap-2">
                <IoRocketSharp className="text-white" /> Optimization
              </div>
              <div className="flex items-center gap-2">
                <FaLaravel className="text-red-600" /> Laravel
              </div>
              <div className="flex items-center gap-2">
                <SiExpress className="text-gray-400" /> Express
              </div>
              <div className="flex items-center gap-2">
                <FaGitAlt className="text-orange-600" /> Git
              </div>
              <div className="flex items-center gap-2">
                <DiRedis className="text-red-600" /> Redis
              </div>
              <div className="flex items-center gap-2">
                <SiApachekafka className="text-yellow-400" /> Kafka
              </div>
              <div className="flex items-center gap-2">
                <FaBootstrap className="text-purple-500" /> Bootstrap
              </div>
              <div className="flex items-center gap-2">
                <SiTailwindcss className="text-blue-400" /> Tailwind
              </div>
              <div className="flex items-center gap-2">
                <RiNextjsFill className="text-white" /> Next.js
              </div>
            </div>
          </motion.div>

          {/* Audit Card */}
          <motion.div
            className="bg-gray-900/70 rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            custom={0.4}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Audit</h3>
            <ul className="list-disc pl-5 space-y-3 text-lg">
              <li>
                <strong>Usability:</strong> Intuitive navigation for seamless
                UX.
              </li>
              <li>
                <strong>Accessibility:</strong> Compliance with WCAG for
                inclusivity.
              </li>
              <li>
                <strong>Performance:</strong> Speed, load-time, and SEO
                optimization.
              </li>
              <li>
                <strong>Load Balancing:</strong> Efficient server traffic
                distribution.
              </li>
              <li>
                <strong>Resource Optimization:</strong> Image, script, and
                caching strategies for efficiency.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
