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
  bio: "초보 바이브코더",
  avatar: "/avatar.svg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com", emoji: "💻" },
  { id: "blog", title: "기술 블로그", url: "https://velog.io", emoji: "✍️" },
  { id: "instagram", title: "Instagram", url: "https://instagram.com", emoji: "📷" },
  { id: "youtube", title: "YouTube 채널", url: "https://youtube.com", emoji: "▶️" },
  { id: "email", title: "이메일 보내기", url: "mailto:hello@example.com", emoji: "✉️" },
];

export const linkIds = new Set(links.map((l) => l.id));
