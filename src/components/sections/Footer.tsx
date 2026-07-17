"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-navy text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="font-mono text-sm text-white">{t.brand}</p>
        <p className="text-xs">
          © {new Date().getFullYear()} — {t.footer.builtWith}
        </p>
      </div>
    </footer>
  );
}
