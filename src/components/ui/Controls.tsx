import { useState } from "react";
import { motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Controls() {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-40 flex flex-col gap-3"
    >
      {/* Sound Toggle */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-black/5 dark:border-white/10 flex items-center justify-center text-black dark:text-white hover:scale-110 transition-transform shadow-lg"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      {/* Theme Toggle - Wrapped to add matching style if needed, though ThemeToggle has its own styles */}
      <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-black/5 dark:border-white/10 flex items-center justify-center shadow-lg hover:scale-110 transition-transform overflow-hidden">
        <ThemeToggle />
      </div>
    </motion.div>
  );
}
