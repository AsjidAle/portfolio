"use client";
import { motion, TargetAndTransition, Transition } from "framer-motion";
import React from "react";

interface MotionWrapperProps {
  children: React.ReactNode;
  initial?: TargetAndTransition;
  animate?: TargetAndTransition;
  transition?: Transition;
  whileHover?: TargetAndTransition;
  className?: string;
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({ children, ...props }) => {
  return <motion.div {...props}>{children}</motion.div>;
};

export default MotionWrapper;
