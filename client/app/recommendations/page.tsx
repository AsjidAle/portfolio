"use client"
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const recommendations = [
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    message:
      "An exceptional developer with deep expertise in React, Next.js, and backend technologies. Highly recommended!",
  },
  {
    name: "Jane Smith",
    position: "CTO, InnovateX",
    message:
      "Brilliant problem solver and dedicated professional. The best experience working with him!",
  },
  {
    name: "Michael Johnson",
    position: "Founder, DevSolutions",
    message:
      "A true expert in full-stack development. Delivered outstanding solutions for our platform!",
  },
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    message:
      "An exceptional developer with deep expertise in React, Next.js, and backend technologies. Highly recommended!",
  },
  {
    name: "Jane Smith",
    position: "CTO, InnovateX",
    message:
      "Brilliant problem solver and dedicated professional. The best experience working with him!",
  },
  {
    name: "Michael Johnson",
    position: "Founder, DevSolutions",
    message:
      "A true expert in full-stack development. Delivered outstanding solutions for our platform!",
  },
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    message:
      "An exceptional developer with deep expertise in React, Next.js, and backend technologies. Highly recommended!",
  },
  {
    name: "Jane Smith",
    position: "CTO, InnovateX",
    message:
      "Brilliant problem solver and dedicated professional. The best experience working with him!",
  },
  {
    name: "Michael Johnson",
    position: "Founder, DevSolutions",
    message:
      "A true expert in full-stack development. Delivered outstanding solutions for our platform!",
  },
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    message:
      "An exceptional developer with deep expertise in React, Next.js, and backend technologies. Highly recommended!",
  },
  {
    name: "Jane Smith",
    position: "CTO, InnovateX",
    message:
      "Brilliant problem solver and dedicated professional. The best experience working with him!",
  },
  {
    name: "Michael Johnson",
    position: "Founder, DevSolutions",
    message:
      "A true expert in full-stack development. Delivered outstanding solutions for our platform!",
  },
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    message:
      "An exceptional developer with deep expertise in React, Next.js, and backend technologies. Highly recommended!",
  },
  {
    name: "Jane Smith",
    position: "CTO, InnovateX",
    message:
      "Brilliant problem solver and dedicated professional. The best experience working with him!",
  },
  {
    name: "Michael Johnson",
    position: "Founder, DevSolutions",
    message:
      "A true expert in full-stack development. Delivered outstanding solutions for our platform!",
  },
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    message:
      "An exceptional developer with deep expertise in React, Next.js, and backend technologies. Highly recommended!",
  },
  {
    name: "Jane Smith",
    position: "CTO, InnovateX",
    message:
      "Brilliant problem solver and dedicated professional. The best experience working with him!",
  },
  {
    name: "Michael Johnson",
    position: "Founder, DevSolutions",
    message:
      "A true expert in full-stack development. Delivered outstanding solutions for our platform!",
  },
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    message:
      "An exceptional developer with deep expertise in React, Next.js, and backend technologies. Highly recommended!",
  },
  {
    name: "Jane Smith",
    position: "CTO, InnovateX",
    message:
      "Brilliant problem solver and dedicated professional. The best experience working with him!",
  },
  {
    name: "Michael Johnson",
    position: "Founder, DevSolutions",
    message:
      "A true expert in full-stack development. Delivered outstanding solutions for our platform!",
  },
];

export default function RecommendationsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Professional Recommendations
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {recommendations.map((rec, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transition-transform">
              <FaQuoteLeft className="text-yellow-400 text-3xl mb-3" />
              <p className="text-lg italic">{rec.message}</p>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{rec.name}</h3>
                <p className="text-sm text-gray-400">{rec.position}</p>
                <div className="flex mt-2 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-lg" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
