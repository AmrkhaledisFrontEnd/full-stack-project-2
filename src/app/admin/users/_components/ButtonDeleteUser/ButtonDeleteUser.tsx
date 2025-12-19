"use client";

import { toast } from "react-toastify";
import { DeleteUserAction } from "./_components/DeleteUserAction";
import { useRouter } from "next/navigation";
// ===============================================================
function ButtonDeleteUser({ id }: { id: string }) {
  const router = useRouter();
  const handle = async () => {
    const result = await DeleteUserAction(id);
    if (result?.error)
      return toast.error(result.error, {
        className: "toast-font",
      });
    toast.success("Deleted User Succssful", {
      className: "toast-font",
    });
    router.refresh();
  };
  return (
    <button
      onClick={handle}
      className="bg-red-500 py-2 px-4 rounded cursor-pointer text-white"
    >
      Delete
    </button>
  );
}

export default ButtonDeleteUser;
