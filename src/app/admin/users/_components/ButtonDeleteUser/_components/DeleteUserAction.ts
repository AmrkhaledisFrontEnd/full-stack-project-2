"use server";
import { prisma } from "@/prisma";
import { revalidatePath } from "next/cache";
// ==========================================================================
export const DeleteUserAction = async (id: string) => {
  if (!id) return { error: "User not found" };
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) return { error: "User not found" };
    await prisma.user.delete({
      where: {
        id: user.id,
      },
    });
    revalidatePath("/");
    revalidatePath("/admin/users");
  } catch (error) {
    console.log(error);
    return { error: "Failed Delete This User" };
  }
};
