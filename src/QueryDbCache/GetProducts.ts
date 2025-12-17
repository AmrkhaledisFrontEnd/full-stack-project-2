import { Cache } from "@/Cache";
import { prisma } from "../prisma";
// ================================================================
export const GetProducts = Cache(
  async () => {
    const products = await prisma.product.findMany();
    return products;
  },
  ["getProducts"],
  { revalidate: 3600 }
);
