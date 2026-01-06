import { z } from 'zod';

export interface ProductModel {
  id: number;
  name: string;
  category: string;
  price: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock' | null ;
}

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  category: z.string(),
  price: z.number(),
  status: z.enum(['In Stock', 'Low Stock', 'Out of Stock']),
}).strict();