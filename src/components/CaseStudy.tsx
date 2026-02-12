import { useEffect } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  MousePointer2,
  Smartphone,
  Monitor,
  Zap,
} from "lucide-react";

export interface ProjectData {
  id: number;
  title: string;
  category: string;
  role: string;
  year: string;
  tags: string[];
  image: string;
  gallery: string[];
  description: string;
  challenge: string;
  solution: string;
  link?: string;
}

interface CaseStudyProps {
  project: ProjectData;
  onBack: () => void;
  onNext: () => void;
}

export function CaseStudy({ project, onBack, onNext }: CaseStudyProps) {
  // Prevent body scroll when Case Study is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-60 bg-(--bg-primary) text-(--text-primary) overflow-y-auto"
    >
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 w-full z-70 flex justify-between items-center p-6 md:p-12 pointer-events-none mix-blend-difference text-white">
        <button
          onClick={onBack}
          className="pointer-events-auto group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-neutral-300 transition-colors"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back
        </button>
      </div>

      {/* Hero Section */}
      <header className="relative w-full h-[85vh] overflow-hidden">
        {/* Shared Layout Image */}
        <motion.div
          layoutId={`project-image-${project.id}`}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          {/* Shared Layout Title */}
          <motion.h1
            layoutId={`project-title-${project.id}`}
            className="text-[12vw] leading-[0.8] font-black uppercase tracking-tighter text-white mb-8"
          >
            {project.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap gap-8 text-white/80 font-mono text-sm uppercase tracking-widest border-t border-white/20 pt-8"
          >
            <div>
              <span className="block text-white/40 mb-1">Role</span>
              {project.role}
            </div>
            <div>
              <span className="block text-white/40 mb-1">Year</span>
              {project.year}
            </div>
            <div>
              <span className="block text-white/40 mb-1">Category</span>
              {project.category}
            </div>
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-350 mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
          <div className="md:col-span-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-(--text-secondary) mb-8 sticky top-32">
              Project Brief
            </h2>
          </div>
          <div className="md:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-4xl font-medium leading-tight mb-12"
            >
              {project.description}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-lg font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  The Challenge
                </h3>
                <p className="text-(--text-secondary) leading-relaxed text-lg">
                  {project.challenge}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-lg font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  The Solution
                </h3>
                <p className="text-(--text-secondary) leading-relaxed text-lg">
                  {project.solution}
                </p>
              </motion.div>
            </div>

            {/* New Section: Interaction & Motion */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-24 p-8 md:p-12 bg-(--bg-secondary) border border-(--border-color) rounded-2xl"
            >
              <h3 className="text-xl font-bold uppercase tracking-widest mb-8 flex items-center gap-3">
                <Zap className="text-yellow-500" /> Interaction & Motion
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col gap-4">
                  <MousePointer2
                    className="text-(--text-secondary)"
                    size={32}
                  />
                  <h4 className="font-bold">Micro-Interactions</h4>
                  <p className="text-sm text-(--text-secondary) leading-relaxed">
                    Designed subtle feedback loops for every user action,
                    ensuring the interface feels alive and responsive. From
                    button states to data loading, nothing is static.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <Smartphone className="text-(--text-secondary)" size={32} />
                  <h4 className="font-bold">Adaptive Layouts</h4>
                  <p className="text-sm text-(--text-secondary) leading-relaxed">
                    A fluid grid system that intelligently reflows content from
                    ultra-wide desktop monitors down to mobile devices without
                    losing hierarchy.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <Monitor className="text-(--text-secondary)" size={32} />
                  <h4 className="font-bold">Visual Language</h4>
                  <p className="text-sm text-(--text-secondary) leading-relaxed">
                    Consistent typography and a unified color system established
                    a strong brand presence that builds trust and familiarity.
                  </p>
                </div>
              </div>
            </motion.div>

            {project.link && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-16 flex justify-start"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-4 px-8 py-5 bg-(--text-primary) text-(--bg-primary) rounded-none font-bold uppercase tracking-wider text-sm hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  <span>Visit Live Project</span>
                  <ExternalLink
                    size={18}
                    className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </motion.div>
            )}
          </div>
        </div>

        {/* Gallery Masonry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {project.gallery.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`w-full overflow-hidden rounded-lg ${i % 3 === 0 ? "md:col-span-2" : ""}`}
            >
              <img
                src={img}
                alt={`Gallery detail ${i + 1}`}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Next Project Footer */}
      <button
        onClick={onNext}
        className="w-full bg-(--bg-secondary) border-t border-(--border-color) py-32 md:py-48 px-6 flex flex-col items-center justify-center group cursor-none hover:bg-(--text-primary) hover:text-(--bg-primary) transition-colors duration-500"
      >
        <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-8">
          Next Case Study
        </span>
        <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter group-hover:scale-105 transition-transform duration-500">
          Next Project
        </h2>
        <ArrowRight
          size={48}
          className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </button>
    </motion.div>
  );
}
