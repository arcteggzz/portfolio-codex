import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current
          .play()
          .catch((e) => console.log("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-50 flex items-center gap-4 mix-blend-difference">
      <audio
        ref={audioRef}
        loop
        src="https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3"
      />

      <button
        onClick={toggleAudio}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 text-white cursor-pointer"
        aria-label={isPlaying ? "Mute" : "Play Music"}
      >
        {isPlaying ? (
          <div className="flex gap-1 items-center justify-center h-4">
            {[1, 2, 3, 4].map((bar) => (
              <motion.div
                key={bar}
                className="w-1 bg-current"
                animate={{ height: [4, 16, 8, 14, 4] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  delay: bar * 0.1,
                  repeatType: "mirror",
                }}
              />
            ))}
          </div>
        ) : (
          <VolumeX size={20} />
        )}
      </button>

      <span className="hidden md:block text-[10px] uppercase tracking-widest text-white/50 font-mono">
        {isPlaying ? "Sound On" : "Sound Off"}
      </span>
    </div>
  );
}
