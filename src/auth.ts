import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { LoginSchema } from "./schemas/LoginSchema"
import { prisma } from "./prisma"
import bcrypt from "bcryptjs"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Google from "next-auth/providers/google"
// =================================================================================
export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 24 * 15,
    },
    callbacks:{
        async jwt({token,user}){
            if(user){
                token.sub = user.id
            }
            return token
        },
        async session({session,token}){
            if(token.sub){
             session.user.id = token.sub 
            }
            return session
        }
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
                    if (!user || !user.password) return null
                    const passwordHashed = await bcrypt.compare(validation.data.password, user.password)
                    if (!passwordHashed) return null
                    return user
                } catch (error) {
                    console.log(error)
                    return null
                }
            }
        }),
        Google({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        })
    ],
})