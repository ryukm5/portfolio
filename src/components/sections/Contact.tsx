"use client";

import { useLanguage } from "@/i18n/LanguageContext";

// 連絡先アイコン（実際のアイコンで表示。ホバーで拡大）。
// TODO: href を実際の連絡先に差し替えてください。
const CONTACTS = [
  {
    key: "email",
    href: "mailto:you@example.com",
    external: false,
    // Gmail 公式アイコン（Simple Icons, CC0）
    icon: (
      <svg viewBox="0 0 24 24" fill="#EA4335" className="h-7 w-7" aria-hidden>
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
      </svg>
    ),
  },
  {
    key: "line",
    href: "https://line.me/R/ti/p/@your-line-id",
    external: true,
    // LINE 公式アイコン（Simple Icons, CC0）
    icon: (
      <svg viewBox="0 0 24 24" fill="#06C755" className="h-7 w-7" aria-hidden>
        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596a.65.65 0 0 1-.199.03c-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94a.63.63 0 0 1-.628.629.63.63 0 0 1-.63-.629V8.108a.626.626 0 0 1 .618-.629c.211 0 .391.091.512.25l2.442 3.317V8.108c0-.345.282-.63.63-.63.346 0 .63.285.63.63v4.771zm-5.741 0a.63.63 0 0 1-.631.629.63.63 0 0 1-.63-.629V8.108c0-.345.283-.63.63-.63.346 0 .631.285.631.63v4.771zm-2.466.629H4.917a.634.634 0 0 1-.63-.629V8.108c0-.345.283-.63.63-.63.346 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63a.63.63 0 0 1-.629.628M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
      </svg>
    ),
  },
  {
    key: "chatwork",
    href: "https://www.chatwork.com/your-chatwork-id",
    external: true,
    // Chatwork 公式ロゴ（4枚の花びら。上のみ淡い色）
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
        {/* 上（淡いピンク） */}
        <circle cx="12" cy="6.4" r="3.5" fill="#F6C9CD" />
        {/* 右（赤） */}
        <circle cx="17.6" cy="12" r="3.5" fill="#E64860" />
        {/* 下（赤） */}
        <circle cx="12" cy="17.6" r="3.5" fill="#E64860" />
        {/* 左（赤） */}
        <circle cx="6.4" cy="12" r="3.5" fill="#E64860" />
      </svg>
    ),
  },
];

export default function Contact() {
  const { t } = useLanguage();

  const label = (key: string) =>
    key === "email"
      ? t.contact.email
      : key === "line"
        ? t.contact.line
        : t.contact.chatwork;

  return (
    <section id="contact" className="border-t border-white/10 bg-navy py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{t.contact.title}</h2>
        <p className="mx-auto mt-4 max-w-md text-white/70">{t.contact.body}</p>

        <ul className="mt-10 flex justify-center gap-6 sm:gap-8">
          {CONTACTS.map((c) => (
            <li key={c.key}>
              <a
                href={c.href}
                aria-label={label(c.key)}
                title={label(c.key)}
                {...(c.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white transition-transform duration-200 hover:scale-110 hover:border-white/50 hover:bg-white/10"
              >
                {c.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
