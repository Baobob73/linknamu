import { links, profile } from "@/data/profile";
import { LinkList } from "@/components/LinkList";
import { ProfileHeader } from "@/components/ProfileHeader";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-4 pb-16 pt-6">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <ProfileHeader profile={profile} />
      <LinkList links={links} />
    </main>
  );
}
