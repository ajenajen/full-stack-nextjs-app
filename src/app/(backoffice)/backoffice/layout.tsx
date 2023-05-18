import "../../globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-violet-700">
        <Link href="/">Back to web</Link>
        <main>{children}</main>
      </body>
    </html>
  );
}
