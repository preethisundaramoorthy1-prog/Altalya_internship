"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="fixed top-15 left-2 z-80 text-sm text-gray-400 hover:text-white"
    >
      ← Back to Courses
    </button>
  );
}