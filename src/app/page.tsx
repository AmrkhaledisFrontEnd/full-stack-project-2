import Hero from "@/components/Hero/Hero";
import ProductsSection from "@/components/ProductsSection/ProductsSection";
// =============================================================================== 
export default function Home() {
  return (
    <main className="flex flex-col gap-20">
        <Hero/>
        <ProductsSection/>
    </main>
  );
}
