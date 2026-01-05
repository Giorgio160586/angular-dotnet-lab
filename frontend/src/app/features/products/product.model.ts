import { z } from 'zod';

export interface ProductModel {
  name: string;
  category: string;
  price: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

export const ProductSchema = z.object({
  name: z.string(),
  category: z.string(),
  price: z.number(),
  status: z.enum(['In Stock', 'Low Stock', 'Out of Stock']),
}).strict();