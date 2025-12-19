export const dynamic = "force-dynamic";

import { GetCategoriesDB } from "@/QueryDbCache/GetCategories";
import { CategoryDB } from "@/type";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { MdAdd } from "react-icons/md";
// ==========================================================================================
async function page() {
  const categories = await GetCategoriesDB();
  return (
    <main className="lg:w-[60%] md:w-[70%] w-full ">
      <div className="shadow flex items-center justify-center rounded-xl sm:w-100 sm:h-50 w-80  h-40 ">
        <Link
          href={"/admin/products/create"}
          className="text-2xl size-10 shadow flex items-center justify-center rounded-full"
        >
          <MdAdd />
        </Link>
      </div>
      <ul className="flex flex-col gap-5 mt-15">
        {categories.map((cat: CategoryDB) => (
          <div key={cat.id} className="flex flex-col gap-3">
            <h2 className="text-3xl">{cat.name}</h2>
            {cat.products.length > 0 ? (
              <ul className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-3">
                {cat.products.map((product: Product) => (
                  <li
                    className="shadow flex items-center hover:scale-103 justify-center rounded-xl flex-col gap-5 overflow-hidden"
                    key={product.id}
                  >
                    <div className="relative w-full lg:lg:h-50 md:h-65 h-50">
                      <Image src={product.image} alt="Product Image" fill />
                    </div>
                    <Link
                      href={`/admin/products/edit/${product.id}`}
                      className="mb-3 underline"
                    >
                      {product.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="italic text-gray-400">No Products</p>
            )}
          </div>
        ))}
      </ul>
    </main>
  );
}

export default page;
