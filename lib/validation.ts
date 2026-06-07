import { z } from "zod";

export const orderSchema = z.object({
  fullName: z.string().min(3).max(80),
  phone: z.string().regex(/^[0-9 +]{9,16}$/),
  wilaya: z.string().min(2).max(60),
  commune: z.string().min(2).max(60),
  address: z.string().min(6).max(180),
  quantity: z.coerce.number().int().positive().max(99),
  productId: z.string().min(1)
});

export const productSchema = z.object({
  name: z.string().min(2).max(120),
  slug: z.string().min(2).max(140),
  price: z.coerce.number().positive(),
  compareAtPrice: z.coerce.number().positive().optional(),
  stock: z.coerce.number().int().min(0),
  description: z.string().min(10).max(2000),
  categoryId: z.string().min(1)
});
