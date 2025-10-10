"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

export default function TrainingSection() {
  return (
    <section
      id="education"
      className="relative py-20 px-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 text-black scroll-mt-20"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          🎓 Training & Certifications
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          A journey of continuous learning and cloud mastery.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left - Animated Details */}
        <motion.div
          className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.ul
            className="space-y-5 text-lg leading-relaxed text-gray-800"
            variants={containerVariants}
          >
            {[
              {
                icon: "🎓",
                text: (
                  <>
                    <strong>Bachelor in Computer Science</strong> | GPA:{" "}
                    <code className="bg-gray-800 text-blue-400 px-2 py-0.5 rounded">
                      3.48 / 4.00
                    </code>
                  </>
                ),
              },
              {
                icon: "⚡",
                text: (
                  <>
                    <strong>Expertise</strong> in Data Structures & Algorithms
                  </>
                ),
              },
              {
                icon: "🧠",
                text: (
                  <>
                    <strong>Specialization</strong> in Query Optimization (NLP
                    in DDBMS)
                  </>
                ),
              },
              {
                icon: "☁️",
                text: (
                  <>
                    <strong>AWS Certified Solutions Architect</strong> –
                    Professional (SAP-C02)
                  </>
                ),
              },
              {
                icon: "🌐",
                text: (
                  <>
                    <strong>Cloud Computing</strong> & Serverless Architecture
                  </>
                ),
              },
              {
                icon: "🏗️",
                text: (
                  <>
                    <strong>Advanced Software Design Patterns</strong>{" "}
                    Certification
                  </>
                ),
              },
              {
                icon: "⚙️",
                text: (
                  <>
                    <strong>Infrastructure as a Service</strong> (IaaS) &
                    Automation (AWS, Terraform)
                  </>
                ),
              },
              {
                icon: "🌍",
                text: (
                  <>
                    <strong>Advanced English</strong> Proficiency
                  </>
                ),
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                variants={itemVariants}
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right - Profile Picture with Glow */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            <Image
              src="/profile2.png"
              alt="Profile Picture"
              width={400}
              height={400}
              className="rounded-full object-cover border-4 border-white shadow-2xl transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur opacity-20 group-hover:opacity-30 transition duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
