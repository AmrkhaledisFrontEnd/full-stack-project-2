import { formatCurrency } from "@/lib/FormatCurrency"
import Image from "next/image"
import Link from "next/link"
// ==================================================================================
function ProductsDesign({ products }: { products: any }) {
    return (
        <div>
            <ul className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 sm:gap-2 gap-6">
                {products.length > 0 ? products.map((product: any) => (
                    <li key={product.id} className=" bg-white sm:hover:border-primary border-2 sm:hover:scale-105 sm:hover:-translate-y-2 transition-css border-transparent rounded-xl overflow-hidden">
                        <Link href={`/product-details/${product.id}`} className="flex flex-col ">
                            <Image src={product.image} alt="Product Image" width={150} height={150} className="w-full object-cover" />
                            <div className="flex flex-col gap-3 p-4">
                                <div className="flex items-center justify-between">
                                    <h2 className="font-semibold text-[20px]">{product.name}</h2>
                                    <span>{formatCurrency(product.price)}</span>
                                </div>
                                <p>{product.description}</p>
                            </div>
                        </Link>
                        <Link href={`/product-details/${product.id}`} className="sm:hidden block mx-auto mb-2 bg-primary text-white py-2.5 px-4 w-[80%]  rounded text-center" >  Go buy this course</Link>
                    </li>
                )) : <p>حالياً لا يوجد منتجات ارجع لاحقاً</p>}
            </ul>
        </div>
    )
}

export default ProductsDesign
