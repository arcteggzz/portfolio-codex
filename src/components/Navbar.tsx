import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe, ArrowUpRight } from "lucide-react";
import { emailLink, fullName, socialLinks } from "../utils/utils";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Africa/Lagos",
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-8 flex justify-between items-start pointer-events-none mix-blend-difference text-white"
      >
        {/* Left: Brand & Role */}
        <div className="pointer-events-auto flex flex-col items-start gap-1">
          <a
            href="#"
            className="text-xl font-bold uppercase tracking-tight leading-none hover:opacity-50 transition-opacity"
          >
            {fullName}
          </a>
          <span className="text-[10px] font-mono uppercase tracking-widest opacity-60">
            Senior Product Designer
          </span>
        </div>

        {/* Right: Info & Menu */}
        <div className="pointer-events-auto flex flex-col items-end gap-1">
          <div className="flex items-center gap-6 text-[10px] font-mono uppercase tracking-widest">
            <div className="hidden md:flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="opacity-60">Available for work</span>
            </div>
            <div className="hidden md:block opacity-60">LAGOS {time}</div>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex items-center gap-2 hover:opacity-50 transition-opacity"
            >
              <span className="font-bold">Menu</span>
              <Menu size={16} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-60 bg-[#18181B] text-[#F4F4F5] flex flex-col"
          >
            {/* Menu Header */}
            <div className="flex justify-between items-start px-6 md:px-12 py-8 border-b border-white/10">
              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold uppercase tracking-tight leading-none">
                  {fullName}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest opacity-50">
                  Menu
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest hover:opacity-50 transition-opacity"
              >
                <span className="font-bold">Close</span>
                <X size={16} />
              </button>
            </div>

            {/* Menu Content */}
            <div className="grow flex flex-col md:flex-row">
              {/* Left: Navigation */}
              <div className="grow flex flex-col justify-center px-6 md:px-12 py-12 md:border-r border-white/10">
                <nav className="flex flex-col gap-2">
                  {[
                    { label: "Index", href: "#" },
                    { label: "Work", href: "#work" },
                    { label: "About", href: "#about" },
                    { label: "Contact", href: "#contact" },
                  ].map((item, i) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="group flex items-center gap-4 text-5xl md:text-7xl font-black uppercase tracking-tighter hover:text-white/50 transition-colors"
                    >
                      <span className="text-sm font-mono opacity-30 group-hover:opacity-100 transition-opacity">
                        0{i + 1}
                      </span>
                      {item.label}
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Right: Socials & Info */}
              <div className="md:w-100 flex flex-col justify-between p-6 md:p-12 bg-white/5">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-[10px] font-mono uppercase tracking-widest opacity-50 mb-4">
                      Socials
                    </h3>
                    <div className="flex flex-col gap-2">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          className="flex items-center justify-between text-lg font-bold uppercase tracking-tight hover:opacity-50 transition-opacity pb-2 border-b border-white/10"
                        >
                          {social.name}
                          <ArrowUpRight size={14} />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[10px] font-mono uppercase tracking-widest opacity-50 mb-4">
                      Contact
                    </h3>
                    <a
                      href={emailLink.href}
                      className="text-xl font-medium hover:underline"
                    >
                      {emailLink.text}
                    </a>
                  </div>
                </div>

                <div className="mt-12 flex justify-between items-end text-[10px] font-mono uppercase tracking-widest opacity-50">
                  <span className="flex items-center gap-2">
                    <Globe size={12} /> NYC, USA
                  </span>
                  <span>© {new Date().getFullYear()}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
