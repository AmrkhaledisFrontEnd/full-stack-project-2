import ActionUserProducts from "@/app/product-details/[id]/_components/ProductDetails/_components/ButtonCart/_components/ActionUserProducts";
import { formatCurrency } from "@/lib/FormatCurrency";
import { UserProducts } from "@prisma/client";
import Image from "next/image";
// =============================================================
function Product({ product }: { product: UserProducts }) {
  return (
    <li
      key={product.id}
      className="flex lg:gap-3 gap-6 lg:flex-row flex-col lg:items-center justify-between bg-gray-100 p-5 rounded border-2 cursor-default border-transparent hover:border-primary transition-css hover:scale-95"
    >
      <div className="flex gap-4 md:flex-row flex-col">
        <Image
          src={product.image}
          alt="Product Image"
          width={600}
          height={338}
          className="w-87.5 h-43.75 object-cover rounded"
        />
        <div>
          <h2 className="sm:text-3xl text-2xl font-semibold">{product.name}</h2>
          <p className="md:max-w-150 w-full text-[14px] font-semibold tracking-wide sm:line-clamp-4 line-clamp-6">
            {product.description}
          </p>
          <h3 className="font-bold mt-2">Quantity ({product.quantity})</h3>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-primary sm:text-2xl text-xl">
          {formatCurrency(product.price * product.quantity)}
        </h3>
        <ActionUserProducts userProduct={product} />
      </div>
    </li>
  );
}

export default Product;
