import { creepster } from "@/app/ui/fonts";
import whiteLogo from "@/public/logo-white.min.svg";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const buttonClasses =
  "bg-neutral-950 hover:bg-neutral-700 no-underline font-bold py-2 px-4 rounded-full text-center";

export default function Home() {
  return (
    <main className="prose prose-neutral prose-invert min-h-screen flex flex-col gap-10 items-center justify-center bg-gradient-to-b from-red-800 to-red-600">
      <header className="flex gap-2">
        <Image className="not-prose" src={whiteLogo} height={36} alt="" />
        <h1 className={clsx(creepster.className, "mb-0")}>Screamer</h1>
      </header>
      <nav className="flex flex-col gap-2">
        <Link href="/demo" role="button" className={buttonClasses}>
          Try demo
        </Link>
        <button className={buttonClasses}>Sign up</button>
        <button className={buttonClasses}>Log in</button>
      </nav>
    </main>
  );
}
