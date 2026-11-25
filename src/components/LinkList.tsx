"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/data/profile";
import { LinkCard } from "./LinkCard";

export function LinkList({ links }: { links: LinkItem[] }) {
  // 데이터를 받기 전에는 빈 객체 → 모든 카드가 0회로 표시됩니다.
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let cancelled = false;
    fetch("/api/clicks")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        // 받아 온 값으로 갱신 (그 사이 클릭한 낙관적 증가분은 유지)
        if (!cancelled && data?.counts) {
          setCounts((prev) => {
            const next: Record<string, number> = { ...data.counts };
            for (const [id, n] of Object.entries(prev)) next[id] = (next[id] ?? 0) + n;
            return next;
          });
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  function handleClick(id: string) {
    const body = JSON.stringify({ id });
    // 페이지를 떠나도 전송되도록 sendBeacon을 우선 사용합니다.
    const sent =
      typeof navigator.sendBeacon === "function" &&
      navigator.sendBeacon("/api/clicks", new Blob([body], { type: "application/json" }));
    if (!sent) {
      fetch("/api/clicks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      }).catch(() => {});
    }
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }

  return (
    <ul className="mt-8 flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            link={link}
            count={counts[link.id] ?? 0}
            onClick={handleClick}
          />
        </li>
      ))}
    </ul>
  );
}
