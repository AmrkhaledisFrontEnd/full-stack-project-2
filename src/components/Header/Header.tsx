import Image from "next/image"
import logo from "../../../public/logo.svg"
import Link from "next/link"
import Links from "./_components/Links"
import AuthLinks from "./_components/AuthLinks"
// ======================================================================================
function Header() {
    return (
        <header className="bg-light fixed top-0 w-full">
            <div className="container-css flex items-center justify-between">
                <div className="flex lg:flex-row flex-row-reverse items-center lg:gap-10 gap-5">
                    <Link href={"/"}><Image src={logo} alt="logo" /></Link>
                    <nav>
                        <Links />
                    </nav>
                </div>
                <AuthLinks />
            </div>
        </header>
    )
}

export default Header
