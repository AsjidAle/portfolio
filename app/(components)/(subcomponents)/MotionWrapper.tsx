"use client";
import { motion } from "framer-motion";
import React from "react";

interface MotionWrapperProps {
  children: React.ReactNode;
  initial?: object;
  animate?: object;
  transition?: object;
  whileHover?: object;
  className?: string;
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({ children, ...props }) => {
  return <motion.div {...props}>{children}</motion.div>;
};

export default MotionWrapper;
