"use server"
import { auth } from "@/auth"
import { User } from "@prisma/client"
import { prisma } from "../prisma"
// ===================================================================
export const GetUser = async () => {
    try {
        let user: null | User = null
        const session = await auth()
        console.log(session?.user?.id)
        if (session && session.user) {
            const userDB = await prisma.user.findUnique({
                where: {
                    id: session.user.id
                }
            })
            user = userDB
        }
        return user
    } catch (error) {
        console.log(error)
        return null
    }
}