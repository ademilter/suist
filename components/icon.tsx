import { ReactNode, SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
  icon: keyof typeof ICON_NAMES;
};

export default function Icon({ size = 32, icon, ...props }: IconProps) {
  const children: ReactNode = PATHS[icon];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      {...props}
    >
      {children}
    </svg>
  );
}

export enum ICON_NAMES {
  test = "test",
}

const PATHS = {
  [ICON_NAMES.test]: (
    <>
      <circle opacity={0.1} cx={16} cy={16} r={9} fill="currentColor" />
      <path
        d="M30 16H2"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
};
