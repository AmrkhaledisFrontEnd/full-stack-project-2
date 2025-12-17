import { prisma } from "@/prisma";
import CreateProductForm from "../../_components/CreateProductForm/ProductForm";
import { GetCategoriesDB } from "@/QueryDbCache/GetCategories";
// =============================================================================
async function page({ params }: { params: Promise<{ idProduct: number }> }) {
  const { idProduct } = await params;
  if (!idProduct) return;
  const product = await prisma.product.findUnique({
    where: {
      id: Number(idProduct),
    },
  });
  if (!product) return;
  const categories = await GetCategoriesDB()
  return (
    <main>
      <CreateProductForm product={product} categories={categories}/>
    </main>
  );
}

export default page;
