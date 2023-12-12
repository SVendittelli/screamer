"use client";

import ReactSwagger from "@/components/ReactSwagger";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <section className="container bg-white">
        <ReactSwagger url={"/api/schema"} />
      </section>
    </main>
  );
}
