

// We define the structure here for type safety, even if we don't use a real DB
export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  paymentLink: string;
  category: string;
}

export type InsertProduct = Omit<Product, "id">;
export type ProductResponse = Product;
