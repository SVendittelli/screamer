import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
