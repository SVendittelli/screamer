import ReactSwagger from "@/components/ReactSwagger";
import { getApiDocs } from "@/lib/swagger";

export const dynamic = "force-dynamic";

export default async function Page() {
  const spec = await getApiDocs();

  return (
    <main className="flex flex-col items-center">
      <section className="bg-white container">
        <ReactSwagger spec={spec} />
      </section>
    </main>
  );
}
