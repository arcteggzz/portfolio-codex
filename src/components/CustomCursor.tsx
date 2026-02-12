import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");

  // Mouse position setup
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring animation for the cursor
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check for clickable elements
      const isClickable = target.closest('a, button, [data-cursor="hover"]');
      const isProject = target.closest('[data-cursor="project"]');

      if (isProject) {
        setIsHovered(true);
        setCursorText("VIEW");
      } else if (isClickable) {
        setIsHovered(true);
        setCursorText("");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    // Hide default cursor
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "auto";
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-9999 mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        animate={{
          scale: isHovered ? 4 : 1,
          backgroundColor: "#ffffff",
        }}
        transition={{ duration: 0.2 }}
        className="relative flex items-center justify-center rounded-full bg-white"
        style={{
          width: 16,
          height: 16,
        }}
      >
        {/* Optional Icon/Text inside the expanded cursor */}
        {cursorText === "VIEW" && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 0.25 }} // Scale down because parent is scaled up x4
            className="text-black font-bold text-[10px] flex items-center justify-center"
          >
            <ArrowUpRight size={24} />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
