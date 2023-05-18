import Link from "next/link";

export default function BackOfficePage() {
  return (
    <div>
      <Link
        className="bg-transparent py-2 px-4 border border-blue-500 rounded"
        href="/backoffice/dashboard"
      >
        SignIn
      </Link>
    </div>
  );
}
