"use client";

import { ArrowUp, Phone, MessageCircle } from "lucide-react";
import { storeSettings } from "@/lib/data";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col gap-2">
      <a
        href={`https://wa.me/${storeSettings.whatsapp}`}
        aria-label="واتساب"
        className="focus-ring grid h-12 w-12 place-items-center rounded-md bg-green-600 text-white shadow-luxe transition hover:bg-green-700"
      >
        <MessageCircle size={21} />
      </a>
      <a
        href={`tel:${storeSettings.phones[0].replaceAll(" ", "")}`}
        aria-label="اتصال مباشر"
        className="focus-ring grid h-12 w-12 place-items-center rounded-md bg-ink text-white shadow-luxe transition hover:bg-zinc-800"
      >
        <Phone size={20} />
      </a>
      <button
        type="button"
        aria-label="الرجوع للأعلى"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="focus-ring grid h-12 w-12 place-items-center rounded-md bg-white text-ink shadow-luxe ring-1 ring-zinc-200 transition hover:ring-gold"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
