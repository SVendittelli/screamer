import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";
import {
  FaBook,
  FaGithub,
  FaHouse,
  FaRoad,
  FaUserShield,
} from "react-icons/fa6";
import { SiSwagger } from "react-icons/si";
import { useClaimValue } from "supertokens-auth-react/recipe/session";
import { UserRoleClaim } from "supertokens-auth-react/recipe/userroles";
import { twMerge } from "tailwind-merge";
import NavItem, { NavItemProps } from "@/components/NavItems/NavItem";

const appNavItems: NavItemProps[] = [
  {
    label: "Home",
    href: "/",
    icon: <FaHouse className="size-6" />,
  },
];

const otherNavItems: NavItemProps[] = [
  {
    label: "Roadmap",
    href: "/roadmap",
    icon: <FaRoad className="size-6" />,
    prefetch: false,
  },
  {
    label: "Documentation",
    href: "/docs",
    icon: <FaBook className="size-6" />,
    prefetch: false,
  },
  {
    label: "View Source",
    href: "/view-source",
    icon: <FaGithub className="size-6" />,
    prefetch: false,
  },
  {
    label: "Open API Specification",
    href: "/swagger",
    icon: <SiSwagger className="size-6" />,
  },
];

const navItems = cva(["py-2", "flex flex-col gap-2"]);

interface NavItemsProps extends VariantProps<typeof navItems> {
  className?: string;
}

const NavItems: FC<NavItemsProps> = ({ className }) => {
  const roles = useClaimValue(UserRoleClaim);
  const isAdmin = roles.loading
    ? false
    : roles.value?.includes("admin") ?? false;

  const adminNavItems: NavItemProps[] = [];
  if (isAdmin) {
    adminNavItems.push({
      label: "User Dashboard",
      href: "/api/auth/dashboard",
      icon: <FaUserShield className="size-6" />,
    });
  }

  return (
    <ul className={twMerge(navItems({ className }))}>
      {appNavItems.map((item) => (
        <NavItem key={item.label} {...item} />
      ))}
      <div className="mx-4 border-b border-b-neutral-600"></div>
      {[...otherNavItems, ...adminNavItems].map((item) => (
        <NavItem key={item.label} {...item} />
      ))}
    </ul>
  );
};

export default NavItems;
