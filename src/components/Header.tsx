'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <header className="mx-auto max-w-2xl px-6 pt-16 pb-8">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Gledson Vicente Santos
            </h1>
            <p className="text-lg text-zinc-300 font-medium">
              {t.header.role}
            </p>
            <p className="mt-3 max-w-lg text-base text-zinc-400 leading-relaxed">
              {t.header.description}
            </p>
          </div>
          <button
            onClick={toggleLanguage}
            className="text-xs font-medium text-zinc-500 hover:text-white transition-colors border border-zinc-800 rounded px-2 py-1"
          >
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
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