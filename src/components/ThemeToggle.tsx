"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-theme";
type Theme = "dark" | "light";

// 昼/夜モード切替ボタン（太陽=ライト/月=ダーク）。
// 選択は localStorage に保存し、<html> に data-theme を付与する。
// ※ ライト配色の完全対応は後回し。まずは切替の仕組みとボタンを用意。
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");

  // 初回：保存済みテーマを復元
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") setTheme(saved);
  }, []);

  // テーマ変更時：保存し <html data-theme> を更新
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggle = () => setTheme((v) => (v === "dark" ? "light" : "dark"));
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 ${className}`}
    >
      {theme === "dark" ? (
        // 月（現在ダーク → 押すとライトへ）
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        // 太陽（現在ライト → 押すとダークへ）
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      )}
    </button>
  );
}
