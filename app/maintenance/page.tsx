"use client";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

export default function Page() {
  const { refresh } = useRouter();

  return (
    <main className="prose prose-neutral prose-invert flex min-h-screen w-screen flex-col items-center gap-6 bg-gradient-to-b from-red-900 via-red-600 to-red-900 p-4 text-center">
      <h1>Under Maintenance</h1>
      <p className="rounded-md bg-neutral-800/90 p-2">
        You can try to refresh the page to see if the issue is resolved.
      </p>
      <Button onClick={refresh}>Refresh</Button>
    </main>
  );
}
