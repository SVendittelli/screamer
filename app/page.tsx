import { creepster } from "@/app/ui/fonts";
import whiteLogo from "@/public/logo-white.min.svg";
import { getSSRSession } from "@/utils/session";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FaBook, FaGithub, FaUserShield } from "react-icons/fa6";
import { UserRoleClaim } from "supertokens-node/recipe/userroles";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { session } = await getSSRSession();
  const currentYear = new Date().getFullYear();

  const buttons = [["Try demo", "/demo"]];

  let roles: string[] | undefined;
  if (session) {
    buttons.push(["Vote", "/vote"]);
    buttons.push(["Results", ""]);

    roles = await session.getClaimValue(UserRoleClaim);
  } else {
    buttons.push(["Log in", "/auth"]);
  }

  const isAdmin = roles?.includes("admin") ?? false;

  return (
    <div className="min-h-screen w-screen p-4 flex flex-col items-center justify-between">
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
        {buttons.map(([text, href]) => (
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
      <footer className="prose prose-neutral prose-invert font-bold flex flex-col items-center">
        <div className="flex gap-6 text-4xl pb-1">
          <Link href="/docs" title="Documentation">
            <FaBook />
          </Link>
          <Link href="/view-source" title="Source Code">
            <FaGithub />
          </Link>
          {isAdmin && (
            <Link href="/api/auth/dashboard" title="User Dashboard">
              <FaUserShield />
            </Link>
          )}
        </div>
        <div>© 2023{currentYear > 2023 ? `-${currentYear}` : ""}</div>
      </footer>
    </div>
  );
}
