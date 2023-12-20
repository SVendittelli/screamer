"use client";

import { cva, VariantProps } from "class-variance-authority";
import { FC, useRef } from "react";
import {
  SessionContextType,
  useSessionContext,
} from "supertokens-auth-react/recipe/session";
import { twMerge } from "tailwind-merge";
import { useOnClickOutside } from "usehooks-ts";
import NavItems from "@/components/NavItems";
import ViewProfile from "@/components/ViewProfile";

const sidebar = cva(
  [
    "flex flex-col justify-between",
    "bg-neutral-900",
    "border-r border-r-neutral-600",
    "text-zinc-50",
    "fixed top-0 z-20 h-full",
    "w-[300px]",
    "transition-[margin] duration-300 ease-in-out",
    "tablet:sticky tablet:top-16 tablet:z-0",
    "tablet:h-[calc(100vh-4rem)]",
  ],
  {
    variants: {
      open: {
        true: ["ml-0"],
        false: ["ml-[-300px] tablet:ml-0"],
      },
    },
  },
);

interface Props extends VariantProps<typeof sidebar> {
  className?: string;
  open: boolean;
  setOpen(open: boolean): void;
}

const Sidebar: FC<Props> = ({ className, open, setOpen }) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setOpen(false));

  const session: SessionContextType = useSessionContext();
  const isLoggedIn = !session.loading && session.doesSessionExist;

  return (
    <div ref={ref} className={twMerge(sidebar({ className, open }))}>
      <nav className="top-0 tablet:top-16 tablet:sticky">
        <NavItems />
      </nav>
      <div className="grid place-content-stretch p-4">
        {session.loading ? (
          <p>Loading...</p>
        ) : (
          <ViewProfile
            className="border-t border-t-neutral-600"
            isLoggedIn={isLoggedIn}
            name="John Smith"
            href="/"
          />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
