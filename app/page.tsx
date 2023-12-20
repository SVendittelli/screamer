import Link from "next/link";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import { getSSRSession } from "@/libs/session";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { session } = await getSSRSession();
  const currentYear = new Date().getFullYear();

  const buttons: [string, string][] = [["Try demo", "/demo"]];

  if (session) {
    buttons.push(["Vote", "/vote"]);
    buttons.push(["Results", ""]);
  } else {
    buttons.push(["Log in", "/auth"]);
  }

  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-between p-4">
      <header>
        <Logo />
      </header>
      <main className="prose prose-neutral prose-invert flex flex-col gap-2">
        {buttons.map(([text, href]) => (
          <Button key={text} href={href} disabled={href === ""}>
            {text}
          </Button>
        ))}
      </main>
      <footer className="prose prose-neutral prose-invert flex flex-col items-center font-bold">
        <div>
          <Link
            className="no-underline"
            href="/license"
            title="Licence"
            prefetch={false}
          >
            © 2023{currentYear > 2023 ? `-${currentYear}` : ""}
          </Link>
        </div>
      </footer>
    </div>
  );
}
