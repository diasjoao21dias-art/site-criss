
import { type Product, type InsertProduct } from "@shared/schema";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private currentId: number;

  constructor() {
    this.products = new Map();
    this.currentId = 1;
    this.seedData();
  }

  private seedData() {
    const defaultProducts: InsertProduct[] = [
      {
        name: "Whey Protein Isolate - Chocolate",
        description: "Proteína isolada de alta pureza para recuperação muscular máxima. Sabor chocolate belga.",
        price: "R$ 199,90",
        imageUrl: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        paymentLink: "#",
        category: "Proteínas"
      },
      {
        name: "Creatina Monohidratada Pura",
        description: "Aumente sua força e explosão muscular com a creatina mais pura do mercado.",
        price: "R$ 89,90",
        imageUrl: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        paymentLink: "#",
        category: "Força"
      },
      {
        name: "Pre-Workout Ignite",
        description: "Energia explosiva e foco mental para seus treinos mais intensos.",
        price: "R$ 149,90",
        imageUrl: "https://images.unsplash.com/photo-1627483297886-49710ae1fc28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        paymentLink: "#",
        category: "Energia"
      },
      {
        name: "BCAA Energy 2:1:1",
        description: "Recuperação intra-treino com aminoácidos essenciais e eletrólitos.",
        price: "R$ 79,90",
        imageUrl: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        paymentLink: "#",
        category: "Recuperação"
      },
      {
        name: "Multivitamínico Elite",
        description: "Complexo vitamínico completo para suporte imunológico e saúde geral.",
        price: "R$ 59,90",
        imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        paymentLink: "#",
        category: "Saúde"
      },
      {
        name: "Omega 3 Gold",
        description: "Óleo de peixe ultra refinado, rico em EPA e DHA para saúde cardiovascular.",
        price: "R$ 69,90",
        imageUrl: "https://images.unsplash.com/photo-1610725664338-23c6b7696144?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        paymentLink: "#",
        category: "Saúde"
      }
    ];

    defaultProducts.forEach(product => {
      const id = this.currentId++;
      this.products.set(id, { ...product, id });
    });
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }
}

export const storage = new MemStorage();
