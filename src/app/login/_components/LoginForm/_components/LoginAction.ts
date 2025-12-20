"use server";
import { LoginSchema } from "@/schemas/LoginSchema";
import { LoginActionDataType } from "@/type";
import { prisma } from "../../../../../prisma";
import bcrypt from "bcryptjs";
import { signIn } from "@/auth";
// ====================================================================================
export const LoginAction = async (data: LoginActionDataType) => {
  try {
    const validation = LoginSchema.safeParse(data);
    if (!validation.success) return { error: "Invalid email or password" };
    const user = await prisma.user.findUnique({
      where: {
        email: validation.data.email,
      },
    });
    if (!user || !user.password) return { error: "Invalid email or password" };
    const passwordHashed = await bcrypt.compare(
      validation.data.password,
      user.password
    );
    if (!passwordHashed) return { error: "Incorrect email or password" };
    await signIn("credentials", {
      email: validation.data.email,
      password: validation.data.password,
      redirect: false,
    });
  } catch (error) {
    console.log(error);
    return {
      error: "An error occurred while signing in. Please try again later",
    };
  }
};
