"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { FEATURED_TECHS } from "@/components/techIcons";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-t border-white/10 bg-navy py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{t.about.title}</h2>
        <div className="mt-8 grid gap-8 md:gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* 左：自己紹介文 */}
          <div className="space-y-4 leading-relaxed text-white/70">
            {t.about.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* 右：技術スタック（5行×4列のグリッド。アイコンは自色、枠は薄い半透明、名前は白） */}
          <div>
            <p className="mb-4 font-mono text-sm text-white/50">
              {t.about.stackLabel}
            </p>
            <ul className="grid grid-cols-4 gap-3">
              {FEATURED_TECHS.map((icon) => (
                <li key={icon.name} className="flex flex-col items-center gap-1.5">
                  <span
                    title={icon.name}
                    className="group flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg border border-white/15 bg-white/[0.03] p-1.5 transition-colors duration-200 hover:border-white/50 hover:bg-white/10"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill={icon.color}
                      aria-hidden
                      className="h-9 w-9 transition-transform duration-200 group-hover:scale-125"
                    >
                      <path d={icon.path} />
                    </svg>
                  </span>
                  <span className="text-center text-[10px] leading-tight text-white">
                    {icon.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
