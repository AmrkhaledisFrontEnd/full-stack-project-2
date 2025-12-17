import { prisma } from "@/prisma";
import ProductDetails from "./_components/ProductDetails/ProductDetails";
import SimilareProducts from "./_components/SimilareProducts";
// =======================================================================================
async function page({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  if (!id) return;
  const product = await prisma.product.findUnique({
    where: {
      id: Number(id),
    },
  });
  if (!product) return;
  return (
    <main className="section-space ">
      <div className="container-css flex flex-col gap-20">
        <ProductDetails product={product} />
        <SimilareProducts categoryId={product.categoryId} />
      </div>
    </main>
  );
}

export default page;
