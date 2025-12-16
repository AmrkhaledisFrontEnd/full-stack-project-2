import Link from "next/link";
import { RiShoppingCartLine } from "react-icons/ri";
// ========================================================================
function Cart() {
  return (
    <div className="flex items-center gap-1">
      <Link className="text-4xl" href={"/cart"}><RiShoppingCartLine/></Link>
      <span className="text-xl">(0)</span>
    </div>
  )
}

export default Cart
