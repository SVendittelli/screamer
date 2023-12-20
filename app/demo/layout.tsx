import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";
import SidebarLayout from "@/components/SidebarLayout";

export const metadata: Metadata = {
  title: "Demo",
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <SidebarLayout className="bg-black">{children}</SidebarLayout>;
};

export default Layout;
