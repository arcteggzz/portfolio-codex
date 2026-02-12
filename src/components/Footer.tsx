export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-(--bg-primary) text-black dark:text-white pt-24 pb-8 px-6 md:px-12 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-8">
          Get in Touch
        </span>

        <h2 className="text-[10vw] font-serif italic leading-none mb-12 hover:text-neutral-500 dark:hover:text-neutral-300 transition-colors cursor-pointer">
          <a href="mailto:hello@alexmorgan.work">hello@alex.work</a>
        </h2>

        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-24 pt-8 border-t border-black/5 dark:border-white/10 gap-4">
          <div className="flex gap-8 text-xs uppercase tracking-widest text-neutral-500">
            <span>San Francisco, CA</span>
          </div>

          <div className="flex gap-8 text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
            <a
              href="#"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <div className="text-right">
            <p className="text-neutral-500 text-xs uppercase tracking-widest">
              &copy; {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
