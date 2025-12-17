import Image from "next/image";
import logo from "../../../public/logo.svg";
import Link from "next/link";
import Links from "./_components/Links";
import AuthLinks from "./_components/AuthLinks";
import { GetUser } from "../GetUser";
import { User } from "@prisma/client";
import UserProfile from "./_components/UserProfile/UserProfile";
import Cart from "./_components/Cart";
// ======================================================================================
async function Header() {
  const user: null | User = await GetUser();
  return (
    <header className="bg-light fixed top-0 w-full z-50">
      <div className="container-css flex items-center justify-between">
        <div className="flex lg:flex-row flex-row-reverse items-center lg:gap-10 gap-5">
          <Link className="hover:scale-105 transition-css" href={"/"}>
            <Image src={logo} alt="logo" />
          </Link>
          <nav>
            <Links />
          </nav>
        </div>
        {!user ? (
          <AuthLinks />
        ) : (
          <div className="flex items-center gap-5 flex-row-reverse">
            <UserProfile user={user} /> <Cart />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
