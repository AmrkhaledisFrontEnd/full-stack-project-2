"use client";
import { User } from "@prisma/client";
import { redirect } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";
// ========================================================================================
function ButtonCart({ user }: { user: User | null }) {
  const handleClick = async () => {
    if (!user) return redirect("/login");
  };
  return (
    <button
      onClick={handleClick}
      className="bg-primary shadow xl:py-3 py-2 rounded-xl xl:text-[18px] px-4 w-fit flex items-center gap-2 text-white cursor-pointer hover:bg-transparent border-2 border-transparent hover:border-primary hover:scale-95 transition-css hover:translate-y-0.5 hover:rotate-2 hover:text-primary"
    >
      <i className="xl:text-3xl 2xl:">
        <FiShoppingCart />
      </i>
      Add To Cart
    </button>
  );
}

export default ButtonCart;
