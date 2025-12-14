import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { LoginSchema } from "./schemas/LoginSchema"
import { prisma } from "../prisma"
import bcrypt from "bcryptjs"
import { PrismaAdapter } from "@auth/prisma-adapter"
// =================================================================================
export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 24 * 15,
    },
    providers: [
        Credentials({
            async authorize(data) {
                try {
                    const validation = LoginSchema.safeParse(data)
                    if (!validation.success) return null
                    const user = await prisma.user.findUnique({
                        where: {
                            email: validation.data.email
                        }
                    })
                    if (!user) return null
                    const passwordHashed = await bcrypt.compare(validation.data.password, user.password)
                    if (!passwordHashed) return null
                    return user
                } catch (error) {
                    console.log(error)
                    return null
                }
            }
        })
    ],
})