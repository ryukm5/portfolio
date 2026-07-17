"use client";

import { useLanguage } from "@/i18n/LanguageContext";

// TODO: 実際の経歴に書き換えてください。役職・会社・概要は言語ごとに持てます。
type Role = {
  period: string;
  title: { ja: string; en: string };
  org: { ja: string; en: string };
  summary: { ja: string; en: string };
};

const ROLES: Role[] = [
  {
    period: "20XX — Present",
    title: { ja: "役職名", en: "Your Role" },
    org: { ja: "会社名", en: "Company" },
    summary: {
      ja: "ここで担当・実績の概要を書いてください。",
      en: "Placeholder summary of what you did and shipped here.",
    },
  },
  {
    period: "20XX — 20XX",
    title: { ja: "以前の役職", en: "Previous Role" },
    org: { ja: "会社名", en: "Company" },
    summary: {
      ja: "担当業務や成果の概要を書いてください。",
      en: "Placeholder summary of responsibilities and impact.",
    },
  },
];

export default function Experience() {
  const { t, lang } = useLanguage();

  return (
    <section id="experience" className="border-t border-white/10 bg-navy py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 font-mono text-sm text-white/50">
          {t.experience.eyebrow}
        </p>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{t.experience.title}</h2>

        <ol className="mt-10 space-y-8 border-l border-white/20 pl-6">
          {ROLES.map((role) => (
            <li key={role.title.en} className="relative">
              <span className="absolute -left-[1.65rem] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-navy" />
              <p className="font-mono text-xs text-white/50">{role.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-white">
                {role.title[lang]}{" "}
                <span className="font-normal text-white/60">
                  @ {role.org[lang]}
                </span>
              </h3>
              <p className="mt-1 text-sm text-white/70">{role.summary[lang]}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
