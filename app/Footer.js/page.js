import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { HiX } from "react-icons/hi";

export default function Footer() {
  return (
    <footer
      className="pt-6 border-t border-gray-200 py-1 px-6 md:px-12 lg:px-20 text-sm text-gray-700
    bg-fixed bg-center bg-cover bg-no-repeat relative"
      style={{ backgroundImage: "url('/navBG.png')" }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center">
        {/* Links */}
        <div className="grid grid-cols-3 gap-4 text-center lg:text-left">
          <div className="flex flex-col">
            <Link className="font-semibold text-black" href="/author">
              The Author
            </Link>
            <Link href="/news">News</Link>
            <Link href="/faqs">FAQs</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="flex flex-col">
            <Link
              className="font-semibold text-black"
              href="/#newsletter"
              scroll={true}
            >
              Newsletter
            </Link>
            <Link href="/miscellaneous">Miscellaneous</Link>
            <Link href="https://www.AshleyDefi.com" target="_blank">
              Ashley DeFi
            </Link>
            <Link href="/works">All Works</Link>
          </div>
          <div className="flex flex-col">
            <Link className="font-semibold text-black" href="/upcoming-works">
              Upcoming
            </Link>
            <Link href="/new-releases">New Releases</Link>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center gap-6 mx-auto">
          <a
            href="https://x.com/tristan_nettles"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-4xl" />
          </a>
          <a
            href="https://t.me/BodiYamma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane className="text-4xl" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCH0pbCOJJF0BuSqjRblf0FA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-4xl" />
          </a>
        </div>

        {/* Tower image */}
        <div className="sm:mt-8 lg:mt-0 mx-auto">
          <Image
            src="/watch.png"
            alt="Dark Tower Silhouette"
            width={150}
            height={150}
            className="mx-auto lg:mx-0"
          />
        </div>
      </div>

      {/* Bottom Text */}
      <div className="sm:mt-10 text-center text-xs text-gray-500">
        <p>© Copyright 2026 Tristan Nettles - All Rights Reserved. &nbsp;</p>
      </div>
    </footer>
  );
}
