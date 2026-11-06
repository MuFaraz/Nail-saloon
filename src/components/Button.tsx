import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/config/site";

type Variant = "primary" | "outline" | "light" | "ghost-light";

type Props = {
  href?: string;
  variant?: Variant;
  size?: "md" | "sm";
  className?: string;
  children: ReactNode;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  "aria-label"?: string;
};

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  light: "btn-light",
  "ghost-light": "btn-ghost-light",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  external,
  type = "button",
  onClick,
  disabled,
  ...rest
}: Props) {
  const cls = `btn ${variantClass[variant]} ${size === "sm" ? "btn-sm" : ""} ${className}`;

  if (!href) {
    return (
      <button type={type} onClick={onClick} disabled={disabled} className={`${cls} disabled:opacity-60`} {...rest}>
        {children}
      </button>
    );
  }
  const isExternal = external ?? /^(https?:|mailto:|tel:|#)/.test(href);
  if (isExternal) {
    const newTab = /^(https?:|#)/.test(href);
    return (
      <a
        href={href}
        className={cls}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

/** Opens the external booking platform in a new tab. */
export function BookButton({
  children = "Book Now",
  ...props
}: Omit<Props, "href" | "external" | "children"> & { children?: ReactNode }) {
  return (
    <Button {...props} href={site.bookingUrl} external>
      {children}
    </Button>
  );
}
