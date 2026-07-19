"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  // アバターの左右に振り分けるナビ項目（デスクトップ）
  const leftLinks = [
    { label: t.nav.about, href: "#about" }, // 紹介
    { label: t.nav.projects, href: "#projects" }, // 構築したサイト
  ];
  const rightLinks = [
    { label: t.nav.contact, href: "#contact" }, // 連携
  ];
  // モバイルのメニューは全項目をまとめて表示
  const allLinks = [...leftLinks, ...rightLinks];

  return (
    // 常に画面下部に固定。上はアバターのはみ出し分の余白を確保。
    <header className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 pt-12">
      {/* PC(lg以上)は幅2/3、タブレット/モバイルは広め。中央配置。 */}
      <div className="relative mx-auto w-full max-w-5xl lg:w-2/3">
        {/* モバイル：展開したナビ項目（バーの上に浮かせる） */}
        {open && (
          <ul className="absolute bottom-full left-1/2 mb-3 flex w-[calc(100%-1rem)] max-w-xs -translate-x-1/2 flex-col gap-1 rounded-2xl border border-white/10 bg-navy-bar/95 p-2 shadow-lg backdrop-blur lg:hidden">
            {allLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-2.5 text-base text-white transition-colors hover:bg-white/10"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* トップバー本体：両端が半円のカプセル形状。枠線は白。 */}
        <div className="relative rounded-full border border-white bg-navy-bar/[.19] shadow-lg backdrop-blur">
          {/* 中央の円形アバター（上へはみ出す）。縁の色はバーの線に合わせて白。 */}
          <div className="pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/3">
            <a href="#top" className="pointer-events-auto block">
              <span className="block overflow-hidden rounded-full border-4 border-white bg-navy-bar shadow-lg">
                <Image
                  src="/avatar.png"
                  alt="Avatar"
                  width={96}
                  height={96}
                  className="h-16 w-16 rounded-full object-cover sm:h-24 sm:w-24"
                  priority
                />
              </span>
            </a>
          </div>

          {/* ===== PC (lg 以上)：左右にナビ、右端に言語ボタン ===== */}
          <nav className="mx-auto hidden h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-8 lg:grid">
            {/* 左グループ：経験・構築したサイト */}
            <ul className="flex items-center justify-end gap-24 pr-10 sm:pr-14">
              {leftLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="whitespace-nowrap text-base text-white transition-colors hover:text-white/80"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* 中央：アバター用スペース */}
            <div className="w-16 sm:w-20" aria-hidden />

            {/* 右グループ：紹介・連携　＋　右端に言語トグル */}
            <div className="flex items-center justify-between gap-6 pl-10 sm:pl-14">
              <ul className="flex items-center gap-24">
                {rightLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="whitespace-nowrap text-base text-white transition-colors hover:text-white/80"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              {/* 言語設定：バー右端 */}
              <LanguageToggle />
            </div>
          </nav>

          {/* ===== タブレット/モバイル (lg 未満)：ハンバーガー｜アバター｜言語ボタン ===== */}
          <div className="flex h-16 items-center justify-between px-5 lg:hidden">
            {/* ハンバーガー */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex flex-col gap-1.5 p-1"
            >
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
            </button>

            {/* 中央のアバター用スペース */}
            <div className="w-12" aria-hidden />

            {/* 言語トグル */}
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
