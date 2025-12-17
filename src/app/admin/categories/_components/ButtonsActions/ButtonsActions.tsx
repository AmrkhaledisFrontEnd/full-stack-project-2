import ButtonEdit from "./_components/ButtonEdit";
import ButtonDelete from "./_components/ButtonDelete";
import { CategoryDB } from "@/type";
// ===================================================================================
function ButtonsActions({category}:{category:CategoryDB}) {
  return (
    <div className="flex items-center justify-between w-full">
      <ButtonEdit category={category}/>
      <ButtonDelete  id={category.id}/>
    </div>
  );
}

export default ButtonsActions;
