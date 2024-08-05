import type { ComponentPropsWithoutRef } from "react";

import { Link } from "@remix-run/react";

import { cn } from "~/utils/cn";

interface IArrowLinkProps extends ComponentPropsWithoutRef<typeof Link> {
  children: React.ReactNode;
}

export function ArrowLink({ children, className, ...props }: IArrowLinkProps) {
  return (
    <Link
      {...props}
      className={cn("inline-flex items-center gap-2", className)}
    >
      {children}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.3725 1.84532C15.3725 1.29303 14.9247 0.845319 14.3725 0.845319L5.37245 0.845319C4.82017 0.845319 4.37245 1.29303 4.37245 1.84532C4.37245 2.3976 4.82017 2.84532 5.37245 2.84532L13.3725 2.84532L13.3725 10.8453C13.3725 11.3976 13.8202 11.8453 14.3725 11.8453C14.9247 11.8453 15.3725 11.3976 15.3725 10.8453L15.3725 1.84532ZM2.35164 15.2803L15.0796 2.55243L13.6653 1.13821L0.937424 13.8661L2.35164 15.2803Z"
          fill="#FAF7FF"
        />
      </svg>
    </Link>
  );
}
