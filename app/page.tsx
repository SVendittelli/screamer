import Link from "next/link";

const buttonClasses =
  "bg-neutral-950 hover:bg-neutral-700 no-underline font-bold py-2 px-4 rounded-full mb-3";

export default function Home() {
  return (
    <main className="prose prose-neutral prose-invert flex min-h-screen flex-col items-center justify-center bg-red-700">
      <h1>Screamer</h1>
      <Link href="/demo" role="button" className={buttonClasses}>
        Demo
      </Link>
      <button className={buttonClasses}>Sign Up</button>
      <button className={buttonClasses}>Login</button>
    </main>
  );
}
