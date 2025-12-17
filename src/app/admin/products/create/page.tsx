import { GetCategoriesDB } from "@/QueryDbCache/GetCategories";
import CreateProductForm from "../_components/CreateProductForm/ProductForm";
// ============================================================================
async function page() {
  const categories = await GetCategoriesDB();
  return (
    <main className="w-1/2 ">
      <CreateProductForm categories={categories} />
    </main>
  );
}

export default page;
