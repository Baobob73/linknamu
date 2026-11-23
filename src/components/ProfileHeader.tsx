import Image from "next/image";
import type { Profile } from "@/data/profile";

export function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="mt-4 flex flex-col items-center text-center">
      <Image
        src={profile.avatar}
        alt={`${profile.name} 프로필 사진`}
        width={96}
        height={96}
        priority
        unoptimized={profile.avatar.endsWith(".svg")}
        className="h-24 w-24 rounded-full object-cover shadow-md ring-4 ring-white dark:ring-neutral-800"
      />
      <h1 className="mt-4 text-xl font-bold sm:text-2xl">{profile.name}</h1>
      <p className="mt-1 max-w-xs text-sm text-neutral-600 dark:text-neutral-400 sm:text-base">
        {profile.bio}
      </p>
    </header>
  );
}
