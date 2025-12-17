"use client"
import { MdDelete } from "react-icons/md";
import { DeleteCategoryAction } from "./DeleteEditActions";
import { toast } from "react-toastify";
// ========================================================================
function ButtonDelete({id}:{id:string}) {
  const handleDelete = async ()=>{
    const result = await DeleteCategoryAction(id)
    if(result?.error) return toast.error(result.error,{
      className:"toast-font"
    })
    toast.success("Deleted Category",{
      className:"toast-font"
    })
  }
  return (
    <button onClick={handleDelete} className="bg-red-500 text-[18px] text-white cursor-pointer rounded py-2 px-4">
      <MdDelete />
    </button>
  );
}

export default ButtonDelete;
