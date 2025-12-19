import Breadcrumb from "@/components/Breadcrumb";
import { formatCurrency } from "@/lib/FormatCurrency";
import Image from "next/image";
import ButtonCart from "./_components/ButtonCart/ButtonCart";
import { Product } from "@prisma/client";
import { GetUser } from "@/components/GetUser";
import { UserDB } from "@/type";
// =============================================================================
async function ProductDetails({ product }: { product: Product }) {
  const user: null | UserDB = await GetUser();
  return (
    <div>
      <Breadcrumb idProduct={product.id} pathname="products" />
      <div className="my-15 flex md:items-center justify-between gap-5 md:flex-row flex-col">
        <Image
          src={product.image}
          alt="Product Image"
          width={600}
          height={338}
          className="lg:w-[40%] md:w-[50%] sm:w-[75%] w-full object-cover rounded-2xl"
        />
        <div className="xl:w-[53%] lg:w-[57%] md:w-[50%] flex flex-col xl:gap-3 gap-2">
          <h2 className="xl:text-4xl text-3xl font-semibold">
            {product.title.charAt(0).toUpperCase() +
              product.title.slice(1).toLocaleLowerCase()}
          </h2>
          <p className="sm:text-[15px] text-[13px] font-semibold">
            {product.description}
          </p>
          <h2 className="text-primary xl:text-3xl text-2xl font-bold">
            {formatCurrency(product.price)}
          </h2>
          <ButtonCart user={user} product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
