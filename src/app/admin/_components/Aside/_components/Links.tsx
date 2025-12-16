"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { FaListAlt } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
// =================================================================================================
function Links() {
  const pathname = usePathname()
  const links = [
    { id: crypto.randomUUID(), linkName: "Categories", url: "/admin/categories", icon: <FaListAlt /> },
    { id: crypto.randomUUID(), linkName: "Products", url: "/admin/products", icon: <FaBoxOpen /> },
    { id: crypto.randomUUID(), linkName: "Users", url: "/admin/users", icon: <FaUser /> },
  ]
  return (
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.id}>
          <Link className={`flex items-center py-2 bg-gray-300 px-4 rounded-xl gap-3 text-white text-xl hover:bg-primary hover:text-white transition-css ${pathname.startsWith(link.url) && "bg-primary"}`} href={link.url}>
            <i className="text-2xl">{link.icon}</i>  {link.linkName}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Links
