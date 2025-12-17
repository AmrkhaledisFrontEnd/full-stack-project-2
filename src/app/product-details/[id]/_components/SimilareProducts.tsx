import ProductsDesign from "@/components/ProductsDsign/ProductsDesign";
import { prisma } from "@/prisma";
async function SimilareProducts({ categoryId }: { categoryId: string }) {
  const category = await prisma.category.findUnique({
    where: {
      id: categoryId,
    },
    include: {
      products: true,
    },
  });
  if (!category) return;
  return (
    <div className="flex flex-col gap-3">
      <h2 className="sm:text-3xl text-2xl font-bold">Similare Products</h2>
      <ProductsDesign products={category.products} />
    </div>
  );
}

export default SimilareProducts;
