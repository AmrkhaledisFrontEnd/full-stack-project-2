import Image from "next/image";
import Link from "next/link";
// ============================================================
export default function Footer() {
  const links = [
    { id: crypto.randomUUID(), linkName: "Home", url: "/" },
    { id: crypto.randomUUID(), linkName: "Explore", url: "/explore" },
    { id: crypto.randomUUID(), linkName: "Projects", url: "/projects" },
    { id: crypto.randomUUID(), linkName: "About Us", url: "/about" },
    { id: crypto.randomUUID(), linkName: "Contact Us", url: "/contact" },
  ];

  return (
    <footer className=" text-gray-500 py-10 mt-15">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href={"/"}>
            <Image
              src="/logo.svg"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full hover:scale-105 transition-css"
            />
          </Link>
        </div>

        {/* Links */}
        <div className="flex sm:space-x-6 space-x-4 sm:flex-nowrap flex-wrap sm:justify-start justify-center">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="hover:text-primary transition-colors"
            >
              {link.linkName}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}
