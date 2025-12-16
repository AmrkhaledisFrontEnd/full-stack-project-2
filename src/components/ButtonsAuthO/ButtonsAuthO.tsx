import Image from "next/image"
import googleImage from "../../images/google.png"
import githubImage from "../../images/github.png"
import { signIn } from "next-auth/react"
// ========================================================================================================
function ButtonsAuthO() {
    const handleSignWithGoogle = async () => {
        await signIn("google", { callbackUrl: "/" })
    }
    return (
        <div className="flex flex-col gap-3">
            <button type="button" onClick={handleSignWithGoogle} className="hover:rotate-1 flex items-center gap-3 border justify-center hover:border-primary transition-css border-gray-300 py-2 px-4 rounded-xl cursor-pointer w-full"><Image className="w-7.5" src={googleImage} alt="Google Image" /> Continue with Google</button>
            <button type="button" className="hover:rotate-1 flex items-center gap-3 border justify-center hover:border-primary transition-css border-gray-300 py-2 px-4 rounded-xl cursor-pointer w-full"><Image className="w-9" src={githubImage} alt="Google Image" /> Continue with Github</button>
        </div>
    )
}

export default ButtonsAuthO
