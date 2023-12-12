import Link from "next/link";
import { redirect } from "next/navigation";
import { FaAngleLeft } from "react-icons/fa6";
import { getSSRSession } from "@/libs/session";
import { SessionAuthWrapper } from "./SessionAuthWrapper";
import { TryRefresh } from "./TryRefresh";

export default async function VotePage() {
  const { session, hasToken, hasInvalidClaims } = await getSSRSession();

  if (!session) {
    if (!hasToken) {
      return redirect("/auth");
    }

    if (hasInvalidClaims) {
      return <SessionAuthWrapper />;
    } else {
      return <TryRefresh />;
    }
  }

  return (
    <SessionAuthWrapper>
      <main className="prose prose-neutral min-h-screen w-screen p-4">
        <header className="prose-invert flex">
          <Link className="text-4xl" href={"/"}>
            <FaAngleLeft />
          </Link>
          <h1>Work in Progress</h1>
        </header>
        <pre>Your user id is: {session.getUserId()}</pre>
      </main>
    </SessionAuthWrapper>
  );
}
