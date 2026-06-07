import Link from "next/link";
import { Menu, ShoppingBag } from "lucide-react";
import { storeSettings } from "@/lib/data";

const navItems = [
  { href: "/", label: "الرئيسية" },
  { href: "/products", label: "المنتجات" },
  { href: "/admin", label: "لوحة الإدارة" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-porcelain/90 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 font-black tracking-normal">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-ink text-sm text-gold shadow-luxe">
            {storeSettings.logo}
          </span>
          <span className="text-xl">{storeSettings.name}</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-bold text-zinc-700 transition hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/products"
            aria-label="المنتجات"
            className="focus-ring grid h-10 w-10 place-items-center rounded-md bg-white text-ink ring-1 ring-zinc-200 transition hover:ring-gold"
          >
            <ShoppingBag size={18} />
          </Link>
          <details className="relative md:hidden">
            <summary
              aria-label="القائمة"
              className="focus-ring grid h-10 w-10 cursor-pointer list-none place-items-center rounded-md bg-white text-ink ring-1 ring-zinc-200"
            >
              <Menu size={18} />
            </summary>
            <div className="absolute left-0 top-12 grid w-44 gap-1 rounded-lg bg-white p-2 text-sm font-bold shadow-luxe ring-1 ring-zinc-200">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-md px-3 py-3 text-zinc-700 hover:bg-porcelain hover:text-ink">
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
