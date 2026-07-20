"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

// 送信先・各種ID
const EMAIL_TO = "nobu.web.work@gmail.com";
const LINE_URL = "https://line.me/R/ti/p/@374zhwhk";
const CHATWORK_URL = "https://www.chatwork.com/21esguo5qkv4g";

// 各アイコン（公式の形・色）
const GmailIcon = (
  <svg viewBox="0 0 24 24" fill="#EA4335" className="h-7 w-7" aria-hidden>
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
  </svg>
);
const LineIcon = (
  <svg viewBox="0 0 24 24" fill="#06C755" className="h-7 w-7" aria-hidden>
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596a.65.65 0 0 1-.199.03c-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94a.63.63 0 0 1-.628.629.63.63 0 0 1-.63-.629V8.108a.626.626 0 0 1 .618-.629c.211 0 .391.091.512.25l2.442 3.317V8.108c0-.345.282-.63.63-.63.346 0 .63.285.63.63v4.771zm-5.741 0a.63.63 0 0 1-.631.629.63.63 0 0 1-.63-.629V8.108c0-.345.283-.63.63-.63.346 0 .631.285.631.63v4.771zm-2.466.629H4.917a.634.634 0 0 1-.63-.629V8.108c0-.345.283-.63.63-.63.346 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63a.63.63 0 0 1-.629.628M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
);
const ChatworkIcon = (
  <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
    <circle cx="12" cy="6.4" r="3.5" fill="#F6C9CD" />
    <circle cx="17.6" cy="12" r="3.5" fill="#E64860" />
    <circle cx="12" cy="17.6" r="3.5" fill="#E64860" />
    <circle cx="6.4" cy="12" r="3.5" fill="#E64860" />
  </svg>
);

type ModalKind = null | "email" | "line";

export default function Contact() {
  const { t } = useLanguage();
  const [modal, setModal] = useState<ModalKind>(null);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");

  const closeModal = () => setModal(null);

  // 入力内容を件名・本文に入れて mailto を生成し、メーラーを起動
  const handleSend = () => {
    const subject = `お問い合わせ${name ? `（${name}様）` : ""}`;
    const bodyLines = [
      `お名前: ${name}`,
      "",
      "ご依頼内容:",
      details,
    ];
    const body = bodyLines.join("\n");
    const href = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    closeModal();
  };

  return (
    <section id="contact" className="border-t border-white/10 bg-navy py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{t.contact.title}</h2>
        <p className="mx-auto mt-4 max-w-md text-white/70">{t.contact.body}</p>

        <ul className="mt-10 flex justify-center gap-6 sm:gap-8">
          {/* Email：モーダルを開く */}
          <li>
            <button
              type="button"
              onClick={() => setModal("email")}
              aria-label={t.contact.email}
              title={t.contact.email}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white transition-transform duration-200 hover:scale-110 hover:border-white/50 hover:bg-white/10"
            >
              {GmailIcon}
            </button>
          </li>
          {/* LINE：QR モーダルを開く */}
          <li>
            <button
              type="button"
              onClick={() => setModal("line")}
              aria-label={t.contact.line}
              title={t.contact.line}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white transition-transform duration-200 hover:scale-110 hover:border-white/50 hover:bg-white/10"
            >
              {LineIcon}
            </button>
          </li>
          {/* Chatwork：リンクを開く */}
          <li>
            <a
              href={CHATWORK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.contact.chatwork}
              title={t.contact.chatwork}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white transition-transform duration-200 hover:scale-110 hover:border-white/50 hover:bg-white/10"
            >
              {ChatworkIcon}
            </a>
          </li>
        </ul>
      </div>

      {/* ===== Email モーダル ===== */}
      {modal === "email" && (
        <ModalOverlay onClose={closeModal}>
          <h3 className="text-lg font-bold text-navy-900">
            {t.contact.formTitle}
          </h3>
          <form
            className="mt-5 space-y-4 text-left"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <div>
              <label className="mb-1 block text-sm font-medium text-navy-900">
                {t.contact.nameLabel}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.contact.namePlaceholder}
                required
                className="w-full rounded-md border border-navy/20 px-3 py-2 text-sm text-navy-900 outline-none focus:border-navy"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-navy-900">
                {t.contact.detailsLabel}
              </label>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder={t.contact.detailsPlaceholder}
                required
                rows={5}
                className="w-full resize-y rounded-md border border-navy/20 px-3 py-2 text-sm text-navy-900 outline-none focus:border-navy"
              />
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={closeModal}
                className="rounded-md border border-navy/30 px-5 py-2 text-sm font-medium text-navy-900 transition-colors hover:bg-navy/5"
              >
                {t.contact.cancel}
              </button>
              <button
                type="submit"
                className="rounded-md bg-navy px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-navy-600"
              >
                {t.contact.send}
              </button>
            </div>
          </form>
        </ModalOverlay>
      )}

      {/* ===== LINE QR モーダル ===== */}
      {modal === "line" && (
        <ModalOverlay onClose={closeModal}>
          <h3 className="text-lg font-bold text-navy-900">
            {t.contact.lineTitle}
          </h3>
          <p className="mt-2 text-sm text-navy-900/70">{t.contact.lineDesc}</p>
          <div className="mt-5 flex justify-center">
            <Image
              src="/line-qr.png"
              alt="LINE QR code"
              width={220}
              height={220}
              className="rounded-lg border border-navy/10"
            />
          </div>
          <div className="mt-6 flex justify-center gap-3">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[#06C755] px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              {t.contact.line}
            </a>
            <button
              type="button"
              onClick={closeModal}
              className="rounded-md border border-navy/30 px-5 py-2 text-sm font-medium text-navy-900 transition-colors hover:bg-navy/5"
            >
              {t.contact.close}
            </button>
          </div>
        </ModalOverlay>
      )}
    </section>
  );
}

// モーダルの共通枠（背景オーバーレイ＋白いカード）
function ModalOverlay({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
