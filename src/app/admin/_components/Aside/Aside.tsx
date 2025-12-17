import { GetUser } from "@/components/GetUser"
import { User } from "@prisma/client"
import Image from "next/image"
import imageProfileDefault from "../../../../images/profileDefualt.jpeg"
import Links from "./_components/Links"
import ButtonSignOut from "@/components/ButtonSignOut/ButtonSignOut"
// =================================================================
async function Aside() {
  const user: null | User = await GetUser()
  if (!user || user.role == "USER") return
  return (
    <div className="p-10 bg-white shadow rounded-2xl md:min-h-[88dvh]">
      <div className="flex flex-col justify-between h-full md:h-full min-h-[300px] gap-10">
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
            <Image src={user.image ?? imageProfileDefault} alt="You Image" width={50} height={50} className="rounded-full object-cover border border-gray-600" />
            <div>
              <h2>{user.name}</h2>
              <h3 className="text-gray-500 text-[12px]">{user.email}</h3>
            </div>
          </div>
          <Links />
        </div>
        <ButtonSignOut />
      </div>
    </div>
  )
}

export default Aside
