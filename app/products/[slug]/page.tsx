import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, ZoomIn } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { formatPrice, getProductBySlug, products } from "@/lib/data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return {
    title: product?.name ?? "منتج",
    description: product?.description
  };
}

export default async function ProductDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <section className="section-pad">
      <div className="container-page grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="grid gap-4">
          <div className="group relative aspect-square overflow-hidden rounded-lg bg-white shadow-luxe">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-md bg-white/90 text-ink">
              <ZoomIn size={20} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {product.images.map((image) => (
              <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white ring-1 ring-zinc-200">
                <Image src={image} alt={product.name} fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="self-start rounded-lg bg-white p-6 shadow-sm ring-1 ring-zinc-200 md:p-8">
          <p className="text-sm font-bold text-gold">{product.category}</p>
          <h1 className="mt-3 text-4xl font-black leading-tight">{product.name}</h1>
          <div className="mt-5 flex items-end gap-3">
            <span className="text-3xl font-black">{formatPrice(product.price)}</span>
            {product.compareAtPrice ? (
              <span className="text-lg text-zinc-400 line-through">{formatPrice(product.compareAtPrice)}</span>
            ) : null}
          </div>
          <p className="mt-6 leading-8 text-zinc-700">{product.description}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="mb-3 text-lg font-black">المواصفات</h2>
              <ul className="grid gap-2 text-sm text-zinc-700">
                {product.specs.map((spec) => (
                  <li key={spec} className="flex items-center gap-2"><Check size={16} className="text-gold" /> {spec}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-3 text-lg font-black">المميزات</h2>
              <ul className="grid gap-2 text-sm text-zinc-700">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2"><Check size={16} className="text-gold" /> {feature}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <ButtonLink href={`/checkout/${product.slug}`}>طلب مباشر</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
