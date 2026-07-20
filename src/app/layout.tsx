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
      <head>
        {/* ペイント前にテーマを適用（チラつき防止・確実な反映） */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`,
          }}
        />
      </head>
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
