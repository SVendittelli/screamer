import Logo from "@/components/Logo";
import { sampleData } from "./sample-data";

export const dynamic = "force-dynamic";

export default function Demo() {
  return (
    <main className="min-h-screen w-screen p-4">
      <header>
        <Logo />
      </header>
      <details className="prose prose-neutral">
        <summary className="text-white select-none">JSON Data</summary>
        <pre data-testid="json-data">{JSON.stringify(sampleData, null, 2)}</pre>
      </details>
    </main>
  );
}
