export type Profile = {
  name: string;
  bio: string;
  avatar: string;
};

export type LinkItem = {
  /** 클릭 수 집계에 쓰이는 고유 ID (바꾸면 기존 집계와 연결이 끊깁니다) */
  id: string;
  title: string;
  url: string;
  emoji?: string;
};

export const profile: Profile = {
  name: "김범중",
  bio: "풀스택 개발자\n요즘에는 AI 개발에 관심이 많아요.",
  avatar: "/avatar.svg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com/Baobob73/linknamu", emoji: "💻" },
  { id: "blog", title: "기술 블로그", url: "https://blog.naver.com/kbj2461", emoji: "✍️" },
  { id: "instagram", title: "Instagram", url: "https://www.instagram.com/baobob_73/", emoji: "📷" },
  { id: "youtube", title: "YouTube 채널", url: "https://www.youtube.com/@kbj6487", emoji: "▶️" },
  { id: "email", title: "이메일 보내기", url: "mailto:kbj6487@gmail.com", emoji: "✉️" },
];

export const linkIds = new Set(links.map((l) => l.id));
