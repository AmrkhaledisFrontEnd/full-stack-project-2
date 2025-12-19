import Link from "next/link";
import { IoSettingsSharp } from "react-icons/io5";
import { RiShieldUserLine } from "react-icons/ri";
// ==========================================================================================
function Links({ role }: { role: string }) {
  return (
    <>
      {role !== "USER" && (
        <Link
          className="flex items-center gap-5 link  w-fit hover:scale-105 text-gray-500"
          href={"/admin"}
        >
          <i className="text-[23px]">
            <RiShieldUserLine />
          </i>
          Admin
        </Link>
      )}
    </>
  );
}

export default Links;
