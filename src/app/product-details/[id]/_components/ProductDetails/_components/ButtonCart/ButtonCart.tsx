"use client";
import { Product } from "@prisma/client";
import { redirect, useRouter } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";
import { AddProductInCartAction } from "./_components/AddProuductInCartAction";
import { toast } from "react-toastify";
import { UserDB } from "@/type";
import ActionUserProducts from "./_components/ActionUserProducts";
// ========================================================================================
function ButtonCart({
  user,
  product,
}: {
  user: UserDB | null;
  product: Product;
}) {
  const router = useRouter();
  const handleClick = async () => {
    if (!user) return redirect("/login");
    const result = await AddProductInCartAction({
      userId: user.id,
      name: product.title,
      description: product.description,
      price: String(product.price),
      image: product.image,
      productId: String(product.id),
    });
    if (result?.error)
      return toast.error(result?.error, {
        className: "toast-font",
      });
    toast.success("The product has been added to the cart");
    router.refresh();
  };
  const userProduct = user?.userProducts.find(
    (p) => Number(p.productId) == product.id
  );
  console.log(userProduct);
  return (
    <div>
      {userProduct && userProduct.quantity > 0 ? (
        <ActionUserProducts userProduct={userProduct} />
      ) : (
        <button
          onClick={handleClick}
          className="bg-primary shadow xl:py-3 py-2 rounded-xl xl:text-[18px] px-4 w-fit flex items-center gap-2 text-white cursor-pointer hover:bg-transparent border-2 border-transparent hover:border-primary hover:scale-95 transition-css hover:translate-y-0.5 hover:rotate-2 hover:text-primary"
        >
          <i className="xl:text-3xl 2xl:">
            <FiShoppingCart />
          </i>
          Add To Cart
        </button>
      )}
    </div>
  );
}

export default ButtonCart;
