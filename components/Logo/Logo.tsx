import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import Link from "next/link";
import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import { creepster } from "@/libs/fonts";
import LogoSvg from "./LogoSvg";

const logo = cva(
  ["prose", "prose-neutral", "dark:prose-invert", "flex", "gap-2"],
  {
    variants: {},
    defaultVariants: {},
  },
);

type LinkProps = Omit<Parameters<typeof Link>[0], "href">;

export interface LogoProps extends LinkProps, VariantProps<typeof logo> {}

function Logo({ className, ...props }: LogoProps): ReactElement {
  return (
    <Link className={twMerge(logo({ className }))} href="/" {...props}>
      <LogoSvg className="not-prose" height={36} width="auto" />
      <h1 className={clsx(creepster.className, "mb-0")}>Screamer</h1>
    </Link>
  );
}

export default Logo;
