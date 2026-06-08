"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const TRACKED_PAGES = ["/about", "/philosophy", "/hymns", "/mantras", "/meditations", "/library"];
const KEY = "matangi_visited";

export default function SanctuaryTracker() {
  const path = usePathname();

  useEffect(() => {
    if (!TRACKED_PAGES.includes(path)) return;
    try {
      const visited: string[] = JSON.parse(localStorage.getItem(KEY) ?? "[]");
      if (!visited.includes(path)) {
        visited.push(path);
        localStorage.setItem(KEY, JSON.stringify(visited));
      }
    } catch {}
  }, [path]);

  return null;
}

export function getSanctuaryUnlocked(): boolean {
  try {
    const visited: string[] = JSON.parse(localStorage.getItem(KEY) ?? "[]");
    return visited.length >= 3;
  } catch {
    return false;
  }
}
