import { Lock } from "lucide-react";
import { loginAction } from "@/app/admin/login/actions";

export default async function AdminLoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const resolvedSearchParams = await searchParams;

  return (
    <section className="grid min-h-[70svh] place-items-center px-4 py-16">
      <form action={loginAction} className="w-full max-w-md rounded-lg bg-white p-7 shadow-luxe ring-1 ring-zinc-200">
        <div className="mb-6 grid h-14 w-14 place-items-center rounded-md bg-ink text-gold">
          <Lock size={24} />
        </div>
        <h1 className="text-3xl font-black">دخول لوحة الإدارة</h1>
        <p className="mt-3 text-sm leading-7 text-zinc-600">استخدم بيانات الإدارة أو متغيرات البيئة لتأمين لوحة التحكم.</p>
        {resolvedSearchParams.error ? (
          <p className="mt-4 rounded-md bg-red-50 p-3 text-sm font-bold text-red-700">بيانات الدخول غير صحيحة.</p>
        ) : null}
        <div className="mt-6 grid gap-4">
          <input required name="email" type="email" placeholder="البريد الإلكتروني" className="focus-ring min-h-12 rounded-md border border-zinc-200 px-4" />
          <input required name="password" type="password" placeholder="كلمة المرور" className="focus-ring min-h-12 rounded-md border border-zinc-200 px-4" />
          <button className="focus-ring min-h-12 rounded-md bg-ink px-4 text-sm font-black text-white">تسجيل الدخول</button>
        </div>
      </form>
    </section>
  );
}
