import { Plus, Pencil, Trash2, Upload } from "lucide-react";
import { AdminShell } from "@/components/admin-shell";
import { categories, formatPrice, products } from "@/lib/data";

export default function AdminProductsPage() {
  return (
    <AdminShell title="إدارة المنتجات">
      <div className="grid gap-6">
        <form className="grid gap-4 rounded-lg border border-zinc-200 bg-porcelain p-5 md:grid-cols-2">
          <input placeholder="اسم المنتج" className="min-h-12 rounded-md border border-zinc-200 px-4" />
          <select className="min-h-12 rounded-md border border-zinc-200 px-4">
            {categories.filter((category) => category !== "الكل").map((category) => <option key={category}>{category}</option>)}
          </select>
          <input type="number" placeholder="السعر" className="min-h-12 rounded-md border border-zinc-200 px-4" />
          <input type="number" placeholder="المخزون" className="min-h-12 rounded-md border border-zinc-200 px-4" />
          <textarea placeholder="الوصف" className="min-h-28 rounded-md border border-zinc-200 px-4 py-3 md:col-span-2" />
          <label className="flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-gold bg-white px-4 text-sm font-black">
            <Upload size={18} />
            رفع عدة صور
            <input type="file" multiple accept="image/*" className="sr-only" />
          </label>
          <button type="button" className="flex min-h-12 items-center justify-center gap-2 rounded-md bg-ink px-4 text-sm font-black text-white">
            <Plus size={18} />
            إضافة منتج
          </button>
        </form>
        <div className="overflow-x-auto rounded-lg border border-zinc-200">
          <table className="w-full min-w-[760px] text-sm">
            <thead className="bg-ink text-white">
              <tr>
                <th className="p-4 text-right">المنتج</th>
                <th className="p-4 text-right">التصنيف</th>
                <th className="p-4 text-right">السعر</th>
                <th className="p-4 text-right">المخزون</th>
                <th className="p-4 text-right">إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-t border-zinc-200">
                  <td className="p-4 font-bold">{product.name}</td>
                  <td className="p-4">{product.category}</td>
                  <td className="p-4">{formatPrice(product.price)}</td>
                  <td className="p-4">{product.stock}</td>
                  <td className="flex gap-2 p-4">
                    <button aria-label="تعديل" className="grid h-9 w-9 place-items-center rounded-md bg-zinc-100"><Pencil size={16} /></button>
                    <button aria-label="حذف" className="grid h-9 w-9 place-items-center rounded-md bg-red-50 text-red-600"><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}
