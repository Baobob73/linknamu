import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `${profile.name} | 링크나무`,
  description: profile.bio,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ecfdf5" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

// 첫 페인트 전에 테마를 적용해 깜빡임(FOUC)을 막습니다.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh bg-gradient-to-b from-emerald-50 to-white text-neutral-900 antialiased transition-colors dark:from-neutral-950 dark:to-neutral-900 dark:text-neutral-100">
        {children}
      </body>
    </html>
  );
}
