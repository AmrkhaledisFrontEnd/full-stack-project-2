"use client";
import { AddCategorySchema } from "@/schemas/AddCategorySchema";
import { useState } from "react";
import { CreateCategoryAction } from "./_components/CreateCategoryAction";
import { toast } from "react-toastify";
import Loader from "@/components/Loader";
// ============================================================================
function Input() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handle = async () => {
    const validation = AddCategorySchema.safeParse({name});
    if (!validation.success)
      return setError(validation.error.issues[0].message);
    setLoading(true);
    const result = await CreateCategoryAction(name);
    setLoading(false);
    if (result?.error) return setError(result.error);
    setError("");
    setName("");
    toast.success("Craeted Category", {
      className: "toast-font",
    });
  };
  return (
    <>
      <input
        disabled={loading}
        onKeyDown={(e)=>{
          if(e.key == "Enter") {
            handle()
          }
        }}
        onChange={(e) => setName(e.target.value)}
        value={name}
        className={`outline-none py-2 px-4 border border-gray-400 rounded-xl ${error && "border-red-500"}`}
        type="text"
        placeholder="Enter Your Category Name"
      />
      {error && <p className="text-red-500 text-[14px]">{error}</p>}
      <button
      onClick={handle}
        disabled={loading}
        className="shadow text-[17px] flex items-center justify-center disabled:bg-blue-200 py-2 px-4  cursor-pointer bg-primary text-white rounded-xl"
      >
        {loading ? <Loader /> : " Add"}
      </button>
    </>
  );
}

export default Input;
