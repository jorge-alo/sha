import { SVGProps } from "react";

type IconName = "shield" | "key" | "lock" | "chart" | "checklist" | "clock" | "document";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

const paths: Record<IconName, React.ReactElement> = {
  shield: (
    <path d="M12 2l8 4v6c0 5.25-3.5 9.75-8 10-4.5-.25-8-4.75-8-10V6l8-4z" />
  ),
  key: (
    <path d="M15 7a4 4 0 10-4 4 4 4 0 004-4zm0 0l6 6-2 2-1.5-1.5L16 15l-2-2 1.5-1.5L14 10" />
  ),
  lock: (
    <path d="M6 10V7a6 6 0 1112 0v3m-14 0h16v10H4V10z" />
  ),
  chart: (
    <path d="M3 3v18h18M8 17V9m5 8V5m5 12v-6" />
  ),
  checklist: (
    <path d="M9 11l3 3L22 4M3 12v7a2 2 0 002 2h14a2 2 0 002-2v-7" />
  ),
  clock: (
    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  ),
  document: (
    <path d="M6 2h9l5 5v15H6V2zm9 0v5h5M9 13h6M9 17h6M9 9h2" />
  ),
};

export function Icon({ name, size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}