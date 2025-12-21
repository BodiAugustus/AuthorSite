"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { playfair, cinzel, lato } from "@/app/font";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header
      className="w-full px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between bg-fixed bg-center bg-cover bg-no-repeat relative"
      style={{ backgroundImage: "url('/navBG.png')" }}
    >
      <Link
        className={`text-3xl font-bold tracking-widest ${cinzel.className}`}
        href="/"
      >
        TRISTAN
        <br />
        NETTLES
      </Link>

      <nav>
        <ul
          className={` flex flex-wrap justify-center gap-6 text-sm md:text-base font-light ${lato.className}`}
        >
          {[
            { label: "Works", href: "/works" },
            { label: "Upcoming", href: "/upcoming-works" },
            { label: "The Author", href: "/author" },
            { label: "News", href: "/news" },
            { label: "FAQ", href: "/faqs" },
            {
              /* { label: "Ashley DeFi", href: "https://www.ashleydefi.com" }, */
            },
          ].map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`relative pb-1 transition-all duration-200
                  ${
                    pathname === href
                      ? "border-b-2 border-red-400 font-semibold"
                      : "border-b-2 border-transparent hover:border-slate-600"
                  }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
