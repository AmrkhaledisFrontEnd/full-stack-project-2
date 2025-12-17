import { Cache } from "@/Cache";
import { prisma } from "@/prisma";
export const GetCategoriesDB = Cache(
  async () => {
    const categories = await prisma.category.findMany({
      include: {
        products: true,
      },
      orderBy:{
        createdAt:"desc"
      }
    });
    return categories;
  },
  ["getCategories"],
  { revalidate: 3600 }
);
