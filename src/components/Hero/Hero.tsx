import Link from "next/link"
// ==========================================================================================
function Hero() {
    return (
        <section className="h-[88dvh] flex items-center justify-center bg-gray-50">
            <div className="container-css flex flex-col gap-3 items-center">
                <h1 className="md:text-[50px] sm:text-[35px] text-[30px] font-bold flex flex-col items-center">
                    جميع منتجاتك الرقمية <span className="text-primary">في نقرة واحدة فقط</span>
                </h1>
                <p className="font-semibold sm:text-[18px] text-[14px] text-center max-w-200">
                    تعلم أساسيات تصميم الجرافيك من الألوان والخطوط والتنسيق، وكيفية إنشاء الشعارات والبوسترات والمشاريع التطبيقية التي تساعدك على الاحتراف وبناء معرض أعمال قوي. 
                </p>
                <p className="font-semibold sm:text-[16px] text-[14px] text-center max-w-200">
                    الكورس مصمم لجميع المستويات، ويوفر لك مهارات عملية لتطبيقها مباشرة على مشاريعك، ويجعلك جاهزًا للعمل في مجال التصميم بشكل احترافي.
                </p>
                <div className="mt-7 flex items-center gap-5 sm:flex-row flex-col w-full justify-center">
                    <Link href={"/"} className="bg-primary text-light sm:w-fit w-full text-center py-2.5 sm:px-10 px-6 rounded hover:scale-105 transition-css">
                        ابدأ الآن
                    </Link>
                    <Link href={"/"} className="shadow text-primary sm:w-fit w-full text-center py-2.5 sm:px-10 px-6 rounded hover:scale-105 transition-css">
                        تعرف على المزيد
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero
