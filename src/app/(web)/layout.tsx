import "../globals.css";
import Head from "next/head";
import ThemeProviders from "@/components/_client/ThemeProviders";
import AppHeader from "@/components/_client/_layout/AppHeader";
import AppFooter from "@/components/_client/_layout/AppFooter";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <body>
        <ThemeProviders>
          <AppHeader />
          <main className="min-h-screen">{children}</main>
          <AppFooter />
        </ThemeProviders>
      </body>
    </html>
  );
}