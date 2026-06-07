import { Save } from "lucide-react";
import { AdminShell } from "@/components/admin-shell";
import { storeSettings } from "@/lib/data";

export default function AdminSettingsPage() {
  return (
    <AdminShell title="لوحة الإعدادات">
      <form className="grid gap-4 rounded-lg border border-zinc-200 bg-porcelain p-5 md:grid-cols-2">
        <input defaultValue={storeSettings.name} placeholder="اسم المتجر" className="min-h-12 rounded-md border border-zinc-200 px-4" />
        <input defaultValue={storeSettings.logo} placeholder="الشعار" className="min-h-12 rounded-md border border-zinc-200 px-4" />
        <input defaultValue={storeSettings.primaryColor} type="color" aria-label="اللون الأساسي" className="h-12 rounded-md border border-zinc-200 px-2" />
        <input defaultValue={storeSettings.accentColor} type="color" aria-label="لون التمييز" className="h-12 rounded-md border border-zinc-200 px-2" />
        <input defaultValue={storeSettings.phones[0]} placeholder="رقم الهاتف" className="min-h-12 rounded-md border border-zinc-200 px-4" />
        <input defaultValue={storeSettings.whatsapp} placeholder="رقم واتساب" className="min-h-12 rounded-md border border-zinc-200 px-4" />
        <input defaultValue={storeSettings.email} placeholder="البريد الإلكتروني" className="min-h-12 rounded-md border border-zinc-200 px-4" />
        <input defaultValue={storeSettings.socials.instagram} placeholder="روابط التواصل الاجتماعي" className="min-h-12 rounded-md border border-zinc-200 px-4" />
        <input defaultValue={storeSettings.banners.home} placeholder="البنرات" className="min-h-12 rounded-md border border-zinc-200 px-4 md:col-span-2" />
        <textarea defaultValue={storeSettings.homeCopy.subtitle} placeholder="نصوص الصفحة الرئيسية" className="min-h-28 rounded-md border border-zinc-200 px-4 py-3 md:col-span-2" />
        <button type="button" className="flex min-h-12 items-center justify-center gap-2 rounded-md bg-ink px-4 text-sm font-black text-white md:col-span-2">
          <Save size={18} />
          حفظ الإعدادات
        </button>
      </form>
    </AdminShell>
  );
}
