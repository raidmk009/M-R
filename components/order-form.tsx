"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function OrderForm({ productName }: { productName: string }) {
  const router = useRouter();
  const [success, setSuccess] = useState(false);

  function submitOrder(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSuccess(true);
    window.setTimeout(() => router.push("/order-success"), 900);
  }

  return (
    <form onSubmit={submitOrder} className="grid gap-4 rounded-lg bg-white p-6 shadow-luxe ring-1 ring-zinc-200">
      <input type="hidden" name="product" value={productName} />
      {success ? (
        <div className="flex items-center gap-3 rounded-md bg-green-50 p-4 text-sm font-bold text-green-700">
          <CheckCircle2 size={20} />
          تم تسجيل طلبك بنجاح، سيتم تحويلك الآن.
        </div>
      ) : null}
      <label className="grid gap-2 text-sm font-bold">
        الاسم الكامل
        <input required minLength={3} name="fullName" className="focus-ring min-h-12 rounded-md border border-zinc-200 px-4 font-normal" />
      </label>
      <label className="grid gap-2 text-sm font-bold">
        رقم الهاتف
        <input required pattern="^[0-9 +]{9,16}$" name="phone" className="focus-ring min-h-12 rounded-md border border-zinc-200 px-4 font-normal" />
      </label>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          الولاية
          <input required name="wilaya" className="focus-ring min-h-12 rounded-md border border-zinc-200 px-4 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          البلدية
          <input required name="commune" className="focus-ring min-h-12 rounded-md border border-zinc-200 px-4 font-normal" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold">
        العنوان الكامل
        <input required minLength={6} name="address" className="focus-ring min-h-12 rounded-md border border-zinc-200 px-4 font-normal" />
      </label>
      <label className="grid gap-2 text-sm font-bold">
        الكمية
        <input required min={1} defaultValue={1} type="number" name="quantity" className="focus-ring min-h-12 rounded-md border border-zinc-200 px-4 font-normal" />
      </label>
      <button type="submit" className="focus-ring min-h-12 rounded-md bg-ink px-5 text-sm font-black text-white transition hover:bg-zinc-800">
        تأكيد الطلب
      </button>
    </form>
  );
}
