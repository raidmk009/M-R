import Link from "next/link";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { storeSettings } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="mb-4 text-3xl font-black text-gold">{storeSettings.name}</div>
          <p className="max-w-md text-sm leading-7 text-zinc-300">
            متجر إلكتروني مصمم لتجربة طلب سريعة وواضحة، مع منتجات مختارة وخدمة متابعة احترافية.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-black text-gold">روابط مهمة</h3>
          <div className="grid gap-3 text-sm text-zinc-300">
            <Link href="/products">كل المنتجات</Link>
            <Link href="/admin/login">دخول الإدارة</Link>
            <Link href="/order-success">حالة الطلب</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-black text-gold">تواصل معنا</h3>
          <div className="grid gap-3 text-sm text-zinc-300">
            <span className="flex items-center gap-2"><Phone size={16} /> {storeSettings.phones[0]}</span>
            <span className="flex items-center gap-2"><Mail size={16} /> {storeSettings.email}</span>
            <span className="flex items-center gap-3 pt-2 text-white">
              <Facebook size={18} />
              <Instagram size={18} />
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-zinc-400">
        © 2026 M-R. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
