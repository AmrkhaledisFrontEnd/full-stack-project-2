import Link from "next/link";
// ==========================================================================================
function Hero() {
  const paragraphs = [
    {
      id: crypto.randomUUID(),
      paragraph:
        "Learn the fundamentals of graphic design, including colors,typography, and layout, and how to create logos, posters, and real-world projects that help you go professional and build a strong portfolio.",
    },
    {
      id: crypto.randomUUID(),
      paragraph:
        "This course is designed for all skill levels and provides practical,hands-on skills you can apply directly to your projects, preparing you for a professional career in design.",
    },
  ];
  return (
    <section className="h-[94dvh] flex items-center bg-gray-50 hero section-space ">
      <div className="container-css flex flex-col gap-3 items-center ">
        <h1 className="md:text-[50px] text-white sm:text-[35px] text-[25px] font-bold flex flex-col items-center">
          All Your Digital Products
          <span className="text-primary">In Just One Click</span>
        </h1>
        {paragraphs.map((p) => (
          <p
            className="font-semibold text-white md:text-[20px] sm:text-[18px] text-[15px] text-center max-w-260"
            key={p.id}
          >
            {p.paragraph}
          </p>
        ))}
        <div className="mt-7 flex items-center gap-5 sm:flex-row flex-col w-full justify-center">
          <a
            href={"#products"}
            className="bg-primary text-[20px] text-light sm:w-fit w-full text-center py-2.5 sm:px-10 px-6 rounded hover:scale-105 transition-css"
          >
            Get Started
          </a>

          <Link
            href={"/about"}
            className="shadow text-[20px] bg-white text-primary sm:w-fit w-full text-center py-2.5 sm:px-10 px-6 rounded hover:scale-105 transition-css"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
