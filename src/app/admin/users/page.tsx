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
              className="flex items-center justify-between bg-gray-100 p-3 rounded"
              key={user.id}
            >
              <Image
                src={user.image ?? imageUserDefault}
                alt="User Image"
                width={50}
                height={50}
                className="rounded-full"
              />
              <h2>{user.name}</h2>
              <h2>{user.email}</h2>
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
