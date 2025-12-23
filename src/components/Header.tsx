export default function Header() {
  return (
    <header className="mx-auto max-w-2xl px-6 pt-16 pb-8">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Gledson Vicente Santos
          </h1>
          <p className="text-lg text-zinc-300 font-medium">
            Backend & Cloud Engineer
          </p>
          <p className="mt-3 max-w-lg text-base text-zinc-400 leading-relaxed">
            Architecting scalable distributed systems on AWS.
          </p>
        </div>

        <nav className="flex gap-5 text-sm font-medium mt-2">
          <a 
            className="text-zinc-400 hover:text-white transition-colors underline underline-offset-4 decoration-zinc-700 hover:decoration-white" 
            href="https://www.linkedin.com/in/gledson-vicente" 
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a 
            className="text-zinc-400 hover:text-white transition-colors underline underline-offset-4 decoration-zinc-700 hover:decoration-white" 
            href="https://github.com/gledsonvsantos" 
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}