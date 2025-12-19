import { GetUser } from "@/components/GetUser";
import { UserDB } from "@/type";
import Product from "./_components/Product";
import { formatCurrency } from "@/lib/FormatCurrency";
import Link from "next/link";
// ====================================================================
async function page() {
  const user: null | UserDB = await GetUser();
  if (!user || user.userProducts.length < 1) return;
  const total = user.userProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  return (
    <main className="section-space">
      <div className="container-css flex flex-col gap-15 items-center">
        <h1 className="sm:text-4xl text-2xl font-semibold mt-10">Your Cart</h1>
        <ul className="w-full flex flex-col gap-4">
          {user.userProducts.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </ul>
        <div className="w-full flex justify-between">
          <h2 className="font-bold text-3xl">Total</h2>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-slate-500">
              {formatCurrency(total)}
            </h3>
            <Link
              href={"/checkout"}
              className="py-3 shadow font-semibold transition-css text-center hover:scale-95 text-xl px-4 bg-primary text-white cursor-pointer rounded"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
