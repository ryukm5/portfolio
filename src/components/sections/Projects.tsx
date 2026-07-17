"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

// TODO: プロジェクト情報が届き次第、この配列を埋めてください。
// description は言語ごとに持たせられます（ja / en）。
// image はトップページのスクショ（public/ 配下のパス）。未指定なら preview 枠。
// url と repo は任意です。
type Project = {
  title: string;
  description: { ja: string; en: string };
  stack: string[];
  image?: string;
  url?: string;
  repo?: string;
};

const PROJECTS: Project[] = [
  {
    title: "CARTA ZERO",
    description: {
      ja: "統合マーケティング企業のコーポレートサイト。3D表現とアニメーションを取り入れたブランディング重視の実装を担当しました。",
      en: "Corporate site for an integrated-marketing firm. Handled a branding-focused build with 3D visuals and motion.",
    },
    stack: ["Next.js", "TypeScript", "WebGL"],
    image: "/projects/cartazero.png",
    url: "https://www.cartazero.co.jp/ja",
    repo: undefined,
  },
  {
    title: "株式会社 丸運",
    description: {
      ja: "創業130年以上の総合物流会社のコーポレートサイト。多言語対応とIR・採用など多階層の情報設計を担当しました。",
      en: "Corporate site for a 130-year-old logistics company. Handled multilingual support and multi-layered IR/recruit information architecture.",
    },
    stack: ["WordPress", "PHP", "JavaScript"],
    image: "/projects/maruwn.png",
    url: "https://www.maruwn.co.jp/",
    repo: undefined,
  },
  {
    title: "ARLUIS WEDDING 採用サイト",
    description: {
      ja: "ブライダル企業の採用サイト。動画ヒーローとスクロール演出で世界観を伝える表現面の実装を担当しました。",
      en: "Recruit site for a bridal company. Handled the expressive front-end with a video hero and scroll-driven storytelling.",
    },
    stack: ["JavaScript", "GSAP", "HTML/CSS"],
    image: "/projects/arluis.png",
    url: "https://recruit.arluis-wedding.com/",
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

        {/* バナー画像（リストの前）。明るすぎないよう半透明に。 */}
        <div className="mt-8 overflow-hidden rounded-xl border border-white/10">
          <Image
            src="/banner.png"
            alt=""
            width={1672}
            height={941}
            className="h-auto w-full opacity-60"
            priority
          />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
            >
              {/* トップページのスクショ。未指定なら preview 枠。 */}
              <div className="mb-5 aspect-video overflow-hidden rounded-lg bg-white/5">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={640}
                    height={360}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center font-mono text-xs text-white/40">
                    {t.projects.preview}
                  </div>
                )}
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
