import Image from "next/image";

// TODO: 진짜 내용으로 교체 (현재는 보여주기용 더미 값)
const dummyProfile = {
  name: "홍길동",
  bio: "더미 소개글입니다. 나중에 한 줄 소개로 바꿔 주세요.",
  avatar: "/avatar.svg",
};

const dummyLinks = [
  { id: "github", title: "GitHub", url: "https://github.com", emoji: "💻" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com", emoji: "💼" },
  { id: "blog", title: "Blog", url: "https://example.com/blog", emoji: "✍️" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-4 pb-16 pt-12 sm:pt-16">
      <header className="flex flex-col items-center text-center">
        <Image
          src={dummyProfile.avatar}
          alt={`${dummyProfile.name} 프로필 사진`}
          width={128}
          height={128}
          priority
          unoptimized
          className="h-32 w-32 rounded-full object-cover shadow-md ring-4 ring-white dark:ring-neutral-800"
        />
        <h1 className="mt-5 text-2xl font-bold">{dummyProfile.name}</h1>
        <p className="mt-1 max-w-xs text-sm text-neutral-600 dark:text-neutral-400 sm:text-base">
          {dummyProfile.bio}
        </p>
      </header>

      <ul className="mt-8 flex w-full flex-col gap-3">
        {dummyLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3 font-medium shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-400 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-emerald-500"
            >
              <span aria-hidden>{link.emoji}</span>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
