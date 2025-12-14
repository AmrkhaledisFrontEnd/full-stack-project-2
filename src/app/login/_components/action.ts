"use server"
import { LoginSchema } from "@/schemas/LoginSchema";
import { LoginActionDataType } from "@/type";
import { prisma } from "../../../../prisma";
import bcrypt from "bcryptjs";
import { signIn } from "@/auth";
// ====================================================================================
export const LoginAction = async (data: LoginActionDataType) => {
    try {
        const validation = LoginSchema.safeParse(data)
        if (!validation.success) return { error: "Invalid email or password" }
        const user = await prisma.user.findUnique({
            where: {
                email: validation.data.email
            }
        })
        if (!user) return { error: "This user does not exist" }
        const passwordHashed = await bcrypt.compare(validation.data.password, user.password)
        if (!passwordHashed) return { error: "Incorrect password" }
        await signIn("credentials", {
            email: validation.data.email,
            password: validation.data.password,
            redirect: false
        })
        await prisma.session.create({
            data: {
                userId: user.id,
                sessionToken: crypto.randomUUID(),
                expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)
            }
        })
    } catch (error) {
        console.log(error)
        return { error: "An error occurred while signing in. Please try again later" }
    }
}