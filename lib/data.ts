import type { Order, Product } from "@/lib/types";

export const storeSettings = {
  name: "M-R",
  logo: "M-R",
  primaryColor: "#09090B",
  accentColor: "#C9A44C",
  phones: ["0550 00 00 00", "021 00 00 00"],
  whatsapp: "213550000000",
  email: "contact@mr-store.dz",
  socials: {
    facebook: "https://facebook.com/mr-store",
    instagram: "https://instagram.com/mr-store",
    tiktok: "https://tiktok.com/@mr-store"
  },
  banners: {
    home: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1800&q=85"
  },
  homeCopy: {
    headline: "M-R",
    subtitle: "منتجات مختارة بعناية، تجربة شراء سريعة، وتوصيل موثوق إلى باب منزلك.",
    cta: "اطلب الآن"
  }
};

export const categories = ["الكل", "إلكترونيات", "إكسسوارات", "منزل", "عناية"];

export const products: Product[] = [
  {
    id: "p-1001",
    slug: "luxe-smart-watch",
    name: "ساعة M-R الذكية",
    category: "إلكترونيات",
    price: 8900,
    compareAtPrice: 11900,
    discount: 25,
    stock: 34,
    description: "ساعة ذكية بتصميم فاخر، شاشة واضحة، تتبع صحي، وبطارية تدوم طويلاً للاستخدام اليومي.",
    specs: ["شاشة AMOLED", "مقاومة للماء", "بطارية حتى 7 أيام", "ضمان 12 شهر"],
    features: ["تتبع نبض القلب", "تنبيهات الهاتف", "تصميم خفيف", "أوضاع رياضية متعددة"],
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1200&q=85"
    ],
    featured: true
  },
  {
    id: "p-1002",
    slug: "premium-headphones",
    name: "سماعات عزل الضجيج",
    category: "إلكترونيات",
    price: 7600,
    compareAtPrice: 9300,
    discount: 18,
    stock: 21,
    description: "سماعات لاسلكية بصوت غني وعزل ضجيج فعال، مناسبة للعمل والسفر والمكالمات اليومية.",
    specs: ["Bluetooth 5.3", "شحن سريع", "عزل ضجيج نشط", "حقيبة حماية"],
    features: ["صوت عميق", "ميكروفون واضح", "راحة لفترات طويلة", "تحكم باللمس"],
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=85"
    ],
    featured: true
  },
  {
    id: "p-1003",
    slug: "leather-crossbody",
    name: "حقيبة جلد يومية",
    category: "إكسسوارات",
    price: 5400,
    stock: 18,
    description: "حقيبة عملية بخامة جلدية أنيقة، تناسب الاستخدام اليومي وتمنح الإطلالة لمسة راقية.",
    specs: ["جلد صناعي ممتاز", "حزام قابل للتعديل", "جيوب داخلية", "ألوان هادئة"],
    features: ["تصميم مدمج", "خياطة متينة", "مساحة منظمة", "مناسبة للهدايا"],
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?auto=format&fit=crop&w=1200&q=85"
    ],
    featured: true
  },
  {
    id: "p-1004",
    slug: "ceramic-aroma-diffuser",
    name: "موزع عطور سيراميك",
    category: "منزل",
    price: 3900,
    compareAtPrice: 4600,
    discount: 15,
    stock: 42,
    description: "موزع عطور هادئ بلمسة ديكور فاخرة، يملأ المساحة برائحة لطيفة وإضاءة ناعمة.",
    specs: ["سعة 300ml", "إضاءة LED", "إيقاف تلقائي", "تشغيل هادئ"],
    features: ["يناسب غرف النوم", "تصميم راق", "سهل التنظيف", "استهلاك منخفض"],
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1602874801006-e26f24f972e8?auto=format&fit=crop&w=1200&q=85"
    ]
  },
  {
    id: "p-1005",
    slug: "care-gift-set",
    name: "مجموعة عناية فاخرة",
    category: "عناية",
    price: 6200,
    stock: 25,
    description: "مجموعة عناية يومية بتغليف أنيق ومكونات لطيفة، مناسبة كهدية أو للاستخدام الشخصي.",
    specs: ["4 قطع", "تغليف هدايا", "روائح ناعمة", "مناسبة لكل أنواع البشرة"],
    features: ["إحساس فاخر", "ترطيب يومي", "حجم عملي", "جاهزة للإهداء"],
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=85"
    ],
    featured: true
  },
  {
    id: "p-1006",
    slug: "minimal-desk-lamp",
    name: "مصباح مكتب ذكي",
    category: "منزل",
    price: 4800,
    compareAtPrice: 5900,
    discount: 19,
    stock: 16,
    description: "مصباح مكتب بإضاءة قابلة للتعديل وتصميم بسيط يناسب غرف العمل والدراسة.",
    specs: ["3 درجات إضاءة", "USB-C", "ذراع مرن", "استهلاك اقتصادي"],
    features: ["مريح للعين", "قاعدة ثابتة", "شكل عصري", "تحكم سريع"],
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=85"
    ]
  }
];

export const orders: Order[] = [
  {
    id: "MR-2401",
    customer: "أحمد بن سالم",
    phone: "0551 22 33 44",
    wilaya: "الجزائر",
    commune: "باب الزوار",
    address: "حي الأعمال، عمارة 12",
    product: "ساعة M-R الذكية",
    quantity: 1,
    createdAt: "2026-06-01",
    status: "جديد",
    total: 8900
  },
  {
    id: "MR-2402",
    customer: "مريم منصوري",
    phone: "0660 11 22 33",
    wilaya: "وهران",
    commune: "السانية",
    address: "شارع الحرية رقم 8",
    product: "سماعات عزل الضجيج",
    quantity: 2,
    createdAt: "2026-06-02",
    status: "تم التأكيد",
    total: 15200
  },
  {
    id: "MR-2403",
    customer: "ليلى حمدان",
    phone: "0770 44 55 66",
    wilaya: "سطيف",
    commune: "العلمة",
    address: "طريق قجال، محل 4",
    product: "مجموعة عناية فاخرة",
    quantity: 1,
    createdAt: "2026-06-04",
    status: "تم الشحن",
    total: 6200
  }
];

export const customers = Array.from(
  new Map(orders.map((order) => [order.phone, order])).values()
);

export function formatPrice(price: number) {
  return new Intl.NumberFormat("ar-DZ", {
    style: "currency",
    currency: "DZD",
    maximumFractionDigits: 0
  }).format(price);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
