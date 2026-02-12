import { ReactNode } from "react";
import { motion } from "motion/react";

interface MarqueeProps {
  children: ReactNode;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export function Marquee({
  children,
  direction = "left",
  speed = 20,
  className = "",
}: MarqueeProps) {
  return (
    <div className={`flex overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="flex gap-4 md:gap-8"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}
