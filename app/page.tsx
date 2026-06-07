import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { ProductCard } from "@/components/product-card";
import { products, storeSettings } from "@/lib/data";

const benefits = [
  { icon: Sparkles, title: "اختيار فاخر", text: "منتجات منتقاة بجودة عالية وتفاصيل واضحة قبل الشراء." },
  { icon: Truck, title: "توصيل موثوق", text: "متابعة الطلب من لحظة التسجيل إلى التسليم." },
  { icon: ShieldCheck, title: "طلب آمن", text: "نماذج محمية وتحقق من البيانات قبل إرسال الطلب." }
];

const testimonials = [
  "التجربة كانت سريعة والمنتج وصل كما هو موضح.",
  "أعجبني أن نموذج الطلب مختصر وواضح على الهاتف.",
  "خدمة التواصل ممتازة والتصميم يعطي ثقة من أول زيارة."
];

const faqs = [
  ["كيف أطلب المنتج؟", "اختر المنتج، اضغط اطلب الآن، ثم أدخل بياناتك الأساسية فقط."],
  ["هل يوجد دفع إلكتروني؟", "يمكن إضافة بوابات الدفع لاحقاً، والنسخة الحالية تدعم الطلب المباشر."],
  ["هل لوحة الإدارة محمية؟", "نعم، تم تجهيز مسار دخول وحماية لصفحات الإدارة مع قابلية ربطها بنظام جلسات إنتاجي."]
];

export default function HomePage() {
  const featured = products.filter((product) => product.featured);

  return (
    <>
      <section className="relative min-h-[calc(100svh-64px)] overflow-hidden bg-ink text-white">
        <Image
          src={storeSettings.banners.home}
          alt="M-R"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-ink via-ink/70 to-transparent" />
        <div className="container-page relative flex min-h-[calc(100svh-64px)] items-center py-16">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-bold text-gold">متجر إلكتروني فاخر</p>
            <h1 className="text-6xl font-black leading-tight md:text-8xl">{storeSettings.homeCopy.headline}</h1>
            <p className="mt-6 max-w-xl text-lg leading-9 text-zinc-100">{storeSettings.homeCopy.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/products">{storeSettings.homeCopy.cta}</ButtonLink>
              <ButtonLink href="#featured" variant="secondary">المنتجات المميزة</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className="section-pad">
        <div className="container-page">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-gold">اختيارات M-R</p>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">منتجات مميزة</h2>
            </div>
            <Link href="/products" className="text-sm font-black text-ink underline decoration-gold decoration-2 underline-offset-4">
              عرض الكل
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-5 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-lg border border-zinc-200 p-6">
              <benefit.icon className="mb-5 text-gold" size={30} />
              <h3 className="mb-3 text-xl font-black">{benefit.title}</h3>
              <p className="text-sm leading-7 text-zinc-600">{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <h2 className="mb-8 text-3xl font-black">آراء العملاء</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((text) => (
              <figure key={text} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-zinc-200">
                <CheckCircle2 className="mb-4 text-gold" size={24} />
                <blockquote className="text-sm leading-7 text-zinc-700">"{text}"</blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl">
          <h2 className="mb-8 text-3xl font-black">الأسئلة الشائعة</h2>
          <div className="grid gap-3">
            {faqs.map(([question, answer]) => (
              <details key={question} className="rounded-lg border border-zinc-200 bg-porcelain p-5">
                <summary className="cursor-pointer font-black">{question}</summary>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
