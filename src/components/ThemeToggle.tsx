"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white/70 text-lg shadow-sm backdrop-blur transition hover:scale-105 dark:border-neutral-700 dark:bg-neutral-800/70"
    >
      {/* 마운트 전에는 빈 칸을 렌더링해 하이드레이션 불일치를 피합니다 */}
      <span aria-hidden>{dark === null ? "" : dark ? "☀️" : "🌙"}</span>
    </button>
  );
}
