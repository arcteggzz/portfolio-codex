import { useState } from "react";
import { motion } from "motion/react";
import { Pencil, Image as ImageIcon, ArrowLeftRight } from "lucide-react";
import { Section } from "./ui/Section";

const illustrations = [
  {
    id: 1,
    title: "The Architect",
    sketch:
      "https://images.unsplash.com/photo-1721132537184-5494c01ed87f?q=80&w=800&auto=format&fit=crop",
    final:
      "https://images.unsplash.com/photo-1675872217301-ecaf886173d2?q=80&w=800&auto=format&fit=crop",
    desc: "Architectural concept for a modern library.",
  },
  {
    id: 2,
    title: "Character Study",
    sketch:
      "https://images.unsplash.com/photo-1558180687-8e7a385c6b55?q=80&w=800&auto=format&fit=crop",
    final:
      "https://images.unsplash.com/photo-1720031995215-3b13aa6c42a7?q=80&w=800&auto=format&fit=crop",
    desc: "Evolution of 'The Wanderer' for a game project.",
  },
  {
    id: 3,
    title: "App Wireframe",
    sketch:
      "https://images.unsplash.com/photo-1615387000571-bdcfe92eb67c?q=80&w=800&auto=format&fit=crop",
    final:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    desc: "From napkin sketch to high-fidelity UI.",
  },
];

export function Illustrations() {
  //   const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <Section
      id="illustrations"
      className="bg-(--bg-primary) text-(--text-primary) py-32 border-t border-(--border-color)"
    >
      <div className="max-w-350 mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-(--text-secondary) mb-4">
              Artistic Exploration
            </h2>
            <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              Beyond
              <br /> Pixels.
            </h3>
          </div>
          <p className="mt-8 md:mt-0 max-w-sm text-(--text-secondary)">
            Drawing is thinking. Hover and click to see the evolution from raw
            sketch to polished reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {illustrations.map((art) => (
            <IllustrationCard key={art.id} art={art} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function IllustrationCard({ art }: { art: (typeof illustrations)[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group relative cursor-pointer perspective-[1000px] h-125"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front: Final Drawing (or Sketch based on preference, let's show Final first to reveal origin) */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden border border-(--border-color) bg-(--bg-secondary)">
          <img
            src={art.final}
            alt="Final"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-2">
            <ImageIcon size={14} /> Final
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
            <div className="bg-white text-black rounded-full p-4 shadow-xl">
              <ArrowLeftRight size={24} />
            </div>
          </div>
        </div>

        {/* Back: Sketch */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden border border-(--border-color) bg-[#f0f0f0]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <img
            src={art.sketch}
            alt="Sketch"
            className="w-full h-full object-cover mix-blend-multiply opacity-80"
          />
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-2">
            <Pencil size={14} /> Sketch
          </div>
        </div>
      </motion.div>

      <div className="mt-6 flex justify-between items-start">
        <div>
          <h4 className="text-xl font-bold uppercase tracking-tight">
            {art.title}
          </h4>
          <p className="text-sm text-(--text-secondary) mt-1">{art.desc}</p>
        </div>
      </div>
    </div>
  );
}
