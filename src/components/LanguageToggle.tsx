"use client";

import { useLanguage } from "@/i18n/LanguageContext";

// 現在の言語を表示し、押すともう一方に切り替わるボタン。
export default function LanguageToggle({
  className = "",
}: {
  className?: string;
}) {
  const { lang, toggle } = useLanguage();

  const currentLabel = lang === "ja" ? "日本語" : "English";
  const nextLabel = lang === "ja" ? "English" : "日本語";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch language to ${nextLabel}`}
      title={`Switch to ${nextLabel}`}
      className={`inline-flex items-center gap-1.5 rounded-md border border-white/25 px-3 py-1.5 font-mono text-xs font-medium text-white transition-colors hover:bg-white/10 ${className}`}
    >
      {/* 固定幅・中央寄せにして、JA/EN で幅が変わらないようにする */}
      <span className="inline-block w-14 text-center">{currentLabel}</span>
      <span aria-hidden className="text-white/50">
        ⇄
      </span>
    </button>
  );
}
