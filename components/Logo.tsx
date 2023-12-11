import { creepster } from "@/libs/fonts";
import whiteLogo from "@/public/logo-white.min.svg";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link className="flex gap-2 prose prose-neutral prose-invert" href="/">
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
