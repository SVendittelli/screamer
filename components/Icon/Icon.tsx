"use client";

import * as AccessibleIcon from "@radix-ui/react-accessible-icon";
import { FC, PropsWithChildren } from "react";

type IconProps = {
  label: string;
};

/**
 * An accessible icon.
 */
const Icon: FC<PropsWithChildren<IconProps>> = ({ label, children }) => {
  return <AccessibleIcon.Root label={label}>{children}</AccessibleIcon.Root>;
};

export default Icon;
