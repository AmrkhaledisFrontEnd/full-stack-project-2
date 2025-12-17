import { GetCategoriesDB } from "@/QueryDbCache/GetCategories";
import ProductsDesign from "../ProductsDsign/ProductsDesign";
import { CategoryDB } from "@/type";
// ===========================================================================
async function ProductsSection() {
  const categories = await GetCategoriesDB();
  return (
    <section id="c" className="py-20">
      <div className="container-css flex flex-col gap-10">
        {categories.length > 0
          ? categories.map((cat: CategoryDB) => (
              <div key={cat.id} className="flex flex-col gap-4">
                <h1 className="sm:text-3xl text-2xl font-bold">
                  {cat.name.charAt(0).toUpperCase() +
                    cat.name.slice(1).toLocaleLowerCase()}
                </h1>
                <ProductsDesign products={cat.products} />
              </div>
            ))
          : ""}
      </div>
    </section>
  );
}

export default ProductsSection;
