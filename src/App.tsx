import { useState } from "react";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Work, projects } from "./components/Work";
import { Illustrations } from "./components/Illustrations";
import { About } from "./components/About";
import { CaseStudy, ProjectData } from "./components/CaseStudy";
import { Controls } from "./components/ui/Controls";
import { Preloader } from "./components/Preloader";
import { CustomCursor } from "./components/CustomCursor";
import { AnimatePresence, motion } from "motion/react";
// import { Footer } from "./components/Footer";
import { Footer2 } from "./components/Footer2";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState<"home" | "case-study">("home");
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);

  const handleProjectSelect = (project: ProjectData) => {
    setActiveProject(project);
    setView("case-study");
  };

  const handleBack = () => {
    setView("home");
    setTimeout(() => setActiveProject(null), 500);
  };

  const handleNextProject = () => {
    if (!activeProject) return;
    const currentIndex = projects.findIndex((p) => p.id === activeProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setActiveProject(projects[nextIndex]);
  };

  return (
    <>
      <CustomCursor />
      <div className="noise-bg"></div>

      {/* Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="bg-(--bg-primary) min-h-screen text-(--text-primary) selection:bg-(--text-primary) selection:text-(--bg-primary) transition-colors duration-500 overflow-x-hidden">
          <AnimatePresence>
            {/* Home View - Kept in flow to maintain scroll position during transition */}
            {view === "home" && (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Navbar />

                <main>
                  <Hero />
                  <Work onProjectSelect={handleProjectSelect} />
                  <Illustrations />
                  <About />
                </main>

                <Controls />

                <Footer2 />
              </motion.div>
            )}

            {/* Case Study View - Fixed Overlay */}
            {view === "case-study" && activeProject && (
              <CaseStudy
                key="case-study"
                project={activeProject}
                onBack={handleBack}
                onNext={handleNextProject}
              />
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}
