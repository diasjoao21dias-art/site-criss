import { useQuery } from "@tanstack/react-query";
import { type Product } from "@shared/schema";

export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ["/api/products"],
    queryFn: async () => {
      const res = await fetch("/api/products");
      if (!res.ok) throw new Error("Failed to fetch products");
      return res.json();
    },
  });
}

export function useProduct(id: number) {
  return useQuery<Product>({
    queryKey: ["/api/products", id],
    queryFn: async () => {
      const res = await fetch(`/api/products/${id}`);
      if (res.status === 404) return null as any;
      if (!res.ok) throw new Error("Failed to fetch product");
      return res.json();
    },
  });
}
