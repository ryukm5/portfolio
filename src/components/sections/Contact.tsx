"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="border-t border-white/10 bg-navy py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-2 font-mono text-sm text-white/50">
          {t.contact.eyebrow}
        </p>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{t.contact.title}</h2>
        <p className="mx-auto mt-4 max-w-md text-white/70">{t.contact.body}</p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          {/* TODO: replace hrefs with your real contact endpoints */}
          <a
            href="mailto:you@example.com"
            className="rounded-md bg-white px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-white/90"
          >
            {t.contact.email}
          </a>
          <a
            href="https://line.me/R/ti/p/@your-line-id"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            {t.contact.line}
          </a>
          <a
            href="https://www.chatwork.com/your-chatwork-id"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            {t.contact.chatwork}
          </a>
        </div>
      </div>
    </section>
  );
}
