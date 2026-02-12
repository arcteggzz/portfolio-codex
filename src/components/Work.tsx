import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "motion/react";
import { Section } from "./ui/Section";
import { ArrowUpRight, List, LayoutTemplate } from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "VANGUARD",
    category: "Fintech",
    role: "Lead Product Designer",
    year: "2025",
    tags: ["UI/UX", "Design System"],
    image:
      "https://images.unsplash.com/photo-1575388902449-6bca946ad549?q=80&w=1200&auto=format&fit=crop",
    slug: "vanguard",
    gallery: [
      "https://images.unsplash.com/photo-1663153203139-40c3caf54a79?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1642132652075-2d43371d5eb1?q=80&w=1200&auto=format&fit=crop",
    ],
    description:
      "Redefining the future of wealth management through a unified digital ecosystem.",
    challenge:
      "The traditional banking interface was cluttered, slow, and disconnected from the needs of modern investors who demand real-time data and intuitive control.",
    solution:
      "We built a modular design system that scales across web and mobile, focusing on data visualization and simplified workflows. The result is a 40% increase in user engagement.",
    link: "#",
  },
  {
    id: 5,
    title: "PLEARNTY",
    category: "EdTech",
    role: "Product Strategy & UX",
    year: "2024",
    tags: ["LMS", "Gamification"],
    image:
      "https://images.unsplash.com/photo-1724331340514-a302e7f8944d?q=80&w=1200&auto=format&fit=crop",
    slug: "plearnty",
    gallery: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop",
    ],
    description:
      "A revolutionary learning management system that bridges the gap between traditional education and digital engagement.",
    challenge:
      "Traditional LMS platforms are notoriously clunky, visually uninspiring, and suffer from low student retention rates. Plearnty needed to feel less like a chore and more like a modern digital campus.",
    solution:
      "By implementing a robust gamification engine and a 'Netflix-style' content discovery interface, we transformed the learning experience. The redesign focused on micro-interactions that reward progress and a fluid navigation structure that makes finding course material intuitive.",
    link: "https://plearnty.unifyedu.ng/",
  },
  {
    id: 2,
    title: "NEXUS OS",
    category: "SaaS",
    role: "UX Architect",
    year: "2024",
    tags: ["Product Strategy", "React"],
    image:
      "https://images.unsplash.com/photo-1624268524134-fb42ea56bc03?q=80&w=1200&auto=format&fit=crop",
    slug: "nexus-os",
    gallery: [
      "https://images.unsplash.com/photo-1624471819298-f7e2b4cc55fd?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
    ],
    description:
      "An operating system for the distributed workforce, unifying communication and task management.",
    challenge:
      "Fragmented tools led to context switching and productivity loss. Users needed a single source of truth.",
    solution:
      "Nexus OS integrates everything into a spatial canvas. We used a card-based UI pattern to allow users to organize their digital workspace naturally.",
    link: "#",
  },
  {
    id: 3,
    title: "CHECKMATE",
    category: "Gaming",
    role: "Visual Designer",
    year: "2024",
    tags: ["Brand Identity", "Motion"],
    image:
      "https://images.unsplash.com/photo-1691945789875-96e50f1ebc50?q=80&w=1200&auto=format&fit=crop",
    slug: "checkmate",
    gallery: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1754307159643-1699d0151ed1?q=80&w=1200&auto=format&fit=crop",
    ],
    description: "A competitive chess platform designed for the esports era.",
    challenge:
      "Chess platforms felt outdated and academic. We needed to inject the energy of competitive gaming.",
    solution:
      "A stark, high-contrast aesthetic with aggressive motion design. Every move feels impactful, with haptic feedback and dynamic sound design.",
    link: "#",
  },
  {
    id: 4,
    title: "ELEVATE",
    category: "Healthcare",
    role: "Product Designer",
    year: "2023",
    tags: ["Mobile App", "Prototyping"],
    image:
      "https://images.unsplash.com/photo-1648260296289-ab882814a005?q=80&w=1200&auto=format&fit=crop",
    slug: "elevate",
    gallery: [
      "https://images.unsplash.com/photo-1767449441925-737379bc2c4d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1663153203139-40c3caf54a79?q=80&w=1200&auto=format&fit=crop",
    ],
    description:
      "Personalized preventative healthcare tracking for the modern patient.",
    challenge:
      "Medical data is often overwhelming and hard to interpret for laypeople.",
    solution:
      "We translated complex biometrics into simple, actionable daily scores using a friendly, soft UI language that encourages consistent usage.",
    link: "#",
  },
];

interface WorkProps {
  onProjectSelect: (project: (typeof projects)[0]) => void;
}

export function Work({ onProjectSelect }: WorkProps) {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Floating Image Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleProjectHover = (
    id: number | null,
    element: HTMLElement | null,
  ) => {
    setHoveredProject(id);
    if (id !== null && element) {
      const rect = element.getBoundingClientRect();
      // Position vertically at the center of the row
      y.set(rect.top + rect.height / 2);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (viewMode === "list") {
      mouseX.set(e.clientX);
    }
  };

  return (
    <Section
      id="work"
      className="bg-[#18181B] dark:bg-[#F4F4F5] text-white dark:text-[#18181B] transition-colors duration-500 pt-24 min-h-screen border-t border-white/10 dark:border-black/10 relative"
      onMouseMove={handleMouseMove}
    >
      {/* Floating Hover Image (List Mode) - Matched to provided design */}
      <AnimatePresence>
        {viewMode === "list" && hoveredProject !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(5px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.8, filter: "blur(5px)" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed z-50 pointer-events-none hidden md:block overflow-hidden shadow-2xl rounded-2xl"
            style={{
              top: y,
              left: x,
              width: "450px",
              height: "300px",
              translateX: "20px",
              translateY: "-50%",
            }}
          >
            <motion.div
              layoutId={`project-image-${hoveredProject}`}
              className="w-full h-full relative"
            >
              <img
                src={projects.find((p) => p.id === hoveredProject)?.image}
                alt="Project Preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />

              {/* Badges as per design reference */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1.5 bg-neutral-900/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/10">
                  {projects.find((p) => p.id === hoveredProject)?.year}
                </span>
                <span className="px-3 py-1.5 bg-neutral-900/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/10">
                  Click to View
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 pb-6 border-b-2 border-white dark:border-[#18181B] gap-6">
        <div>
          <h2 className="text-[12vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter text-white dark:text-[#18181B] uppercase">
            Selected
          </h2>
          <div className="flex items-center gap-4">
            <span className="font-serif italic text-4xl md:text-6xl text-neutral-500 dark:text-neutral-400">
              works
            </span>
            <span className="h-px grow bg-white/20 dark:bg-black/20"></span>
            <span className="text-sm font-mono text-neutral-400 dark:text-neutral-500">
              (2023 — 2025)
            </span>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1 bg-neutral-900 dark:bg-white p-1.5 rounded-lg border border-white/10 dark:border-black/10 mb-2">
          <button
            onClick={() => setViewMode("list")}
            className={`p-2.5 rounded-md flex items-center gap-2 text-sm font-medium transition-all duration-200 ${
              viewMode === "list"
                ? "bg-neutral-800 dark:bg-neutral-200 text-white dark:text-black shadow-sm"
                : "text-neutral-500 hover:text-white dark:hover:text-black"
            }`}
          >
            <List size={18} />
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2.5 rounded-md flex items-center gap-2 text-sm font-medium transition-all duration-200 ${
              viewMode === "grid"
                ? "bg-neutral-800 dark:bg-neutral-200 text-white dark:text-black shadow-sm"
                : "text-neutral-500 hover:text-white dark:hover:text-black"
            }`}
          >
            <LayoutTemplate size={18} />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {viewMode === "list" ? (
          <motion.div
            key="list"
            className="flex flex-col gap-0"
            onMouseLeave={() => setHoveredProject(null)}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layoutId={`project-container-${project.id}`}
                className="group relative border-b border-white/10 dark:border-black/10 py-10 md:py-16 transition-colors duration-300 px-2 cursor-pointer overflow-hidden"
                onClick={() => onProjectSelect(project)}
                onMouseEnter={(e) =>
                  handleProjectHover(project.id, e.currentTarget)
                }
              >
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-white/0 dark:bg-black/0 group-hover:bg-white/5 dark:group-hover:bg-black/5 transition-colors duration-300" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="text-xs font-mono text-neutral-500 dark:text-neutral-500">
                      0{project.id}
                    </span>
                    <motion.h3
                      layoutId={`project-title-${project.id}`}
                      className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white dark:text-[#18181B] group-hover:translate-x-4 transition-transform duration-500 z-20 mix-blend-difference"
                    >
                      {project.title}
                    </motion.h3>
                  </div>

                  <div className="flex items-center gap-12 md:pr-12">
                    <div className="hidden md:flex flex-col items-end text-right">
                      <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
                        {project.year}
                      </span>
                    </div>

                    <motion.div className="w-12 h-12 rounded-full border border-white/20 dark:border-black/20 flex items-center justify-center group-hover:bg-white dark:group-hover:bg-black group-hover:text-black dark:group-hover:text-white transition-all duration-300">
                      <ArrowUpRight size={20} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            className="flex flex-col w-full pb-24"
          >
            {projects.map((project, index) => (
              <GridItem
                key={project.id}
                project={project}
                index={index}
                onSelect={() => onProjectSelect(project)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

function GridItem({
  project,
  index,
  onSelect,
}: {
  project: (typeof projects)[0];
  index: number;
  onSelect: () => void;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="w-full mb-24 md:mb-32 last:mb-0 group cursor-pointer"
      onClick={onSelect}
    >
      <div className="relative overflow-hidden w-full aspect-16/10 md:aspect-[2.35/1] rounded-none md:rounded-lg bg-neutral-900 dark:bg-white transition-all duration-500 border border-white/5 dark:border-black/5">
        <motion.div
          layoutId={`project-image-${project.id}`}
          className="w-full h-full"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
          />
          {/* Badges for Grid View as well, for consistency */}
          <div className="absolute bottom-6 left-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-3 py-1.5 bg-black/50 backdrop-blur text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/10">
              {project.year}
            </span>
            <span className="px-3 py-1.5 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full">
              Click to View
            </span>
          </div>
        </motion.div>
      </div>

      <div className="mt-6 flex flex-col md:flex-row md:items-start justify-between gap-4 border-t border-white/10 dark:border-black/10 pt-4">
        <div>
          <motion.h3
            layoutId={`project-title-${project.id}`}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white dark:text-[#18181B] mb-2"
          >
            {project.title}
          </motion.h3>
          <div className="flex gap-4 text-sm font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
            <span>{project.category}</span>
            <span>—</span>
            <span>{project.year}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
