"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const { refresh } = useRouter();

  return (
    <main className="min-h-screen w-screen p-4 flex flex-col items-center text-center gap-6 prose prose-neutral prose-invert bg-gradient-to-b from-red-900 via-red-600 to-red-900">
      <h1>Under Maintenance</h1>
      <p className="bg-neutral-800 bg-opacity-90 p-2 rounded-md">
        You can try to refresh the page to see if the issue is resolved.
      </p>
      <button
        className="bg-neutral-950 enabled:hover:bg-neutral-700 font-bold py-2 px-4 rounded-full"
        onClick={refresh}
      >
        Refresh
      </button>
    </main>
  );
}
