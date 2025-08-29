
"use client";
import { useRouter, usePathname } from "next/navigation";

export default function TopNav() {
  const router = useRouter();
  const pathname = usePathname();
  const LinkBtn = ({ href, label }: { href: string; label: string }) => (
    <button
      onClick={() => router.push(href)}
      className={`px-3 py-2 rounded-lg hover:bg-gray-100 text-sm ${pathname === href ? "font-semibold" : ""}`}
    >
      {label}
    </button>
  );
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/")}>
          <div className="w-8 h-8 rounded-2xl bg-gray-900 text-white grid place-items-center font-bold">H</div>
          <span className="font-semibold text-lg tracking-tight">Harbor</span>
        </div>
        <nav className="hidden md:flex items-center gap-2">
          <LinkBtn href="/" label="Home" />
          <LinkBtn href="/results" label="Browse" />
          <LinkBtn href="/pricing" label="Pricing" />
          <LinkBtn href="/import" label="Import CSV" />
        </nav>
      </div>
    </header>
  );
}
