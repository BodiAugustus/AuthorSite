import Image from "next/image";
import Link from "next/link";
import { cinzel, lato } from "../font";

export default function ComingSoon() {
  return (
    <section className="w-full px-4 py-16 md:py-6 bg-white">
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2
            className={`text-4xl font-bold mb-4 tracking-tighter ${cinzel.className}`}
          >
            Coming Soon
          </h2>
          <div className="grid gap-8 md:gap-0 md:grid-cols-2">
            {/* Card 1 */}
            <div className="relative bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto max-h-[500px]">
              {/* Blurred background image */}
              <div className="absolute inset-0 z-0 scale-110 blur-md p-5">
                <Image
                  src="/shepherd.png"
                  alt="Blurred background"
                  width={300}
                  height={300}
                  className="object-cover "
                />
              </div>

              {/* Foreground book cover image */}
              <div className="relative z-10">
                <Image
                  src="/comingSoon.jpeg"
                  alt="The Shepherd Cover"
                  width={125}
                  height={200}
                  className="mx-auto rounded shadow-md mt-2 mb-2"
                />

                {/* Torn ribbon */}
                <div className="absolute top-3 left-1/3 transform -translate-x-1/4 z-20">
                  <div className="relative bg-red-700 text-white font-bold text-xs px-4 py-1 shadow-lg">
                    Release Date: Fall, 2026
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45 -ml-1"></span>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45 -mr-1"></span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="p-4 relative z-10 bg-white bg-opacity-90">
                <h3 className="text-xl font-bold text-gray-900">
                  False Positive
                </h3>
                <p className="mt-2 text-gray-700 text-sm font-serif">
                  From a troubled childhood in the American South to the
                  battle-scarred fields of Ukraine,{" "}
                  <strong>Tristan Seth Nettles</strong> has lived a life that
                  almost defies belief. Born between wealth and poverty, armed
                  with stubborn determination and a restless spirit, Tristan
                  navigates a world that seems determined to break him to
                  it&#39;s mold — and somehow survives, grows stronger, and
                  fights back.
                </p>
                <Link
                  href="/upcoming-works"
                  className="text-sm font-bold mt-3 text-gray-800"
                >
                  MORE INFO
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto max-h-[500px]">
              {/* Blurred background image */}
              <div className="absolute inset-0 z-0 scale-110 blur-md p-5">
                <Image
                  src="/shepherd.png"
                  alt="Blurred background"
                  width={300}
                  height={300}
                  className="object-cover "
                />
              </div>

              {/* Foreground book cover image */}
              <div className="relative z-10">
                <Image
                  src="/comingSoon.jpeg"
                  alt="The Shepherd Cover"
                  width={125}
                  height={200}
                  className="mx-auto rounded shadow-md mt-2 mb-2"
                />

                {/* Torn ribbon */}
                <div className="absolute top-3 left-1/3 transform -translate-x-1/4 z-20">
                  <div className="relative bg-red-700 text-white font-bold text-xs px-4 py-1 shadow-lg">
                    Release Date: Summer 2027
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45 -ml-1"></span>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45 -mr-1"></span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="p-4 relative z-10 bg-white bg-opacity-90">
                <h3 className="text-xl font-bold text-gray-900">
                  The King - A Bronze Age Tale
                </h3>
                <p className="mt-2 text-gray-700 text-sm font-serif">
                  In a brutal world shaped by bronze and blood,{" "}
                  <strong>Pan Shepherd</strong> returns — no longer a slave, but
                  a man driven by love, vengeance, and an unrelenting
                  determination to rescue Beocca, who was abducted during their
                  wedding by a sadistic prince-turned-king. Set against the
                  sweeping backdrop of a collapsing kingdom and a rising
                  warlord, <em>The King – A Bronze Age Tale</em> continues the
                  saga of the shepherd destined to become a king.
                </p>
                <Link
                  href="/upcoming-works"
                  className="text-sm font-bold mt-3 text-gray-800"
                >
                  MORE INFO
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* News Section */}
        <aside>
          <h2 className="text-3xl font-bold mb-0 font-serif">Latest News</h2>
          <Link
            className={`hover:underline ${lato.className} font-bold text-slate-400`}
            href="/news"
          >
            More News
          </Link>
          <div className="space-y-6">
            <div className="bg-white shadow-sm p-4">
              <h3 className="font-bold">Update on U.S. Distribution Changes</h3>
              <p className="text-xs text-gray-500 mb-2">
                Posted: September 8th, 2025 8:47:34 pm EDT
              </p>
              <p className="text-sm text-gray-700 font-serif">
                Tristan Nettles publisher, Histria Books, is excited to share
                that their transition from IPG to Simon & Schuster distribution
                is well underway. This move...
              </p>
              <Link href="news" className="text-sm font-bold mt-2">
                READ MORE
              </Link>
            </div>
            <div className="bg-white shadow-sm p-4">
              <h3 className="font-bold">Update on Worldwide Distribution</h3>
              <p className="text-xs text-gray-500 mb-2">
                Posted: August 28th, 2025 12:39:15 pm EDT
              </p>
              <p className="text-sm text-gray-700 font-serif">
                Histria Books has joined forces with Forefront Books to create
                the Unified Publishing Group (UPG). In July, UPG acquired the
                Unicorn Publishing Group in the United Kingdom....
              </p>
              <Link href="news" className="text-sm font-bold mt-2">
                READ MORE
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
