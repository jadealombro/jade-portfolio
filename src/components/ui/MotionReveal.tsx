"use client";

import { motion, useInView } from "framer-motion";
import { useRef, CSSProperties } from "react";

interface MotionRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "none";
  style?: CSSProperties;
  className?: string;
  once?: boolean;
}

export default function MotionReveal({
  children,
  delay = 0,
  direction = "up",
  style,
  className,
  once = true,
}: MotionRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  const initial = {
    opacity: 0,
    y: direction === "up" ? 32 : 0,
    x: direction === "left" ? -24 : 0,
  };

  const animate = inView
    ? { opacity: 1, y: 0, x: 0 }
    : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Staggered children — wraps a list with automatic stagger */
interface StaggerRevealProps {
  children: React.ReactNode[];
  stagger?: number;
  delay?: number;
  style?: CSSProperties;
  className?: string;
}

export function StaggerReveal({
  children,
  stagger = 0.1,
  delay = 0,
  style,
  className,
}: StaggerRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} style={style} className={className}>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{
            duration: 0.65,
            delay: delay + i * stagger,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
