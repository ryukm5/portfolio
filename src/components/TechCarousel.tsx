"use client";

import { useState } from "react";
import type { TechIcon } from "@/components/techIcons";

const VISIBLE = 5; // 一度に見せる個数
const CENTER = Math.floor(VISIBLE / 2); // アクティブ（中央）の位置 = 2

export default function TechCarousel({ items }: { items: TechIcon[] }) {
  // 表示窓の先頭インデックス
  const [start, setStart] = useState(0);

  const len = items.length;
  // アイテムが5個以下ならスライド不要（そのまま並べる）
  const slidable = len > VISIBLE;

  // 循環で VISIBLE 個を切り出す
  const window = Array.from({ length: Math.min(VISIBLE, len) }, (_, i) => {
    const idx = ((start + i) % len + len) % len;
    return { icon: items[idx], slot: i };
  });

  const move = (dir: number) => {
    setStart((s) => ((s + dir) % len + len) % len);
  };

  return (
    <div className="flex items-center gap-2">
      {/* 左ボタン（ガラス風の丸ボタン） */}
      {slidable && (
        <GlassButton label="前へ" onClick={() => move(-1)}>
          <ChevronLeft />
        </GlassButton>
      )}

      {/* アイコンの窓。ボックスは固定サイズにして、グループ間で完全に同一の大きさにする。 */}
      <ul className="flex flex-1 items-center justify-around gap-2">
        {window.map(({ icon, slot }) => {
          // 中央（アクティブ）判定：5個表示時は slot===2、少数時は中央寄り
          const activeSlot = Math.min(CENTER, window.length - 1);
          const isActive = slidable ? slot === activeSlot : false;
          return (
            <li
              key={`${icon.name}-${slot}`}
              className="flex w-14 flex-col items-center gap-1"
            >
              <span
                title={icon.name}
                className={`group flex h-14 w-14 items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] p-2 transition-all duration-300 hover:scale-110 hover:border-white/40 hover:bg-white/[0.08] ${
                  isActive ? "border-white/30 bg-white/[0.06]" : ""
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill={icon.color}
                  aria-hidden
                  className="h-5 w-5 transition-all duration-300 group-hover:brightness-125"
                >
                  <path d={icon.path} />
                </svg>
              </span>
              <span className="text-center text-[9px] leading-tight text-white">
                {icon.name}
              </span>
            </li>
          );
        })}
      </ul>

      {/* 右ボタン */}
      {slidable && (
        <GlassButton label="次へ" onClick={() => move(1)}>
          <ChevronRight />
        </GlassButton>
      )}
    </div>
  );
}

/* ガラス風の丸ボタン */
function GlassButton({
  children,
  label,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/70 shadow-lg backdrop-blur transition-all duration-200 hover:scale-105 hover:border-white/40 hover:bg-white/20 hover:text-white active:scale-95"
    >
      {children}
    </button>
  );
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
