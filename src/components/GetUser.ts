"use server";
import { auth } from "@/auth";
import { User } from "@prisma/client";
import { prisma } from "../prisma";
import { UserDB } from "@/type";
// ===================================================================
export const GetUser = async () => {
  try {
    let user: null | UserDB = null;
    const session = await auth();
    console.log(session?.user?.id);
    if (session && session.user) {
      const userDB = await prisma.user.findUnique({
        where: {
          id: session.user.id,
        },
        include: {
          userProducts: {
            orderBy:{
              price:"desc"
            }
          },
        },
      });
      user = userDB;
    }
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};
