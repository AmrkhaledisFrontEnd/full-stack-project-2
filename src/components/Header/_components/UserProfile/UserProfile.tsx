"use client";
import Image from "next/image";
import imageProfileDefault from "../../../../images/profileDefualt.jpeg";
import Link from "next/link";
import { useEffect, useState } from "react";
import ButtonSignOut from "../../../ButtonSignOut/ButtonSignOut";
import Links from "./_components/Links";
import { UserDB } from "@/type";
// ===========================================================================
function UserProfile({ user }: { user: UserDB }) {
  if (!user) return;
  const [openProfile, setOpenProfile] = useState(false);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      if (!e.target.closest(".button, .link, .image")) {
        setOpenProfile(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="relative">
      <Image
        onClick={() => setOpenProfile(!openProfile)}
        src={user.image ?? imageProfileDefault}
        alt="You Image"
        width={50}
        height={50}
        className={`rounded-full image object-cover border-2  cursor-pointer ${
          openProfile ? "border-4 border-gray-300" : "border-gray-600"
        }`}
      />
      {openProfile && (
        <div className="bg-white shadow-2xl z-30 p-7 rounded-2xl flex flex-col gap-5 md:w-87.5 sm:w-80 w-65 absolute right-0 mt-2">
          <div className="flex flex-col gap-5 pb-5 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <Image
                src={user.image ?? imageProfileDefault}
                alt="You Image"
                width={50}
                height={50}
                className="rounded-full object-cover border-2 border-gray-600"
              />
              <div>
                <h2>{user.name}</h2>
                <h3 className="text-gray-500 text-[12px]">{user.email}</h3>
              </div>
            </div>
            <Links role={user.role} />
            <ButtonSignOut />
          </div>
          <span className="text-[14px] button opacity-80 text-gray-300 font-bold">
            Secured by
            <Link
              target="_blank"
              className="text-blue-300 underline"
              href={"https://amr-khaled-site.netlify.app"}
            >
              @amr-khaled
            </Link>
          </span>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
