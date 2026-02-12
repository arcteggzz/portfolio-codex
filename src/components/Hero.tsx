import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  ArrowDownRight,
  Globe,
  Trophy,
  Gamepad2,
  Target,
  Smile,
  Cpu,
} from "lucide-react";
import { Marquee } from "./ui/Marquee";
import { carouselBrands } from "../utils/utils";

// Design System Colors: Adjusted for Dark Mode
const COLORS = {
  blue: {
    hex: "#2563eb",
    textHex: "#1d4ed8",
    tailwind: "text-blue-700 dark:text-blue-400",
    bg: "bg-blue-600",
    border: "border-blue-600",
    shadow: "shadow-blue-500/50",
  },
  yellow: {
    hex: "#ca8a04",
    textHex: "#854d0e",
    tailwind: "text-yellow-800 dark:text-yellow-400",
    bg: "bg-yellow-600",
    border: "border-yellow-600",
    shadow: "shadow-yellow-500/50",
  },
  red: {
    hex: "#dc2626",
    textHex: "#b91c1c",
    tailwind: "text-red-700 dark:text-red-400",
    bg: "bg-red-600",
    border: "border-red-600",
    shadow: "shadow-red-500/50",
  },
  green: {
    hex: "#16a34a",
    textHex: "#15803d",
    tailwind: "text-green-700 dark:text-green-400",
    bg: "bg-green-600",
    border: "border-green-600",
    shadow: "shadow-green-500/50",
  },
};

const orbitItems = [
  {
    src: "https://images.unsplash.com/photo-1754307159643-1699d0151ed1?q=80&w=400&auto=format&fit=crop",
    color: COLORS.blue,
    label: "Chess",
    alt: "Chess board strategy",
  },
  {
    src: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?q=80&w=400&auto=format&fit=crop",
    color: COLORS.green,
    label: "SaaS",
    alt: "Software interface abstract",
  },
  {
    src: "https://images.unsplash.com/photo-1721760886638-01553f3d8aa9?q=80&w=400&auto=format&fit=crop",
    color: COLORS.yellow,
    label: "Tennis",
    alt: "Tennis court action",
  },
  {
    src: "https://images.unsplash.com/photo-1764601841403-5c43713923c7?q=80&w=400&auto=format&fit=crop",
    color: COLORS.blue,
    label: "Fintech",
    alt: "Financial technology graph",
  },
  {
    src: "https://images.unsplash.com/photo-1681520350078-cc6ce7b41ae5?q=80&w=400&auto=format&fit=crop",
    color: COLORS.red,
    label: "Anime",
    alt: "Japanese anime art style",
  },
  {
    src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400&auto=format&fit=crop",
    color: COLORS.green,
    label: "Gaming",
    alt: "Video game controller",
  },
];

// --- Components ---

const TacticalGrid = () => {
  const [activeCol, setActiveCol] = useState<number | null>(null);
  const [mouseY, setMouseY] = useState(0);
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
      setMouseX(e.clientX);
      const colWidth = window.innerWidth / 12;
      const col = Math.floor(e.clientX / colWidth);
      setActiveCol(col);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 flex w-full h-full mix-blend-multiply dark:mix-blend-overlay opacity-30 dark:opacity-20">
      {/* Render 12 Columns */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className={`relative flex-1 border-r border-(--border-color) transition-colors duration-300 ${
            activeCol === i ? "bg-blue-500/5 border-blue-500/30" : ""
          }`}
        >
          <div
            className={`absolute top-0 left-0 w-full h-1 transition-all duration-300 ${
              activeCol === i ? "bg-blue-500" : "bg-transparent"
            }`}
          />

          {activeCol === i && (
            <motion.div
              className="absolute left-0 w-full border-t border-blue-500/50 flex justify-between items-center px-1"
              style={{ top: mouseY }}
              transition={{ type: "tween", ease: "linear", duration: 0 }}
            >
              <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 bg-white/80 dark:bg-black/80 px-1">
                Y:{Math.round(mouseY)}
              </span>
              <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 bg-white/80 dark:bg-black/80 px-1">
                COL_{i + 1 < 10 ? `0${i + 1}` : i + 1}
              </span>
            </motion.div>
          )}
        </div>
      ))}

      <div className="fixed bottom-24 right-6 z-50 hidden md:flex flex-col items-end gap-1 pointer-events-none">
        <div className="flex items-center gap-2 bg-white/90 dark:bg-neutral-900/90 backdrop-blur border border-neutral-200 dark:border-neutral-800 p-2 rounded shadow-lg">
          <Cpu
            size={14}
            className="text-neutral-500 dark:text-neutral-400 animate-pulse"
          />
          <span className="text-[10px] font-mono font-bold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider">
            Strategy Engine v1.2
          </span>
          <div className="w-16 h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-linear-to-r from-blue-500 to-green-500"
              animate={{ width: ["20%", "80%", "45%", "90%"] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
        <div className="text-[9px] font-mono text-neutral-400 dark:text-neutral-600 text-right">
          X:{mouseX} / Y:{mouseY}
        </div>
      </div>
    </div>
  );
};

const WobblyWord = ({
  text,
  className,
  isOutline = false,
}: {
  text: string;
  className?: string;
  isOutline?: boolean;
}) => {
  return (
    <motion.div
      className={`flex items-center justify-center cursor-default ${className}`}
      initial="initial"
      whileHover="hover"
      aria-hidden="true"
    >
      {text.split("").map((char, i) => {
        const colorKeys = Object.keys(COLORS) as Array<keyof typeof COLORS>;
        const randomColor = COLORS[colorKeys[i % colorKeys.length]];

        return (
          <motion.div
            key={i}
            className="relative"
            variants={{
              initial: {
                y: 0,
                rotate: 0,
                scale: 1,
                color: "var(--text-primary)",
              },
              hover: {
                y: [0, -8, 5, -3, 0],
                rotate: [0, 3, -3, 2, 0],
                scale: [1, 1.05, 0.95, 1.02, 1],
                color: isOutline ? "var(--text-primary)" : randomColor.textHex,
                transition: {
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: i * 0.03,
                  ease: "easeInOut",
                },
              },
            }}
          >
            {char.toUpperCase() === "O" ? (
              <div className="relative">
                <motion.span
                  className="inline-block"
                  variants={{
                    initial: { opacity: 1, scale: 1 },
                    hover: {
                      opacity: 0,
                      scale: 0,
                      transition: { duration: 0.1 },
                    },
                  }}
                >
                  {char}
                </motion.span>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  variants={{
                    initial: { opacity: 0, scale: 0, rotate: -90 },
                    hover: {
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                      transition: { duration: 0.2 },
                    },
                  }}
                >
                  <Smile
                    className={`w-[0.9em] h-[0.9em] text-yellow-600`}
                    strokeWidth={isOutline ? 1.5 : 2.5}
                    aria-label="Smile icon"
                  />
                </motion.div>
              </div>
            ) : (
              <span className="inline-block">{char}</span>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

function OrbitingSystem() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none perspective-[1000px] z-0 opacity-25"
      aria-hidden="true"
    >
      <motion.div
        animate={{
          rotateY: 360,
        }}
        transition={{
          rotateY: { duration: 60, repeat: Infinity, ease: "linear" },
        }}
        className="relative w-75 h-75 md:w-162.5 md:h-162.5 preserve-3d motion-reduce:animate-none"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 m-auto w-32 h-32 md:w-64 md:h-64 rounded-full border border-(--border-color) flex items-center justify-center bg-(--bg-secondary)/50 backdrop-blur-sm group">
          <Globe
            size={80}
            className="text-(--text-secondary) opacity-30 group-hover:text-blue-600 transition-colors duration-500"
            strokeWidth={0.5}
          />
        </div>

        {orbitItems.map((item, i) => {
          const angle = (i / orbitItems.length) * 360;
          const radius = 325;

          return (
            <motion.div
              key={i}
              className={`absolute top-1/2 left-1/2 w-24 h-32 md:w-40 md:h-56 bg-(--bg-secondary) overflow-hidden border border-(--border-color) shadow-xl backface-hidden grayscale hover:grayscale-0 transition-all duration-500 group`}
              style={{
                transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px)`,
              }}
              whileHover={{
                borderColor: item.color.hex,
                boxShadow: `0 20px 40px -10px ${item.color.hex}66`,
                scale: 1.1,
              }}
            >
              <img
                src={item.src}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                alt={item.alt}
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-(--bg-primary)/90">
                <span
                  className={`px-2 py-1 text-xs font-bold uppercase tracking-widest bg-(--text-primary) text-(--bg-primary) shadow-sm`}
                >
                  {item.label}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-(--bg-primary) text-(--text-primary) pt-32 pb-20 perspective-[1000px] transition-colors duration-500"
      aria-label="Hero Section"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <OrbitingSystem />
      </div>

      <TacticalGrid />

      <div className="z-10 flex flex-col items-center w-full max-w-350 px-6 md:px-12 pointer-events-auto text-(--text-primary)">
        <header className="flex flex-col items-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="flex gap-2" role="presentation">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span className="w-2 h-2 rounded-full bg-yellow-600"></span>
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              <span className="w-2 h-2 rounded-full bg-green-600"></span>
            </div>
            <div className="h-px w-12 bg-(--border-color)"></div>
            <span className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-(--text-secondary) font-bold">
              Senior Product Designer
            </span>
          </motion.div>

          <div className="relative flex flex-col items-center leading-[0.8] tracking-tight select-none">
            <h1 className="sr-only">Strategy in Motion</h1>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[15vw] 2xl:text-[13rem] font-black text-center uppercase mix-blend-multiply dark:mix-blend-normal text-(--text-primary)"
              aria-hidden="true"
            >
              <WobblyWord text="Strategy" />
            </motion.div>

            <div
              className="flex items-center justify-center w-full gap-4 md:gap-12 my-2 md:my-4"
              aria-hidden="true"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
                className="h-0.75 w-12 md:w-32 bg-(--text-primary) origin-left"
              />
              <motion.span
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.4, duration: 1 }}
                className="font-serif italic font-light text-[5vw] md:text-[4rem] text-(--text-secondary) z-10"
              >
                in
              </motion.span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
                className="h-0.75 w-12 md:w-32 bg-(--text-primary) origin-right"
              />
            </div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[15vw] 2xl:text-[13rem] font-black uppercase text-transparent [-webkit-text-stroke:2px_#171717] dark:[-webkit-text-stroke:2px_#ffffff] hover:text-(--text-primary) transition-colors duration-700 cursor-default"
              aria-hidden="true"
            >
              <WobblyWord text="Motion" isOutline={true} />
            </motion.div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full border-t border-(--border-color) pt-12 md:pt-16">
          <div className="col-span-1 md:col-span-4 flex flex-col gap-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-(--text-secondary)">
              Personal Attributes
            </h2>
            <ul className="space-y-4">
              <li
                className="flex items-center justify-between group p-2 -mx-2 rounded hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors focus-within:bg-red-50 dark:focus-within:bg-red-900/20"
                tabIndex={0}
              >
                <span className="flex items-center gap-3 text-lg font-medium text-(--text-primary)">
                  <Gamepad2
                    size={24}
                    className="text-(--text-secondary) group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors"
                  />
                  Strategic Gaming
                </span>
                <span className="text-xs px-2 py-1 rounded bg-(--bg-secondary) border border-(--border-color) text-(--text-secondary) font-mono font-bold group-hover:bg-red-100 dark:group-hover:bg-red-900/50 group-hover:text-red-800 dark:group-hover:text-red-300 transition-colors">
                  Top 5%
                </span>
              </li>

              <li
                className="flex items-center justify-between group p-2 -mx-2 rounded hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors focus-within:bg-blue-50 dark:focus-within:bg-blue-900/20"
                tabIndex={0}
              >
                <span className="flex items-center gap-3 text-lg font-medium text-(--text-primary)">
                  <Target
                    size={24}
                    className="text-(--text-secondary) group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors"
                  />
                  Chess Rating
                </span>
                <span className="text-xs px-2 py-1 rounded bg-(--bg-secondary) border border-(--border-color) text-(--text-secondary) font-mono font-bold group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
                  1800 ELO
                </span>
              </li>

              <li
                className="flex items-center justify-between group p-2 -mx-2 rounded hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-colors focus-within:bg-yellow-50 dark:focus-within:bg-yellow-900/20"
                tabIndex={0}
              >
                <span className="flex items-center gap-3 text-lg font-medium text-(--text-primary)">
                  <Trophy
                    size={24}
                    className="text-(--text-secondary) group-hover:text-yellow-800 dark:group-hover:text-yellow-400 transition-colors"
                  />
                  Tennis
                </span>
                <span className="text-xs px-2 py-1 rounded bg-(--bg-secondary) border border-(--border-color) text-(--text-secondary) font-mono font-bold group-hover:bg-yellow-100 dark:group-hover:bg-yellow-900/50 group-hover:text-yellow-800 dark:group-hover:text-yellow-300 transition-colors">
                  Competitive
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2: The Pitch (Employer Value) */}
          <div className="col-span-1 md:col-span-5 md:col-start-8 flex flex-col justify-between gap-8">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-(--text-secondary) block mb-6">
                About The Approach
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed font-medium text-(--text-primary)">
                Blending the{" "}
                <span className="text-(--text-secondary) line-through decoration-2 decoration-neutral-400">
                  chaos
                </span>{" "}
                of creativity with the{" "}
                <span className="bg-lime-100 dark:bg-lime-900 text-lime-900 dark:text-lime-200 px-1 rounded">
                  tactical foresight
                </span>{" "}
                of a grandmaster.
              </p>
              <p className="mt-6 text-(--text-secondary) leading-relaxed text-lg">
                I help{" "}
                <span className="text-blue-700 dark:text-blue-400 font-semibold">
                  Fintech
                </span>{" "}
                and{" "}
                <span className="text-blue-700 dark:text-blue-400 font-semibold">
                  SaaS
                </span>{" "}
                leaders navigate complex systems to build products that feel as
                intuitive as a winning move.
              </p>
            </div>

            <a
              href="#work"
              className="inline-flex items-center justify-between w-full p-6 bg-(--bg-secondary) border border-(--border-color) hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-lg transition-all duration-300 rounded-xl group focus-visible:ring-4 focus-visible:ring-blue-500 focus-visible:outline-none"
              aria-label="View Selected Works"
            >
              <span className="text-lg font-bold uppercase tracking-widest text-(--text-primary) group-hover:translate-x-2 transition-transform">
                Selected Works
              </span>
              <ArrowDownRight
                size={24}
                className="text-(--text-primary) group-hover:-rotate-45 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 w-full z-20 py-6 border-t border-(--border-color) bg-(--bg-primary)/90 backdrop-blur-sm"
        aria-hidden="true"
      >
        <Marquee
          speed={30}
          className="opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
        >
          {carouselBrands.map((brand, i) => (
            <div key={brand} className="flex items-center gap-12 mx-12">
              <span
                className={`w-3 h-3 rounded-full ${
                  [
                    "bg-blue-600",
                    "bg-yellow-600",
                    "bg-red-600",
                    "bg-green-600",
                  ][i % 4]
                }`}
              ></span>
              <span className="text-xl md:text-3xl font-bold text-(--text-primary) font-serif italic">
                {brand}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
