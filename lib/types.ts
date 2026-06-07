export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  discount?: number;
  stock: number;
  description: string;
  specs: string[];
  features: string[];
  images: string[];
  featured?: boolean;
};

export type OrderStatus =
  | "جديد"
  | "قيد المعالجة"
  | "تم التأكيد"
  | "تم الشحن"
  | "تم التسليم"
  | "ملغي";

export type Order = {
  id: string;
  customer: string;
  phone: string;
  wilaya: string;
  commune: string;
  address: string;
  product: string;
  quantity: number;
  createdAt: string;
  status: OrderStatus;
  total: number;
};
