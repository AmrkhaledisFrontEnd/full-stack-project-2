import Image from "next/image"
import loginImage from "../../images/loginImage.png"
import LoginForm from "./_components/LoginForm"
// =================================================================================
function page() {
  return (
    <main className="relative flex items-center xl:gap-30 lg:gap-10 min-h-screen">
      <div className="xl:w-1/2 lg:w-[65%] h-screen relative lg:block hidden">
        <Image fill src={loginImage} alt="image login" className="object-cover" />
      </div>

        <LoginForm />
    </main>

  )
}

export default page
