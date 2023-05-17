"use client";

import AppLogo from "@/components/_client/_layout/AppLogo";

export default function AppHeader() {
  const showMsg = () => {
    alert("hello");
  };

  return (
    <nav className="flex p-4">
      <AppLogo />
      <h1 className="px-4">AppHeader</h1>
      <button className="text-green-300" onClick={showMsg}>
        Click me!
      </button>
    </nav>
  );
}
