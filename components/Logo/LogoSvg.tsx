import React, { SVGAttributes } from "react";

type Props = Pick<
  SVGAttributes<SVGSVGElement>,
  "height" | "width" | "className"
>;

function LogoSvg({ height, width, className }: Props) {
  return (
    <svg
      height={height}
      width={width}
      className={className}
      viewBox="0 0 300 420"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-black dark:fill-white"
        strokeWidth="0"
        d="M150 30
           Q165 68 250 180
           A128 128 0 1 1 50 180
           Q135 68 150 30z"
      />
    </svg>
  );
}

export default LogoSvg;
