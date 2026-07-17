import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/i18n/LanguageContext";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Full-stack engineer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <LanguageProvider>
          <Navbar />
          {/* 下部固定バーに最後のセクションが隠れないよう余白を確保 */}
          <main className="pb-32">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
