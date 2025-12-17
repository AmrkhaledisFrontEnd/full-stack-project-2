import Image from "next/image";
import loginImage from "../../images/loginImage.png";
import RegisterForm from "./_components/RegisterForm/RegisterForm";
// =================================================================================
function page() {
  return (
    <main className="relative flex items-center xl:gap-30 lg:gap-10 section-space">
      <div className="xl:w-1/2 lg:w-[65%] h-screen relative lg:block hidden">
        <Image
          fill
          src={loginImage}
          alt="image login"
          className="object-cover"
        />
      </div>
      <RegisterForm />
    </main>
  );
}

export default page;
