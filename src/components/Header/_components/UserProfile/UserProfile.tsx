"use client";
import Image from "next/image";
import imageProfileDefault from "../../../../images/profileDefualt.jpeg";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ButtonSignOut from "../../../ButtonSignOut/ButtonSignOut";
import Links from "./_components/Links";
import { UserDB } from "@/type";
import ChangeImage from "./_components/ChangeImage";
import { AiOutlineEdit } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { EditProductAction } from "@/app/admin/products/_components/CreateProductForm/_components/ProductAction";
import { EditProfileAction } from "./_components/EditProfileAction";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
// ===========================================================================
function UserProfile({ user }: { user: UserDB }) {
  if (!user) return;
  const [openProfile, setOpenProfile] = useState(false);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      if (!e.target.closest(".button, .link, .image, .input, .dev")) {
        setOpenProfile(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  const [imageChange, setImageChange] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [editName, setEditName] = useState(false);
  const [loadin, setLoading] = useState(false);
  const [userName, setUserName] = useState(user.name);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  useEffect(() => {
    if (editName && inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editName]);
  const handleEditProfile = async () => {
    setLoading(true);
    const result = await EditProfileAction({
      id: user.id,
      name: userName,
      image: imageFile,
    });
    setLoading(false);
    if (result?.error)
      return toast.error(result.error, {
        className: "toast-font",
      });
    setImageChange("");
    setImageFile(null);
    setEditName(false);
    toast.success("The profile has been modified", {
      className: "toast-font",
    });
    router.refresh();
  };
  return (
    <div className="relative">
      <Image
        onClick={() => setOpenProfile(!openProfile)}
        src={user.image ?? imageProfileDefault}
        alt="You Image"
        width={100}
        height={100}
        className={`rounded-full w-12.5 h-12.5 image object-cover border-2  cursor-pointer ${
          openProfile ? "border-4 border-gray-300" : "border-gray-600"
        }`}
      />
      {openProfile && (
        <div
          className={`bg-white shadow-2xl dev z-30 p-7 rounded-2xl flex flex-col gap-5 md:w-87.5 sm:w-80 w-65 absolute right-0 mt-2 ${
            (imageChange || editName) && "pt-12"
          }`}
        >
          <div className="flex flex-col gap-5 pb-5 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="relative shrink-0">
                <Image
                  src={imageChange || user.image || imageProfileDefault}
                  alt="You Image"
                  width={100}
                  height={100}
                  className="rounded-full w-12.5 h-12.5 object-cover border-2 border-gray-300"
                />
                <ChangeImage
                  setImageChange={setImageChange}
                  setImageFile={setImageFile}
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  {editName ? (
                    <input
                      onKeyDown={(e) => {
                        if (e.key == "Enter") {
                          return handleEditProfile();
                        }
                      }}
                      onChange={(e) => setUserName(e.target.value)}
                      ref={inputRef}
                      type="text"
                      defaultValue={userName}
                      className="border-2 border-primary w-full rounded outline-none input px-1"
                    />
                  ) : (
                    <h2>{user.name}</h2>
                  )}
                  <button
                    onClick={() => setEditName(!editName)}
                    className="text-xl cursor-pointer "
                  >
                    {editName ? (
                      <IoClose className="button" />
                    ) : (
                      <AiOutlineEdit className="button" />
                    )}
                  </button>
                </div>
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
          {(imageChange || editName) && (
            <button
              onClick={handleEditProfile}
              disabled={loadin}
              className="absolute disabled:bg-blue-200 disabled:cursor-default top-2 left-2 py-1 px-4 bg-primary text-[13px] cursor-pointer button rounded-xl text-white"
            >
              {loadin ? <Loader /> : "Save"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default UserProfile;
