"use client";
import { formatCurrency } from "@/lib/FormatCurrency";
import { UserProducts } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
// ========================================================================
function Cart({ userProducts }: { userProducts: UserProducts[] }) {
  const [openCart, setOpenCart] = useState(false);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      if (!e.target.closest(".div, .link")) return setOpenCart(false);
    };
    document.addEventListener("click", handleClick);
    return () => {
      removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div className="relative">
      <div
        onClick={() => setOpenCart(!openCart)}
        className="flex items-center div gap-1 hover:scale-105"
      >
        <button className="text-4xl cursor-pointer">
          <RiShoppingCartLine />
        </button>
        <span className="text-xl">({userProducts.length})</span>
      </div>
      <div
        className={`absolute mt-5 sm:right-0 flex div transition-css -right-20 lg:p-6 p-3 bg-gray-200 shadow rounded-2xl lg:w-100 w-80 ${
          userProducts.length < 1 ? "h-fit" : "h-75"
        } overflow-y-auto  flex-col gap-10 ${
          openCart ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-100 translate-x-100"
        }`}
      >
        {userProducts.length > 0 ? (
          <ul className="flex flex-col gap-3">
            {userProducts.map((product) => (
              <li className="flex items-center gap-5" key={product.id}>
                <Image
                  className="lg:w-30 lg:h-17 w-25 h-13 object-cover"
                  src={product.image}
                  alt="Product Image"
                  width={200}
                  height={200}
                />
                <div>
                  <h2 className="font-semibold lg:text-xl">{product.name}</h2>
                  <h3>{formatCurrency(product.price)}</h3>
                  <h4 className="text-[13px] font-bold">
                    Quantity ({product.quantity})
                  </h4>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <span className="font-bold text-gray-600 italic">No Products in cart</span>
        )}
        <div className="flex flex-col gap-2">
          <Link
            className="w-full link font-semibold bg-primary text-white py-3 rounded hover:scale-95 transition-css hover:rotate-1 hover:shadow-2xl text-center px-4"
            href={"/cart"}
          >
            View my cart ({userProducts.length})
          </Link>
          <a
            className="border-b link border-black text-slate-600 w-fit mx-auto"
            href={"/#products"}
          >
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cart;
