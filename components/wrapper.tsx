"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface Props {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export const SectionWrapper: React.FC<Props> = ({
  children,
  id,
  className,
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
  });

  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.section
      ref={ref}
      animate={isInView ? "visible" : "hidden"}
      className={className}
      id={id}
      initial="hidden"
      transition={{ duration: 0.5, delay: 0.125 }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
};
