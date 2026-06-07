import { Search, SlidersHorizontal } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { categories, products } from "@/lib/data";

export const metadata = {
  title: "المنتجات",
  description: "تصفح منتجات M-R مع البحث والفلترة والترتيب."
};

export default async function ProductsPage({
  searchParams
}: {
  searchParams: Promise<{ q?: string; category?: string; sort?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams.q?.trim() ?? "";
  const selectedCategory = resolvedSearchParams.category ?? "الكل";
  const sort = resolvedSearchParams.sort ?? "featured";

  const filtered = products
    .filter((product) => (selectedCategory === "الكل" ? true : product.category === selectedCategory))
    .filter((product) => product.name.includes(query) || product.description.includes(query))
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    });

  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="mb-8">
          <p className="text-sm font-bold text-gold">كل المنتجات</p>
          <h1 className="mt-2 text-4xl font-black">تسوق منتجات M-R</h1>
        </div>
        <form className="mb-8 grid gap-3 rounded-lg bg-white p-4 shadow-sm ring-1 ring-zinc-200 md:grid-cols-[1fr_220px_220px]">
          <label className="flex min-h-12 items-center gap-2 rounded-md bg-porcelain px-4">
            <Search size={18} className="text-zinc-500" />
            <input
              name="q"
              defaultValue={query}
              placeholder="ابحث عن منتج"
              className="w-full bg-transparent text-sm outline-none"
            />
          </label>
          <label className="flex min-h-12 items-center gap-2 rounded-md bg-porcelain px-4">
            <SlidersHorizontal size={18} className="text-zinc-500" />
            <select name="category" defaultValue={selectedCategory} className="w-full bg-transparent text-sm outline-none">
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </label>
          <select name="sort" defaultValue={sort} className="min-h-12 rounded-md bg-porcelain px-4 text-sm outline-none">
            <option value="featured">الأكثر تميزاً</option>
            <option value="price-asc">السعر من الأقل</option>
            <option value="price-desc">السعر من الأعلى</option>
          </select>
        </form>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
