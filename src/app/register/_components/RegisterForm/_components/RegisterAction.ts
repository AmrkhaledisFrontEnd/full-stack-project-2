"use server";
import { RegisterSchema } from "@/schemas/RegisterSchema";
import { RegisterACtionDataType } from "@/type";
import { prisma } from "@/prisma";
import bcrypt from "bcryptjs";
import { signIn } from "@/auth";
import { revalidatePath } from "next/cache";
// ============================================================================
export const RegisterAction = async (data: RegisterACtionDataType) => {
  const validation = RegisterSchema.safeParse(data);
  if (!validation.success) return { error: validation.error.issues[0].message };
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: validation.data.email,
      },
    });
    if (user) return { error: "This user exists" };
    const passwordHashed = await bcrypt.hash(validation.data.password, 10);
    await prisma.user.create({
      data: {
        name: validation.data.name,
        email: validation.data.email,
        password: passwordHashed,
      },
    });
    await signIn("credentials", {
      email: validation.data.email,
      password: validation.data.password,
      redirect: false,
    });
    revalidatePath("/");
    revalidatePath("/admin/users");
  } catch (error) {
    console.log(error);
    return { error: "Failed To Register" };
  }
};
