"use client";
import { ReactNode } from "react";
import { CacheProvider } from "@emotion/react";
import { MantineProvider, useEmotionCache } from "@mantine/core";
import { Sarabun } from "next/font/google";

const sarabun = Sarabun({
  subsets: ["thai"],
  weight: ["100", "200", "400", "600", "800"],
});
export default function ThemeProviders({ children }: { children: ReactNode }) {
  const cache = useEmotionCache();
  cache.compat = true;

  return (
    <CacheProvider value={cache}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: sarabun.style.fontFamily, //replace font theme
        }}
      >
        {children}
      </MantineProvider>
    </CacheProvider>
  );
}
