"use client";
import { AiFillEdit } from "react-icons/ai";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { EditCategoryAction } from "./DeleteEditActions";
import { toast } from "react-toastify";
import { CategoryDB } from "@/type";
import { AddCategorySchema } from "@/schemas/AddCategorySchema";
import Loader from "@/components/Loader";
// =========================================================================
function ButtonEdit({category}:{category:CategoryDB}) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(category.name ?? "");
  const [error, setError] = useState("");
  const handle = async () => {
    const validation = AddCategorySchema.safeParse({ name });
    if (!validation.success)
      return setError(validation.error.issues[0].message);
    setLoading(true);
    const result = await EditCategoryAction(category.id,name);
    setLoading(false);
    if (result?.error) return setError(result.error);
    setError("");
    toast.success("Edited Category Name", {
      className: "toast-font",
    });
  };
  return (
    <Dialog>
      <DialogTrigger className="bg-primary text-[18px] text-white cursor-pointer rounded py-2 px-4">
        <AiFillEdit />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Category Name?</DialogTitle>
        </DialogHeader>
        <input
          disabled={loading}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              handle();
            }
          }}
          onChange={(e) => setName(e.target.value)}
          value={name}
          className={`outline-none w-full text-white py-2 px-4 border border-white rounded-xl ${
            error && "border-red-500"
          }`}
          type="text"
          placeholder="Enter Your Category Name"
        />
        {error && <p className="text-red-500 text-[14px]">{error}</p>}{" "}
        <button
          onClick={handle}
          disabled={loading}
          className="shadow w-full text-[17px] flex items-center justify-center disabled:bg-blue-200 py-2 px-4  cursor-pointer bg-primary text-white rounded-xl"
        >
          {loading ? <Loader /> : "Save"}
        </button>
      </DialogContent>
    </Dialog>
  );
}

export default ButtonEdit;
