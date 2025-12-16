"use client"
import { User } from "@prisma/client"
import Image from "next/image"
import imageProfileDefault from "../../../images/profileDefualt.jpeg"
import Link from "next/link"
import { IoSettingsSharp } from "react-icons/io5";
import { useEffect, useState } from "react"
import ButtonSignOut from "../../ButtonSignOut/ButtonSignOut"
import { RiShieldUserLine } from "react-icons/ri";
// ===========================================================================
function UserProfile({ user }: { user: User }) {
    if (!user) return
    const [openProfile, setOpenProfile] = useState(false)
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (!(e.target instanceof Element)) return;
            if (!e.target.closest(".button, .link")) {
                setOpenProfile(false);
            }
        };
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    return (
        <div className="relative">
            <Image onClick={() => setOpenProfile(!openProfile)} src={user.image ?? imageProfileDefault} alt="You Image" width={50} height={50} className="rounded-full button object-cover border border-gray-600 cursor-pointer" />
            {openProfile && <div className="bg-white shadow-2xl p-7 rounded-2xl flex flex-col gap-5 w-87.5 absolute right-0 mt-2">
                <div className="flex flex-col gap-5 pb-5 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                        <Image src={user.image ?? imageProfileDefault} alt="You Image" width={50} height={50} className="rounded-full object-cover border border-gray-600" />
                        <div>
                            <h2>{user.name}</h2>
                            <h3 className="text-gray-500 text-[12px]">{user.email}</h3>
                        </div>
                    </div>
                    {user.role == "USER" ? <Link className="flex items-center gap-5  link  w-fit hover:scale-105 text-gray-500" href={"/manage-account"}> <i className="text-[19px]"><IoSettingsSharp /></i> Manage account</Link>
                        : <Link className="flex items-center gap-5 link  w-fit hover:scale-105 text-gray-500" href={"/admin"}> <i className="text-[23px]"><RiShieldUserLine /></i>Admin Dashboard</Link>
                    }
                    <ButtonSignOut />
                </div>
                <span className="text-[14px] button opacity-60 text-gray-300 font-bold">Secured by <Link target="_blank" className="text-blue-300 underline" href={"https://amr-khaled-site.netlify.app"}>@amr-khaled</Link></span>
            </div>}
        </div>
    )
}

export default UserProfile
