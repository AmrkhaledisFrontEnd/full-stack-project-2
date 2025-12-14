import Link from "next/link"
// =======================================================================
function AuthLinks() {

    return (
        <div className="flex items-center gap-3">
            <Link className="text-light bg-primary py-3 px-5 rounded-[7px] font-bold tracking-wider hover:scale-105 transition-css" href={"/login"}>Login</Link>
            <Link className="text-primary sm:block hidden bg-gray-50 py-3 px-5 rounded-[7px] font-bold tracking-wider hover:scale-105 transition-css" href={"/register"}>Register</Link>
        </div>
    )
}

export default AuthLinks
