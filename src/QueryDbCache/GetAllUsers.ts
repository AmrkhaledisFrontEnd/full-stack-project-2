import { Cache } from "@/Cache";
import { prisma } from "@/prisma";
export const GetAllUsers = Cache(
  async () => {
    const users = await prisma.user.findMany();
    return users;
  },
  ["getAllUsers"],
  { revalidate: 3600 }
);
