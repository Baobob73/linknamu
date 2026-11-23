"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/data/profile";
import { LinkCard } from "./LinkCard";

export function LinkList({ links }: { links: LinkItem[] }) {
  const [counts, setCounts] = useState<Record<string, number> | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/clicks")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        // DB가 연결되지 않았으면 카운트 뱃지를 숨깁니다.
        if (!cancelled && data?.enabled) setCounts(data.counts ?? {});
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
    setCounts((prev) => (prev ? { ...prev, [id]: (prev[id] ?? 0) + 1 } : prev));
  }

  return (
    <ul className="mt-8 flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            link={link}
            count={counts ? counts[link.id] ?? 0 : undefined}
            onClick={handleClick}
          />
        </li>
      ))}
    </ul>
  );
}
