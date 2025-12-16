import image from "../../images/graphic_design.jpg"
import ProductsDesign from "../ProductsDsign/ProductsDesign"
// ===========================================================================
function ProductsSection() {
    const products = [
        { id: 1, name: "Graphic Design", description: "كورس تصميم جرافيك يعلمك أساسيات الألوان والخطوط والتنسيق وكيفية عمل شعارات وبوسترات ومشاريع تطبيقية تساعدك على الاحتراف وبناء معرض أعمال قوي.", price: 255, image: image },
        { id: 2, name: "Graphic Design", description: "كورس تصميم جرافيك يعلمك أساسيات الألوان والخطوط والتنسيق وكيفية عمل شعارات وبوسترات ومشاريع تطبيقية تساعدك على الاحتراف وبناء معرض أعمال قوي.", price: 255, image: image },
        { id: 3, name: "Graphic Design", description: "كورس تصميم جرافيك يعلمك أساسيات الألوان والخطوط والتنسيق وكيفية عمل شعارات وبوسترات ومشاريع تطبيقية تساعدك على الاحتراف وبناء معرض أعمال قوي.", price: 255, image: image },
        { id: 4, name: "Graphic Design", description: "كورس تصميم جرافيك يعلمك أساسيات الألوان والخطوط والتنسيق وكيفية عمل شعارات وبوسترات ومشاريع تطبيقية تساعدك على الاحتراف وبناء معرض أعمال قوي.", price: 255, image: image },
        { id: 5, name: "Graphic Design", description: "كورس تصميم جرافيك يعلمك أساسيات الألوان والخطوط والتنسيق وكيفية عمل شعارات وبوسترات ومشاريع تطبيقية تساعدك على الاحتراف وبناء معرض أعمال قوي.", price: 255, image: image },
        { id: 6, name: "Graphic Design", description: "كورس تصميم جرافيك يعلمك أساسيات الألوان والخطوط والتنسيق وكيفية عمل شعارات وبوسترات ومشاريع تطبيقية تساعدك على الاحتراف وبناء معرض أعمال قوي.", price: 255, image: image },
    ]
    return (
        <section id="c">
            <div className="container-css flex flex-col gap-10">
                <h1 className="sm:text-3xl text-2xl font-bold">Our Latest Products</h1>
                <ProductsDesign products={products}/>
            </div>
        </section>
    )
}

export default ProductsSection
