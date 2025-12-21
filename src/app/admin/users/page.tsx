export const dynamic = "force-dynamic";
import { GetAllUsers } from "@/QueryDbCache/GetAllUsers";
import { User } from "@prisma/client";
import Image from "next/image";
import imageUserDefault from "../../../images/profileDefualt.jpeg";
import ButtonDeleteUser from "./_components/ButtonDeleteUser/ButtonDeleteUser";
// ============================================================
async function page() {
  const users = await GetAllUsers();
  return (
    <main className="w-full">
      <ul className="flex flex-col gap-3 w-full">
        {users.length > 0 ? (
          users.map((user: User) => (
            <li
              className="flex sm:flex-row flex-col sm:gap-0 gap-3 items-center justify-between bg-gray-100 p-3 rounded"
              key={user.id}
            >
              <Image
                src={user.image ?? imageUserDefault}
                alt="User Image"
                width={50}
                height={50}
                className="rounded-full border-2 border-gray-300 object-cover sm:w-12.5 sm:h-12.5 w-16.25 h-16.25"
              />
              <h2 className="sm:text-[15px] text-2xl">{user.name}</h2>
              <h2 className="text-gray-500 font-bold">{user.email}</h2>
              <ButtonDeleteUser id={user.id} />
            </li>
          ))
        ) : (
          <p className="text-gray-500">No Users found</p>
        )}
      </ul>
    </main>
  );
}

export default page;
