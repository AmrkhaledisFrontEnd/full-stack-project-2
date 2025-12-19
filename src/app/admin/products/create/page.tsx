export const dynamic = "force-dynamic";

import { GetCategoriesDB } from "@/QueryDbCache/GetCategories";
import CreateProductForm from "../_components/CreateProductForm/ProductForm";
// ============================================================================
async function page() {
  const categories = await GetCategoriesDB();
  return (
    <main className="lg:w-1/2 w-full ">
      <CreateProductForm categories={categories} />
    </main>
  );
}

export default page;
