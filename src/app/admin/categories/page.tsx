import { GetCategoriesDB } from "@/QueryDbCache/GetCategories";
import { CategoryDB } from "@/type";
import Input from "./_components/Input/Input";
import ButtonsActions from "./_components/ButtonsActions/ButtonsActions";
// ============================================================================
async function page() {
  const categories = (await GetCategoriesDB()) as CategoryDB[];
  return (
    <main className="lg:w-[65%] w-full flex flex-col gap-15">
      <div className="flex flex-col gap-2">
        <h1 className="sm:text-2xl text-xl font-semibold">Create Category</h1>
        <Input />
      </div>
      <ul className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-3">
        {categories.length > 0 ? (
          categories.map((category: CategoryDB) => (
            <li
              className="shadow bg-white py-2 cursor-default flex flex-col items-center gap-7 px-3 rounded-xl hover:scale-105 transition-css"
              key={category.id}
            >
              <div className="flex flex-col items-center gap-1">
                <h2 className="text-xl">{category.name}</h2>
                <h3 className="text-[13px]">
                  Products ({category.products.length})
                </h3>
              </div>
              <ButtonsActions category={category}/>
            </li>
          ))
        ) : (
          <p className="text-gray-500 italic">No categories</p>
        )}
      </ul>
    </main>
  );
}

export default page;
