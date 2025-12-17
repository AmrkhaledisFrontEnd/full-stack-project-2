import { formatCurrency } from "@/lib/FormatCurrency";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
// ==================================================================================
function ProductsDesign({ products }: { products: Product[] }) {
  return (
    <div>
      <ul className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 sm:gap-2 gap-6">
        {products.length > 0 ? (
          products.map((product: any) => (
            <li
              key={product.id}
              className=" bg-white border-gray-300 sm:hover:border-primary border-2 sm:hover:scale-102 sm:hover:-translate-y-2 transition-css rounded-xl overflow-hidden "
            >
              <Link
                href={`/product-details/${product.id}`}
                className="flex flex-col "
              >
                <div className="relative w-full sm:h-50 h-60">
                  <Image
                    src={product.image}
                    alt="Product Image"
                    fill
                    className="sm:object-fill "
                  />
                </div>
                <div className="flex flex-col gap-3 p-4">
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-[20px]">
                      {product.title}
                    </h2>
                    <span>{formatCurrency(product.price)}</span>
                  </div>
                  <p className="line-clamp-4">{product.description}</p>
                </div>
              </Link>
              <Link
                href={`/product-details/${product.id}`}
                className="sm:hidden block mx-auto mb-2 bg-primary text-white py-2.5 px-4 w-[80%]  rounded text-center"
              >
                Go buy this course
              </Link>
            </li>
          ))
        ) : (
          <p className="italic text-gray-400">No Products Come back later</p>
        )}
      </ul>
    </div>
  );
}

export default ProductsDesign;
