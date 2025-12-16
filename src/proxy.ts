import { auth as proxy } from "@/auth"
import { NextRequest, NextResponse } from "next/server"
import { GetUser } from "./components/GetUser"
import { User } from "@prisma/client"
// =============================================================================
export default proxy(async (req: NextRequest) => {
    const authRoutes = ["/login", "/register"]
    const pathname = req.nextUrl.pathname
    const user: null | User = await GetUser()
    if (authRoutes.includes(pathname)) {
        if (user) return NextResponse.redirect(new URL("/", req.nextUrl.origin))
    }
    if (pathname.startsWith("/admin")) {
        if (!user || user.role == "USER") return NextResponse.redirect(new URL("/", req.nextUrl.origin))
    }
})

export const config = {
    matcher: ["/login", "/register", "/", "/admin", "/manage-account"]
}