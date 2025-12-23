'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-2xl px-6 py-6">
      <h2 className="mb-3 text-sm font-semibold text-zinc-200">
        {t.about.title}
      </h2>
      <div className="space-y-3 text-base leading-relaxed text-zinc-400">
        <p>
          {t.about.p1}
        </p>
        <p>
          {t.about.p2}
        </p>
      </div>
    </section>
  );
}
