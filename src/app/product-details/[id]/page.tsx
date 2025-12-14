import Breadcrumb from "@/components/Breadcrumb"
import Image from "next/image"
import imageProduct from "../../../images/graphic_design.jpg"
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { formatCurrency } from "@/lib/FormatCurrency";
import ButtonCart from "@/app/product-details/[id]/_components/ButtonCart";
import ProductsSection from "@/components/ProductsSection/ProductsSection";
// =======================================================================================
async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    return (
        <main>
            <div className="container-css">
                <Breadcrumb idProduct={id} pathname="products" />
                <div className="my-15 flex md:items-center justify-between gap-5 md:flex-row flex-col">
                    <Image src={imageProduct} alt="Product Image" width={150} height={150} className="lg:w-[40%] md:w-[50%] sm:w-[75%] w-full object-cover rounded-2xl" />
                    <div className="xl:w-[53%] lg:w-[57%] md:w-[50%] flex flex-col xl:gap-3 gap-2">
                        <h2 className="xl:text-4xl text-3xl font-semibold">Graphic Design</h2>
                        <p className="sm:text-[15px] text-[13px] font-semibold">كورس تصميم جرافيك يعلمك أساسيات الألوان والخطوط والتنسيق وكيفية عمل شعارات وبوسترات ومشاريع تطبيقية تساعدك على الاحتراف وبناء معرض أعمال قوي</p>
                        <h3 className="flex items-center gap-1 text-gray-500 font-bold"><i className="text-primary text-3xl pt-1.5"><BiSolidCheckboxChecked /></i> توصيل فوري</h3>
                        <h2 className="text-primary xl:text-4xl text-2xl font-bold">{formatCurrency(9.99)}</h2>
                        <ButtonCart />
                    </div>
                </div>
                <ProductsSection/>
            </div>
        </main>
    )
}

export default page
