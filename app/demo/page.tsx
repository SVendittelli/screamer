import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";
import { sampleData } from "./sample-data";

export const dynamic = "force-dynamic";

export default function Demo() {
  return (
    <main className="min-h-screen w-screen p-4 prose prose-neutral">
      <header className="flex prose-invert">
        <Link className="text-4xl" href={"/"}>
          <FaAngleLeft />
        </Link>
        <h1>Work in Progress</h1>
      </header>
      <details>
        <summary className="text-white select-none">JSON Data</summary>
        <pre data-testid="json-data">{JSON.stringify(sampleData, null, 2)}</pre>
      </details>
    </main>
  );
}
