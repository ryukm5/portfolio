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
    // data-theme はペイント前スクリプトが付与するため、
    // サーバー描画とクライアントで属性が異なる。意図的なので警告を抑止する。
    <html lang="ja" suppressHydrationWarning>
      <head>
        {/* テーマ切替は現在無効化中。常にダーク固定にするため、
            過去に保存された light 設定が残っていても data-theme を付けない。 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{document.documentElement.removeAttribute('data-theme');}catch(e){}})();`,
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
