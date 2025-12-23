'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  const skills = [
    { category: t.skills.categories.languages, items: ["Java", "Python", "Kotlin", "TypeScript"] },
    { category: t.skills.categories.stack, items: ["Spring Boot", "Quarkus", "Next.js", "FastAPI"] },
    { category: t.skills.categories.cloud, items: ["AWS Lambda", "ECS", "SQS", "Kinesis", "Terraform"] },
    { category: t.skills.categories.data, items: ["PostgreSQL", "DynamoDB", "Redis", "MongoDB"] },
  ];

  return (
    <section className="mx-auto max-w-2xl px-6 py-6">
      <h2 className="mb-4 text-sm font-semibold text-zinc-200">
        {t.skills.title}
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="flex flex-col gap-2">
            <h3 className="text-sm font-medium text-zinc-300">{skillGroup.category}</h3>
            <ul className="flex flex-wrap gap-x-3 gap-y-1">
              {skillGroup.items.map((item) => (
                <li 
                  key={item} 
                  className="text-sm text-zinc-500"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
