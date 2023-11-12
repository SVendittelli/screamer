import { creepster } from "@/app/ui/fonts";
import whiteLogo from "@/public/logo-white.min.svg";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-between p-4 bg-gradient-to-b from-red-800 to-red-600">
      <header>
        <Link className="flex gap-2 prose prose-neutral prose-invert" href="/">
          <Image
            className="not-prose"
            src={whiteLogo}
            height={36}
            alt="Screamer logo"
          />
          <h1 className={clsx(creepster.className, "mb-0")}>Screamer</h1>
        </Link>
      </header>
      <main className="flex flex-col gap-2 prose prose-neutral prose-invert">
        {[
          ["Try demo", "/demo"],
          ["Sign up", ""],
          ["Log in", ""],
        ].map(([text, href]) => (
          <Link key={text} href={href}>
            <button
              className="bg-neutral-950 enabled:hover:bg-neutral-700 disabled:opacity-75 no-underline font-bold py-2 px-4 rounded-full w-full"
              disabled={href === ""}
            >
              {text}
            </button>
          </Link>
        ))}
      </main>
      <footer className="prose prose-neutral prose-invert">
        © 2023{currentYear > 2023 ? `-${currentYear}` : ""}
      </footer>
    </div>
  );
}
