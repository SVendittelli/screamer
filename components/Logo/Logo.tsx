import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import { creepster } from "@/libs/fonts";
import whiteLogo from "@/public/logo-white.min.svg";

const logo = cva(["prose", "prose-neutral", "prose-invert", "flex", "gap-2"]);

type LinkProps = Omit<Parameters<typeof Link>[0], "href">;

export interface LogoProps extends LinkProps, VariantProps<typeof logo> {}

function Logo({ className, ...props }: LogoProps): ReactElement {
  return (
    <Link className={twMerge(logo({ className }))} href="/" {...props}>
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
