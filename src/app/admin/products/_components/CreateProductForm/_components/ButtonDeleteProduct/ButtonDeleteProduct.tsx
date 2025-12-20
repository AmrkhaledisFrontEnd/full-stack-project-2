"use client";
import { toast } from "react-toastify";
import { ButtonDeleteProductAction } from "./_components/ButtonDeleteProductAction";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loader from "@/components/Loader";
// ======================================================================================
function ButtonDeleteProduct({ id }: { id: number }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleDelete = async () => {
    setLoading(true);
    const result = await ButtonDeleteProductAction(id);
    setLoading(false);
    if (result?.error)
      return toast.error(result.error, {
        className: "toast-font",
      });
    toast.success("Deleted Product Successful", {
      className: "toast-font",
    });
    router.refresh();
    router.push("/admin/products")
  };
  return (
    <button
      disabled={loading}
      onClick={handleDelete}
      type="button"
      className="bg-red-500 py-3 px-4 shadow cursor-pointer text-white rounded flex items-center justify-center disabled:bg-red-200"
    >
      {loading ? <Loader /> : "Delete"}
    </button>
  );
}

export default ButtonDeleteProduct;
