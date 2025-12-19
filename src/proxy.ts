import { auth as proxy } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import { GetUser } from "./components/GetUser";
import { UserDB } from "./type";
// =============================================================================
export default proxy(async (req: NextRequest) => {
  const authRoutes = ["/login", "/register"];
  const pathname = req.nextUrl.pathname;
  const user: null | UserDB = await GetUser();

  if (authRoutes.includes(pathname)) {
    if (user) return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }
  if (pathname.startsWith("/admin")) {
    if (!user || user.role == "USER")
      return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }
  if (pathname === "/admin")
    return NextResponse.redirect(
      new URL("/admin/categories", req.nextUrl.origin)
    );
  if (pathname.startsWith("/cart")) {
    if (!user || user.userProducts.length < 1)
      return NextResponse.redirect(new URL("/#products", req.nextUrl.origin));
  }
  if(pathname.startsWith("/checkout") ){
    if(!user || user.userProducts.length < 1) return NextResponse.redirect(new URL("/#products",req.nextUrl.origin))
  }
});

export const config = {
  matcher: ["/login", "/register", "/", "/admin/:path*", "/manage-account","/cart/:path*","/checkout/:path*"],
};
