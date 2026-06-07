import { AdminShell } from "@/components/admin-shell";
import { customers, orders, products, formatPrice } from "@/lib/data";

export default function AdminDashboardPage() {
  const totalSales = orders.reduce((sum, order) => sum + order.total, 0);
  const stats = [
    ["عدد الطلبات", orders.length],
    ["عدد المنتجات", products.length],
    ["عدد العملاء", customers.length],
    ["إجمالي المبيعات", formatPrice(totalSales)]
  ];

  return (
    <AdminShell title="الإحصائيات">
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([label, value]) => (
          <div key={label} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-bold text-zinc-500">{label}</p>
            <p className="mt-3 text-2xl font-black">{value}</p>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
