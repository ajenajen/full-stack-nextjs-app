"use client";
import Link from "next/link";
import { Button } from "@mantine/core";
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
      <Button
        className="ml-auto"
        color="red"
        variant="outline"
        onClick={showMsg}
      >
        Click me!
      </Button>
    </nav>
  );
}
