import Image from "next/image";
import Link from "next/link";
import { Eye, ShoppingCart } from "lucide-react";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-zinc-200 transition hover:-translate-y-1 hover:shadow-luxe">
      <Link href={`/products/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-zinc-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {product.discount ? (
          <span className="absolute right-3 top-3 rounded-md bg-gold px-3 py-1 text-xs font-black text-ink">
            خصم {product.discount}%
          </span>
        ) : null}
      </Link>
      <div className="grid gap-4 p-5">
        <div>
          <p className="mb-2 text-xs font-bold text-gold">{product.category}</p>
          <h3 className="text-lg font-black">{product.name}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-600">{product.description}</p>
        </div>
        <div className="flex items-end justify-between gap-3">
          <div>
            <div className="text-lg font-black">{formatPrice(product.price)}</div>
            {product.compareAtPrice ? (
              <div className="text-sm text-zinc-400 line-through">{formatPrice(product.compareAtPrice)}</div>
            ) : null}
          </div>
          <div className="flex gap-2">
            <Link
              href={`/products/${product.slug}`}
              aria-label="عرض التفاصيل"
              className="focus-ring grid h-10 w-10 place-items-center rounded-md bg-zinc-100 text-ink transition hover:bg-zinc-200"
            >
              <Eye size={18} />
            </Link>
            <Link
              href={`/checkout/${product.slug}`}
              aria-label="اطلب الآن"
              className="focus-ring grid h-10 w-10 place-items-center rounded-md bg-ink text-white transition hover:bg-zinc-800"
            >
              <ShoppingCart size={18} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
