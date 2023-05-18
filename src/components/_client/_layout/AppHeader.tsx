"use client";
import Link from "next/link";
import AppLogo from "@/components/_client/_layout/AppLogo";

export default function AppHeader() {
  const showMsg = () => {
    alert("hello");
  };

  return (
    <nav className="flex p-4 bg-violet-700 text-black">
      <AppLogo />
      <div className="grid grid-cols-4 gap-4 mx-4">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
      </div>
      <button className="text-green-300 ms-auto" onClick={showMsg}>
        Click me!
      </button>
    </nav>
  );
}
