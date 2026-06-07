import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  const variants = {
    primary: "bg-ink text-white hover:bg-zinc-800",
    secondary: "bg-white text-ink ring-1 ring-zinc-200 hover:ring-gold",
    ghost: "text-ink hover:bg-white"
  };

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-11 items-center justify-center rounded-md px-5 text-sm font-bold transition ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
