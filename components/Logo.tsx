import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { creepster } from "@/libs/fonts";
import whiteLogo from "@/public/logo-white.min.svg";

function Logo() {
  return (
    <Link className="prose prose-neutral prose-invert flex gap-2" href="/">
      <Image
        className="not-prose"
        src={whiteLogo}
        height={36}
        alt="Screamer logo"
      />
      <h1 className={clsx(creepster.className, "mb-0")}>Screamer</h1>
    </Link>
  );
}

export default Logo;
