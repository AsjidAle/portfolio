"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')] bg-center" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto text-center px-6"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Do you want to{" "}
          <span className="bg-white/20 px-3 py-1 rounded-lg backdrop-blur-sm">
            hire me
          </span>{" "}
          or do you have any questions?
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-10">
          Get in touch with me through the contact form or any of the other
          available ways.
        </p>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link href="/contact">
            <button className="inline-flex items-center gap-3 px-10 py-4 text-lg font-semibold rounded-full bg-white text-blue-600 shadow-lg hover:bg-blue-50 transition">
              <Send className="w-5 h-5" />
              Contact Me
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Animated glowing circles */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse" />
    </section>
  );
};

export default Contact;
