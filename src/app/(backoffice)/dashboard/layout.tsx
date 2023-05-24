import "../../globals.css";
import DashboardLayout from "@/components/_client/_layout/_dashboard";

export default function DashboardPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
