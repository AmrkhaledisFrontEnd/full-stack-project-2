"use server"
import { signOut } from "@/auth"
// ==========================================================================
export const SingOutAction = async ()=>{
    try {
        await signOut()
    } catch (error) {
        console.log(error)
    }
}