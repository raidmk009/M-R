import { AdminShell } from "@/components/admin-shell";
import { orders } from "@/lib/data";
import type { OrderStatus } from "@/lib/types";

const statuses: OrderStatus[] = ["جديد", "قيد المعالجة", "تم التأكيد", "تم الشحن", "تم التسليم", "ملغي"];

export default function AdminOrdersPage() {
  return (
    <AdminShell title="إدارة الطلبات">
      <div className="overflow-x-auto rounded-lg border border-zinc-200">
        <table className="w-full min-w-[1100px] text-sm">
          <thead className="bg-ink text-white">
            <tr>
              {["رقم الطلب", "اسم العميل", "الهاتف", "الولاية", "البلدية", "العنوان", "المنتج", "الكمية", "تاريخ الطلب", "حالة الطلب"].map((heading) => (
                <th key={heading} className="p-4 text-right">{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-zinc-200">
                <td className="p-4 font-black">{order.id}</td>
                <td className="p-4">{order.customer}</td>
                <td className="p-4">{order.phone}</td>
                <td className="p-4">{order.wilaya}</td>
                <td className="p-4">{order.commune}</td>
                <td className="p-4">{order.address}</td>
                <td className="p-4">{order.product}</td>
                <td className="p-4">{order.quantity}</td>
                <td className="p-4">{order.createdAt}</td>
                <td className="p-4">
                  <select defaultValue={order.status} className="rounded-md border border-zinc-200 px-3 py-2">
                    {statuses.map((status) => <option key={status}>{status}</option>)}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
