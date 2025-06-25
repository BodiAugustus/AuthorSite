import { FaTwitter, FaTelegram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
export default function ContactPage() {
  return (
    <main className="bg-white text-gray-800 px-6 md:px-12 lg:px-24 py-20 min-h-screen">
      <section className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-4xl font-serif font-semibold">Contact</h1>
        <h3 className="text-2xl font-serif font-semibold">
          Want to Reach out to the Author?
        </h3>
        <p className="text-lg">
          For all inquiries and communication, please contact Tristan Nettles
          through one of his official social media accounts below.
        </p>

        <div className="flex justify-center gap-10 mt-10">
          <Link
            href="https://t.me/BodiYamma"
            target="_blank"
            aria-label="Telegram"
          >
            <FaTelegram className="text-4xl text-blue-500 hover:text-blue-700 transition duration-300" />
          </Link>
          <Link
            href="https://x.com/tristan_nettles"
            target="_blank"
            aria-label="Twitter"
          >
            <FaTwitter className="text-4xl text-blue-400 hover:text-blue-600 transition duration-300" />
          </Link>
        </div>

        <div className="relative w-full h-[200px] md:h-[200px] lg:h-[200px] mt-16 rounded overflow-hidden shadow-lg">
          <Image
            src="/shepherd.png" // Replace with your Canva image
            alt="Call to Action Billboard"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            {/* Optional: add overlay text/buttons here if you ever want */}
          </div>
        </div>
      </section>
    </main>
  );
}
