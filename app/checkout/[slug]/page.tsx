import Image from "next/image";
import { notFound } from "next/navigation";
import { OrderForm } from "@/components/order-form";
import { formatPrice, getProductBySlug } from "@/lib/data";

export default async function CheckoutPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <section className="section-pad">
      <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="self-start rounded-lg bg-ink p-5 text-white">
          <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-lg bg-zinc-900">
            <Image src={product.images[0]} alt={product.name} fill sizes="50vw" className="object-cover" />
          </div>
          <p className="text-sm text-gold">{product.category}</p>
          <h1 className="mt-2 text-3xl font-black">{product.name}</h1>
          <p className="mt-3 text-2xl font-black text-gold">{formatPrice(product.price)}</p>
        </aside>
        <div>
          <p className="text-sm font-bold text-gold">طلب سريع</p>
          <h2 className="mb-6 mt-2 text-4xl font-black">أدخل بيانات التوصيل</h2>
          <OrderForm productName={product.name} />
        </div>
      </div>
    </section>
  );
}
