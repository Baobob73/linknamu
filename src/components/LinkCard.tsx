import type { LinkItem } from "@/data/profile";

type Props = {
  link: LinkItem;
  count?: number;
  onClick: (id: string) => void;
};

export function LinkCard({ link, count, onClick }: Props) {
  const external = !link.url.startsWith("mailto:");
  return (
    <a
      href={link.url}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={() => onClick(link.id)}
      className="group flex min-h-14 items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-400 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 active:translate-y-0 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-emerald-500"
    >
      {link.emoji && (
        <span aria-hidden className="text-xl">
          {link.emoji}
        </span>
      )}
      <span className="flex-1 truncate font-medium">{link.title}</span>
      {typeof count === "number" && (
        <span
          className="shrink-0 rounded-full bg-emerald-50 px-2 py-0.5 text-xs tabular-nums text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
          aria-label={`클릭 ${count}회`}
        >
          {count.toLocaleString("ko-KR")}
        </span>
      )}
    </a>
  );
}
