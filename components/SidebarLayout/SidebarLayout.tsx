"use client";

import { cva, VariantProps } from "class-variance-authority";
import { FC, PropsWithChildren, useState } from "react";
import { twMerge } from "tailwind-merge";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const sidebarLayout = cva([
  "grid grid-rows-header",
  "min-h-screen",
  "transition-[grid-template-columns] duration-300 ease-in-out",
]);

interface SidebarLayoutProps extends VariantProps<typeof sidebarLayout> {
  className?: string;
}

const SidebarLayout: FC<PropsWithChildren<SidebarLayoutProps>> = ({
  className,
  children,
}) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className={twMerge(sidebarLayout({ className }))}>
      <Header onMenuButtonClick={() => setShowSidebar((prev) => !prev)} />
      <div className={"grid grid-cols-1 tablet:grid-cols-sidebar"}>
        <Sidebar open={showSidebar} setOpen={setShowSidebar} />
        {children}
      </div>
    </div>
  );
};

export default SidebarLayout;
