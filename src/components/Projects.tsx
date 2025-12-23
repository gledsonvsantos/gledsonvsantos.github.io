'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t.projects.items[0].title,
      description: t.projects.items[0].description,
      tech: ["Java", "Spring Boot", "AWS Kinesis", "Redshift"],
      link: "#"
    },
    {
      title: t.projects.items[1].title,
      description: t.projects.items[1].description,
      tech: ["Kotlin", "Kafka", "AWS Lambda", "DynamoDB"],
      link: "#"
    }
  ];

  return (
    <section className="mx-auto max-w-2xl px-6 py-6">
      <h2 className="mb-6 text-sm font-semibold text-zinc-200">
        {t.projects.title}
      </h2>
      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.title} className="group relative flex flex-col items-start gap-2">
            <h3 className="text-base font-medium text-zinc-100 group-hover:underline underline-offset-4 decoration-zinc-700">
              {project.title}
            </h3>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-400">
              {project.description}
            </p>
            <div className="flex gap-3 mt-1">
              {project.tech.map((tech) => (
                <span key={tech} className="text-xs text-zinc-500 font-mono bg-zinc-800/50 px-1.5 py-0.5 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
