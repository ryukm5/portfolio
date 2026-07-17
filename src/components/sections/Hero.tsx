"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-navy pb-28">
      {/* 背景動画（PCキーボード）。上下に約100pxの余白を空け、左右いっぱいの帯で表示。
          濃紺の上に薄く重ねる（動画自体を約15%の濃さで表示）。 */}
      <video
        className="pointer-events-none absolute inset-x-0 inset-y-[100px] h-auto w-full object-cover opacity-15"
        autoPlay
        loop
        muted
        playsInline
        // ブラウザは対応する最初のソースを再生。keyboard.webm があればそちらを優先。
        poster="/video/keyboard-poster.jpg"
      >
        <source src="/video/keyboard.webm" type="video/webm" />
        <source src="/video/keyboard.mp4" type="video/mp4" />
      </video>

      {/* コンテンツ（動画より前面）。PC(lg以上)では位置を100px下げ、約50px左へずらす。
          タブレット/モバイル(lg未満)では見切れ防止のため通常配置のまま。
          translate を使い、中央寄せ(mx-auto)や最大幅の計算に影響させない。 */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:mt-[100px] lg:-translate-x-[50px]">
        <p className="mb-4 font-mono text-sm text-white/60">
          {t.hero.tagline}
        </p>
        {/* 見出し：折り返し幅（1行を少し長く：868px → 960px） */}
        <h1 className="max-w-[960px] text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {t.hero.headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/70">
          {t.hero.intro}
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="rounded-md bg-white px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-white/90"
          >
            {t.hero.viewProjects}
          </a>
          <a
            href="#contact"
            className="rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            {t.hero.contact}
          </a>
        </div>
      </div>
    </section>
  );
}
