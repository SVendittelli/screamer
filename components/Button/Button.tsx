import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { ButtonHTMLAttributes, FC } from "react";
import { twMerge } from "tailwind-merge";

const button = cva(
  [
    "text-white",
    "no-underline",
    "w-full",
    "rounded-full",
    "bg-neutral-950",
    "px-4",
    "py-2",
    "font-bold",
    "enabled:hover:bg-neutral-700",
    "disabled:opacity-75",
  ],
  {
    variants: {},
    defaultVariants: {},
  },
);

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

/** Make sure that the `href` and `onClick` props are mutually exclusive. */
type Actions =
  | ({
      onClick?: never;
    } & Pick<Parameters<typeof Link>[0], "href">)
  | ({
      href?: never;
    } & Required<Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">>);

export type ButtonProps = Props & Actions;

const Button: FC<ButtonProps> = ({ className, children, href, ...props }) => {
  const htmlButton = (
    <button className={twMerge(button({ className }))} {...props}>
      {children}
    </button>
  );

  if (href) {
    return <Link href={href}>{htmlButton}</Link>;
  }
  return htmlButton;
};

export default Button;
