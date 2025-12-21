"use client";
import { Product } from "@prisma/client";
import { redirect, usePathname, useRouter } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";
import { AddProductInCartAction } from "./_components/AddProuductInCartAction";
import { toast } from "react-toastify";
import { UserDB } from "@/type";
import ActionUserProducts from "./_components/ActionUserProducts";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
// ========================================================================================
function ButtonCart({
  user,
  product,
}: {
  user: UserDB | null;
  product: Product;
}) {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    if (!user) return redirect("/login");
    setLoading(true);
    const result = await AddProductInCartAction({
      userId: user.id,
      name: product.title,
      description: product.description,
      price: String(product.price),
      image: product.image,
      productId: String(product.id),
    });
    setLoading(false);
    if (result?.error)
      return toast.error(result?.error, {
        className: "toast-font",
      });
    toast.success("The product has been added to the cart", {
      className: "toast-font",
    });
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
          disabled={loading}
          onClick={handleClick}
          className="bg-primary disabled:cursor-default disabled:hover:rotate-0 disabled:hover:border-transparent disabled:hover:scale-100 disabled:hover:translate-y-0 disabled:bg-blue-200 shadow xl:py-3 py-2 rounded-xl xl:text-[18px] px-4 w-fit flex items-center gap-2 text-white cursor-pointer hover:bg-transparent border-2 border-transparent hover:border-primary hover:scale-95 transition-css hover:translate-y-0.5 hover:rotate-2 hover:text-primary"
        >
          {loading ? (
            <Loader />
          ) : (
            <>
              <i className="xl:text-3xl 2xl:">
                <FiShoppingCart />
              </i>
              Add To Cart
            </>
          )}
        </button>
      )}
    </div>
  );
}

export default ButtonCart;
