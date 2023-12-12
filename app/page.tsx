import Link from "next/link";
import { FaBook, FaGithub, FaUserShield } from "react-icons/fa6";
import { SiSwagger } from "react-icons/si";
import { UserRoleClaim } from "supertokens-node/recipe/userroles";
import Logo from "@/components/Logo";
import { getSSRSession } from "@/libs/session";

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
    <div className="flex min-h-screen w-screen flex-col items-center justify-between p-4">
      <header>
        <Logo />
      </header>
      <main className="prose prose-neutral prose-invert flex flex-col gap-2">
        {buttons.map(([text, href]) => (
          <Link key={text} href={href}>
            <button
              className="w-full rounded-full bg-neutral-950 px-4 py-2 font-bold no-underline enabled:hover:bg-neutral-700 disabled:opacity-75"
              disabled={href === ""}
            >
              {text}
            </button>
          </Link>
        ))}
      </main>
      <footer className="prose prose-neutral prose-invert flex flex-col items-center font-bold">
        <div className="flex gap-6 pb-1 text-4xl">
          <Link href="/docs" title="Documentation" prefetch={false}>
            <FaBook />
          </Link>
          <Link href="/view-source" title="Source Code" prefetch={false}>
            <FaGithub />
          </Link>
          <Link href="/swagger" title="Open API Specification">
            <SiSwagger />
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
