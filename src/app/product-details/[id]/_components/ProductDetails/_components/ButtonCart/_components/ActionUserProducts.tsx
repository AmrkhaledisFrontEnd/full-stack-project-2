"use client";
import { UserProducts } from "@prisma/client";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { ProductQuantityAction } from "./AddProuductInCartAction";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loader from "@/components/Loader";
// ==============================================================
function ActionUserProducts({ userProduct }: { userProduct: UserProducts }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleActionQuantity = async (
    actionType: "increase" | "decrease" | "delete"
  ) => {
    setLoading(true);
    const result = await ProductQuantityAction(
      userProduct.productId,
      actionType
    );
    setLoading(false);
    if (result?.error) toast.error(result.error, { className: "toast-font" });
    router.refresh();
  };
  return (
    <div className="w-fit flex flex-col gap-2 items-center select-none z-20">
      <div className="flex items-center gap-2">
        <button
          disabled={loading}
          onClick={() => handleActionQuantity("increase")}
          className="bg-primary disabled:hover:scale-100 disabled:cursor-default disabled:bg-blue-200 size-10 hover:scale-105 shadow  rounded text-3xl font-semibold text-white cursor-pointer"
        >
          +
        </button>
        <span className="bg-gray-200 py-2 px-7 shadow rounded font-bold">
          {loading ? <Loader /> : userProduct.quantity}
        </span>
        <button
          disabled={loading || userProduct.quantity === 1}
          onClick={() => handleActionQuantity("decrease")}
          className="bg-red-500 size-10 disabled:hover:scale-100 disabled:cursor-default disabled:bg-red-200 hover:scale-105 rounded text-3xl shadow font-semibold text-white cursor-pointer"
        >
          -
        </button>
      </div>
      <button
        onClick={() => handleActionQuantity("delete")}
        disabled={loading}
        className="size-10 disabled:hover:scale-100 disabled:cursor-default disabled:text-red-200 rounded text-red-500 text-3xl cursor-pointer  hover:scale-105"
      >
        <MdDelete />
      </button>
    </div>
  );
}

export default ActionUserProducts;
