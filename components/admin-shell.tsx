import Link from "next/link";
import type { ReactNode } from "react";
import { BarChart3, Boxes, ClipboardList, Settings, Users } from "lucide-react";

const adminNav = [
  { href: "/admin", label: "الإحصائيات", icon: BarChart3 },
  { href: "/admin/products", label: "المنتجات", icon: Boxes },
  { href: "/admin/orders", label: "الطلبات", icon: ClipboardList },
  { href: "/admin/customers", label: "العملاء", icon: Users },
  { href: "/admin/settings", label: "الإعدادات", icon: Settings }
];

export function AdminShell({ children, title }: { children: ReactNode; title: string }) {
  return (
    <section className="bg-white">
      <div className="container-page grid min-h-[calc(100svh-64px)] gap-6 py-6 lg:grid-cols-[240px_1fr]">
        <aside className="rounded-lg bg-ink p-4 text-white">
          <h2 className="mb-5 px-2 text-xl font-black text-gold">M-R Admin</h2>
          <nav className="grid gap-2">
            {adminNav.map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-bold text-zinc-200 transition hover:bg-white/10">
                <item.icon size={18} />
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <div>
          <div className="mb-6 flex items-center justify-between rounded-lg bg-porcelain p-5">
            <h1 className="text-3xl font-black">{title}</h1>
            <Link href="/admin/login" className="text-sm font-black text-gold">تسجيل الدخول</Link>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
