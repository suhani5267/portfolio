"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur bg-gray-900/60 border-b border-gray-800 z-50">
      <div className="max-w-5xl mx-4  py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          Suhani Kaushik<span className="text-gray-100"> | Portfolio</span>
        </Link>

        <div className="flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                pathname === link.href
                  ? "text-blue-400 font-semibold"
                  : "text-gray-300 hover:text-blue-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
