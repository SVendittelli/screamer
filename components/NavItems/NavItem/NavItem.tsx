import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { ComponentPropsWithoutRef, FC } from "react";
import { twMerge } from "tailwind-merge";

const navItem = cva([
  "text-neutral-100 hover:bg-neutral-600",
  "flex gap-4 items-center",
  "transition-colors duration-300",
  "rounded-md p-2 mx-2",
]);

export interface NavItemProps
  extends ComponentPropsWithoutRef<typeof Link>,
    VariantProps<typeof navItem> {
  className?: string;
  label: string;
  icon: React.ReactNode;
}

const NavItem: FC<NavItemProps> = ({ className, label, icon, ...props }) => {
  return (
    <Link {...props}>
      <li className={twMerge(navItem({ className }))}>
        {icon} {label}
      </li>
    </Link>
  );
};

export default NavItem;
