
import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// We define the structure here for type safety, even if we don't use a real DB
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: text("price").notNull(), // String to allow formatting like "R$ 99,90"
  imageUrl: text("image_url").notNull(),
  paymentLink: text("payment_link").notNull(),
  category: text("category").notNull(),
});

export const insertProductSchema = createInsertSchema(products).omit({ id: true });

export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;

// For the frontend to know the shape of data
export type ProductResponse = Product;
