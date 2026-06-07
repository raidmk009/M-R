import { AdminShell } from "@/components/admin-shell";
import { customers } from "@/lib/data";

export default function AdminCustomersPage() {
  return (
    <AdminShell title="إدارة العملاء">
      <div className="grid gap-4 md:grid-cols-3">
        {customers.map((customer) => (
          <article key={customer.phone} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-black">{customer.customer}</h2>
            <p className="mt-2 text-sm text-zinc-600">{customer.phone}</p>
            <p className="mt-1 text-sm text-zinc-600">{customer.wilaya} - {customer.commune}</p>
            <p className="mt-3 text-sm leading-6 text-zinc-700">{customer.address}</p>
          </article>
        ))}
      </div>
    </AdminShell>
  );
}
