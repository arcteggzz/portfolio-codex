import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Crown, Clock } from "lucide-react";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"count" | "info" | "reveal">("count");
  const [time, setTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
    setTime(formattedTime);

    const duration = 1500;
    const interval = 15;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setPhase("info");
            setTimeout(() => {
              setPhase("reveal");
              setTimeout(() => {
                onComplete();
              }, 1600);
            }, 3000);
          }, 400);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-transparent pointer-events-none text-white dark:text-black font-sans selection:bg-white selection:text-black dark:selection:bg-black dark:selection:text-white">
      {/* Left Curtain Panel */}
      <motion.div
        initial={{ x: 0 }}
        animate={phase === "reveal" ? { x: "-100%" } : { x: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 w-1/2 h-full bg-[#050505] dark:bg-[#f5f5f5] z-20 border-r border-neutral-900 dark:border-neutral-200"
      >
        <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay dark:mix-blend-multiply"></div>
      </motion.div>

      {/* Right Curtain Panel */}
      <motion.div
        initial={{ x: 0 }}
        animate={phase === "reveal" ? { x: "100%" } : { x: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 right-0 w-1/2 h-full bg-[#050505] dark:bg-[#f5f5f5] z-20 border-l border-neutral-900 dark:border-neutral-200"
      >
        <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay dark:mix-blend-multiply"></div>
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-30 w-full h-full flex flex-col justify-between p-8 md:p-12 mix-blend-difference text-white">
        {/* TOP BAR */}
        <AnimatePresence>
          {phase !== "reveal" && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="w-full flex justify-between items-start uppercase tracking-widest text-xs md:text-sm font-medium text-neutral-400"
            >
              <div className="flex items-center gap-2">
                <Clock size={14} />
                <span>LOCAL TIME: {time}</span>
              </div>
              <div className="text-right">
                <span>PORTFOLIO © {new Date().getFullYear()}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CENTER STAGE */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <AnimatePresence mode="wait">
            {/* Phase 1: The Count */}
            {phase === "count" && (
              <motion.div
                key="count"
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <span className="text-[12rem] md:text-[18rem] font-black tracking-tighter leading-none">
                  {Math.round(count)}
                </span>
                <div className="w-full h-1 bg-neutral-800 dark:bg-neutral-300 mt-4 overflow-hidden">
                  <motion.div
                    className="h-full bg-white"
                    style={{ width: `${count}%` }}
                  />
                </div>
              </motion.div>
            )}

            {/* Phase 2: The Pitch (Hire Me) */}
            {phase === "info" && (
              <motion.div
                key="info"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center text-center max-w-4xl px-4"
              >
                {/* Status / Badge */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 rounded-full text-xs uppercase tracking-widest mb-8"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Available for new projects
                </motion.div>

                {/* Main Value Prop */}
                <motion.h1
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8"
                >
                  Senior
                  <br />
                  Product
                  <br />
                  Designer
                </motion.h1>

                {/* Experience Stats */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-2 gap-8 md:gap-16 border-t border-white/20 pt-8 mt-4"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-4xl md:text-5xl font-bold font-mono">
                      05+
                    </span>
                    <span className="text-xs md:text-sm text-neutral-500 uppercase tracking-widest mt-2">
                      Years Exp.
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-4xl md:text-5xl font-bold font-mono">
                      50+
                    </span>
                    <span className="text-xs md:text-sm text-neutral-500 uppercase tracking-widest mt-2">
                      Projects
                    </span>
                  </div>
                </motion.div>

                {/* The "Caricature"/Avatar Element - Representing the "Mastermind" */}
                <motion.div
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                  className="mt-12 w-20 h-20 bg-white text-black rounded-full flex items-center justify-center"
                >
                  <Crown size={40} strokeWidth={1.5} />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
