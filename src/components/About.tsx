import { useRef } from "react";
import { motion } from "motion/react";
import {
  ArrowDownRight,
  Download,
  Eye,
  Target,
  Zap,
  Crosshair,
  Crown,
} from "lucide-react";
import { Section } from "./ui/Section";

// Shared Colors from Hero for consistency
const COLORS = {
  blue: {
    hex: "#2563eb",
    tailwind: "text-blue-700 dark:text-blue-400",
    bg: "bg-blue-600",
    border: "border-blue-600",
  },
  yellow: {
    hex: "#ca8a04",
    tailwind: "text-yellow-800 dark:text-yellow-400",
    bg: "bg-yellow-600",
    border: "border-yellow-600",
  },
  red: {
    hex: "#dc2626",
    tailwind: "text-red-700 dark:text-red-400",
    bg: "bg-red-600",
    border: "border-red-600",
  },
  green: {
    hex: "#16a34a",
    tailwind: "text-green-700 dark:text-green-400",
    bg: "bg-green-600",
    border: "border-green-600",
  },
};

const PROCESS_STEPS = [
  {
    id: "01",
    title: "Discovery",
    subtitle: "The Opening",
    desc: "Every great game starts with understanding the board. I dive deep into user needs, market gaps, and technical constraints to establish a solid opening theory.",
    icon: Eye,
    color: COLORS.blue,
  },
  {
    id: "02",
    title: "Strategy",
    subtitle: "The Middlegame",
    desc: "Tactics without strategy is the noise before defeat. I define information architecture and user flows that anticipate every move, ensuring a resilient product structure.",
    icon: Target,
    color: COLORS.yellow,
  },
  {
    id: "03",
    title: "Execution",
    subtitle: "The Attack",
    desc: "This is where the pieces come alive. High-fidelity UI, interactive prototypes, and motion design that captures attention and guides the user toward the objective.",
    icon: Zap,
    color: COLORS.red,
  },
  {
    id: "04",
    title: "Delivery",
    subtitle: "Checkmate",
    desc: "The endgame is precision. I ensure pixel-perfect implementation, comprehensive documentation, and a seamless handoff that leaves no room for error.",
    icon: Crown,
    color: COLORS.green,
  },
];

const SKILLS = [
  "User Research",
  "Wireframing",
  "Prototyping",
  "UI Design",
  "Design Systems",
  "Interaction Design",
  "React / Next.js",
  "Tailwind CSS",
  "Motion / Framer",
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Section
      id="about"
      className="relative bg-(--bg-primary) text-(--text-primary) pt-24 pb-32 md:py-40 overflow-hidden border-t border-(--border-color) transition-colors duration-500"
    >
      {/* Background Grid Lines - Subtle Tactical Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 flex w-full h-full mix-blend-multiply dark:mix-blend-overlay opacity-[0.03] dark:opacity-[0.1]">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex-1 border-r border-(--border-color)" />
        ))}
      </div>

      <div
        className="max-w-350 mx-auto px-6 md:px-12 relative z-10"
        ref={containerRef}
      >
        {/* --- SECTION 1: ABOUT ME --- */}
        {/* Uses a grid to create a strong visual channel for the eye to follow */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12 mb-32 md:mb-48">
          {/* Sticky Header - Holds position while content scrolls */}
          <div className="md:col-span-4 relative">
            <div className="md:sticky md:top-32 flex flex-col items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <span className="w-3 h-3 bg-neutral-900 dark:bg-white rounded-full ring-4 ring-neutral-100 dark:ring-neutral-800" />
                <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-(--text-secondary)">
                  About Me
                </h2>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tight mb-8"
              >
                Playful
                <br />
                <span className="text-transparent stroke-text [-webkit-text-stroke:2px_currentColor] opacity-80">
                  Yet
                </span>
                <br />
                Serious.
              </motion.h3>

              <div className="hidden md:flex w-24 h-24 rounded-full bg-(--bg-secondary) items-center justify-center border border-(--border-color) mt-4 group">
                <ArrowDownRight
                  size={32}
                  className="text-(--text-primary) group-hover:-rotate-45 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Content Column - Right Side */}
          <div className="md:col-span-7 md:col-start-6 flex flex-col pt-4 md:pt-16">
            {/* Narrative Text */}
            <div className="space-y-8 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl">
              <p>
                I am a{" "}
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-200 px-2 py-0.5 rounded box-decoration-clone">
                  Senior Product Designer
                </span>{" "}
                who treats every pixel as a strategic move.
              </p>
              <p className="text-(--text-secondary)">
                My work sits at the intersection of rigorous systematic thinking
                and unbridled creative chaos. I don't just design screens; I
                architect experiences that feel inevitable.
              </p>
            </div>

            {/* Attributes Grid - "The Stats" */}
            <div className="grid grid-cols-2 gap-4 my-12">
              <div className="p-6 md:p-8 bg-(--bg-secondary) rounded-2xl border border-(--border-color) hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors">
                <span className="block text-4xl md:text-6xl font-black mb-2 tracking-tighter text-(--text-primary)">
                  5+
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-(--text-secondary)">
                  Years Experience
                </span>
              </div>
              <div className="p-6 md:p-8 bg-(--bg-secondary) rounded-2xl border border-(--border-color) hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors">
                <span className="block text-4xl md:text-6xl font-black mb-2 tracking-tighter text-(--text-primary)">
                  50+
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-(--text-secondary)">
                  Projects Shipped
                </span>
              </div>
            </div>

            {/* Skills Cloud */}
            <div className="mb-12">
              <h4 className="text-sm font-bold uppercase tracking-widest text-(--text-secondary) mb-6">
                Technical Arsenal
              </h4>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {SKILLS.map((skill, i) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-(--bg-secondary) border border-(--border-color) text-sm font-medium text-(--text-secondary) hover:border-neutral-400 dark:hover:border-neutral-500 hover:text-(--text-primary) transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="/cv.pdf"
              className="self-start inline-flex items-center gap-3 px-8 py-4 bg-(--text-primary) text-(--bg-primary) rounded-full font-bold uppercase tracking-wider text-sm hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 focus:ring-4 focus:ring-blue-500/30 focus:outline-none"
              aria-label="Download Curriculum Vitae"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>

        {/* --- SECTION 2: THE PROCESS --- */}
        {/* Separated by significant whitespace to denote a new 'chapter' */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12 border-t border-(--border-color) pt-24 md:pt-32">
          {/* Sticky Header */}
          <div className="md:col-span-4 relative">
            <div className="md:sticky md:top-32">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <span className="w-3 h-3 bg-neutral-900 dark:bg-white rounded-full ring-4 ring-neutral-100 dark:ring-neutral-800" />
                <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-(--text-secondary)">
                  The Method
                </h2>
              </motion.div>

              <h3 className="text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tight text-(--text-primary)">
                Grand
                <br />
                Master
                <br />
                Plan.
              </h3>

              <p className="mt-8 text-(--text-secondary) max-w-xs leading-relaxed hidden md:block">
                A systematic framework for solving complex design problems,
                inspired by the foresight required in chess.
              </p>
            </div>
          </div>

          {/* Process Steps List */}
          <div className="md:col-span-8 flex flex-col">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative border-b last:border-b-0 border-(--border-color) py-16 md:py-20 hover:bg-(--bg-secondary) transition-colors -mx-6 px-6 md:-mx-12 md:px-12 rounded-3xl"
                  tabIndex={0}
                  role="article"
                  aria-label={`${step.title}: ${step.subtitle}`}
                >
                  <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                    {/* Huge Index Number */}
                    <div
                      className={`text-6xl md:text-8xl font-black text-neutral-100 dark:text-neutral-800 group-hover:text-neutral-200 dark:group-hover:text-neutral-700 transition-colors duration-500 font-mono select-none`}
                    >
                      {step.id}
                    </div>

                    <div className="flex-1 pt-2">
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`p-3 rounded-xl ${step.color.bg} text-white shadow-lg`}
                        >
                          <Icon size={24} />
                        </div>
                        <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-(--text-primary)">
                          {step.title}
                        </h4>
                      </div>

                      <p className="text-xs font-mono font-bold uppercase tracking-widest text-(--text-secondary) mb-4 flex items-center gap-2">
                        <Crosshair size={14} className={step.color.tailwind} />
                        <span className={step.color.tailwind}>
                          {step.subtitle}
                        </span>
                      </p>

                      <p className="text-lg md:text-xl text-(--text-secondary) leading-relaxed max-w-2xl group-hover:text-(--text-primary) transition-colors">
                        {step.desc}
                      </p>
                    </div>

                    {/* Hover Interaction Arrow */}
                    <div className="hidden md:flex h-full items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-10 group-hover:translate-x-0">
                      <ArrowDownRight
                        size={64}
                        className="text-neutral-200 dark:text-neutral-700"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
