export default function Contact() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-12 mb-20">
      <div className="border-t border-zinc-800 pt-8">
        <h2 className="text-sm font-semibold text-zinc-200">
          Let's work together
        </h2>
        <p className="mt-2 text-sm text-zinc-400 max-w-sm">
          Always open to discussing new projects, architecture ideas, or collaboration opportunities.
        </p>
        <div className="mt-6 flex gap-6 text-sm">
          <div className="flex items-center gap-2 text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            <a href="mailto:gledsonvicente@gmail.com" className="hover:text-white transition-colors underline underline-offset-4 decoration-zinc-700 hover:decoration-white">
              Email me
            </a>
          </div>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-white transition-colors underline underline-offset-4 decoration-zinc-700 hover:decoration-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
