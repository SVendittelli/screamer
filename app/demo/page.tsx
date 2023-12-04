import { sampleData } from "./sample-data";

export const dynamic = "force-dynamic";

export default function Demo() {
  return (
    <main className="min-h-screen w-screen p-4 prose prose-neutral bg-gradient-to-b from-red-900 via-red-600 to-red-900">
      <h1 className="prose-invert">Work in Progress</h1>
      <details>
        <summary className="text-white select-none">JSON Data</summary>
        <pre data-testid="json-data">{JSON.stringify(sampleData, null, 2)}</pre>
      </details>
    </main>
  );
}
