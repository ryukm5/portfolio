"use client";

import { useLanguage } from "@/i18n/LanguageContext";

// TODO: プロジェクト情報が届き次第、この配列を埋めてください。
// description は言語ごとに持たせられます（ja / en）。
// url と repo は任意です。
type Project = {
  title: string;
  description: { ja: string; en: string };
  stack: string[];
  url?: string;
  repo?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Project One",
    description: {
      ja: "プレースホルダーの説明です。プロジェクトの内容とあなたの役割・成果に書き換えてください。",
      en: "Placeholder description. Replace with what the project does and your role/impact.",
    },
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    url: undefined,
    repo: undefined,
  },
  {
    title: "Project Two",
    description: {
      ja: "プレースホルダーの説明です。プロジェクトの内容とあなたの役割・成果に書き換えてください。",
      en: "Placeholder description. Replace with what the project does and your role/impact.",
    },
    stack: ["React", "Node.js"],
    url: undefined,
    repo: undefined,
  },
  {
    title: "Project Three",
    description: {
      ja: "プレースホルダーの説明です。プロジェクトの内容とあなたの役割・成果に書き換えてください。",
      en: "Placeholder description. Replace with what the project does and your role/impact.",
    },
    stack: ["Python", "FastAPI"],
    url: undefined,
    repo: undefined,
  },
];

export default function Projects() {
  const { t, lang } = useLanguage();

  return (
    <section id="projects" className="border-t border-white/10 bg-navy py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 font-mono text-sm text-white/50">
          {t.projects.eyebrow}
        </p>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{t.projects.title}</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
            >
              {/* Placeholder for a screenshot / device mockup */}
              <div className="mb-5 flex aspect-video items-center justify-center rounded-lg bg-white/5 font-mono text-xs text-white/40">
                {t.projects.preview}
              </div>

              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-white/70">
                {project.description[lang]}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded font-mono text-xs text-white/50"
                  >
                    #{tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-4 text-sm">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-white underline-offset-4 hover:underline"
                  >
                    {t.projects.live}
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-white underline-offset-4 hover:underline"
                  >
                    {t.projects.code}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
