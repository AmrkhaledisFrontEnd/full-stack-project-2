"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { RiCloseFill } from "react-icons/ri";
// ==============================================================================
function Links() {
    const [openMenu,setOpenMenu] = useState(false)
    const pathname = usePathname()
    const links = [
        { id: crypto.randomUUID(), linkName: "Home", url: "/" },
        { id: crypto.randomUUID(), linkName: "Explore", url: "/explore" },
        { id: crypto.randomUUID(), linkName: "Projects", url: "/projects" },
        { id: crypto.randomUUID(), linkName: "About Us", url: "/about" },
        { id: crypto.randomUUID(), linkName: "Contact Us", url: "/contact" },

    ]
    return (
        <>
            <ul className={`flex  items-center lg:top-0 lg:relative lg:w-fit lg:h-fit lg:bg-transparent fixed lg:left-0 lg:rounded-none rounded-2xl top-25 bottom-0 sm:w-70 w-60 sm:h-120 h-87.5 lg:border-none border border-primary lg:gap-2 lg:flex-row lg:justify-start sm:gap-10 gap-7 transition-css flex-col justify-center sm:mx-0 mx-auto bg-teal-50 ${openMenu ? "left-5" : "-left-200"}`}>
                {links.map((link) => (
                    <li key={link.id}>
                        <Link className={`text-dark lg:px-2 font-semibold px-4 pb-1 lg:text-[17px] md:text-[22px] sm:text-[18px] text-[15px] hover:text-primary transition-css ${pathname.trim() == link.url.trim() ? " lg:border-b-2 border-b-3 border-b-primary" : ""}`} href={link.url}>{link.linkName}</Link>
                    </li>
                ))}
            </ul>
            <i onClick={()=> setOpenMenu(!openMenu)} className="lg:hidden block cursor-pointer bg-gray-50 p-2.5 text-primary text-3xl rounded-[7px] hover:scale-105 transition-css"> {openMenu ? <RiCloseFill/> :<CgMenuLeftAlt />}</i>
        </>
    )
}

export default Links
