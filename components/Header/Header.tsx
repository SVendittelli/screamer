import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";
import { FaBars } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import Logo from "@/components/Logo";
import Icon from "../Icon";

const header = cva([
  "bg-black text-zinc-500",
  "border-b border-b-slate-600",
  "flex items-center",
  "w-full sticky z-10 px-4 shadow-sm h-16",
]);

interface HeaderProps extends VariantProps<typeof header> {
  className?: string;
  onMenuButtonClick(): void;
}

const Header: FC<HeaderProps> = ({ className, onMenuButtonClick }) => {
  return (
    <header className={twMerge(header({ className }))}>
      <Logo />
      <div className="grow"></div>
      <button className="tablet:hidden" onClick={onMenuButtonClick}>
        <Icon label="Toggle sidebar">
          <FaBars className="size-6" />
        </Icon>
      </button>
    </header>
  );
};

export default Header;
