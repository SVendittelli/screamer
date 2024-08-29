import * as Avatar from "@radix-ui/react-avatar";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { FC } from "react";
import { twMerge } from "tailwind-merge";
import Button from "@/components/Button";

/**
 * Get the initials of a name.
 *
 * @param name The name to get the initials of
 * @returns The initials of the name
 */
function getInitials(name: string) {
  return name.match(/(\b\S)?/g)?.join("") ?? "";
}

const viewProfile = cva(["p-4"]);

interface ViewProfileProps extends VariantProps<typeof viewProfile> {
  className?: string;
  /** Whether the user is logged in */
  isLoggedIn: boolean;
  /** User's name */
  name: string;
  /** Link to user's profile */
  href: string;
}

const ViewProfile: FC<ViewProfileProps> = ({
  className,
  isLoggedIn,
  name,
  href,
}) => {
  if (!isLoggedIn) {
    return (
      <div className={twMerge(viewProfile({ className }))}>
        <Button className="bg-transparent" href="/auth">
          Log in
        </Button>
      </div>
    );
  }

  return (
    <div className={twMerge(viewProfile({ className }))}>
      <div className="flex gap-4 items-center">
        <Avatar.Root className="size-9 select-none">
          <Avatar.AvatarFallback className="size-full rounded-full flex items-center justify-center bg-white text-slate-950">
            {getInitials(name)}
          </Avatar.AvatarFallback>
        </Avatar.Root>
        <div className="flex flex-col">
          <span className="text-indigo-50 my-0">{name}</span>
          <Link href={href}>
            <span className="text-indigo-200 text-sm">View Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
