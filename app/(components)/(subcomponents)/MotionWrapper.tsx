"use client";
import { motion, TargetAndTransition } from "framer-motion";
import React from "react";

interface MotionWrapperProps {
  children: React.ReactNode;
  initial?: TargetAndTransition;
  animate?: TargetAndTransition;
  transition?: TargetAndTransition;
  whileHover?: TargetAndTransition;
  className?: string;
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({ children, ...props }) => {
  return <motion.div {...props}>{children}</motion.div>;
};

export default MotionWrapper;
