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
                    Release Date: Fall, 2025
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident.
                </p>
                <p className="text-sm font-bold mt-3 text-gray-800">
                  MORE INFO
                </p>
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
                    Release Date: Summer 2026
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident.
                </p>
                <p className="text-sm font-bold mt-3 text-gray-800">
                  MORE INFO
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* News Section */}
        <aside>
          <h2 className="text-3xl font-bold mb-0 font-serif">Latest News</h2>
          <Link
            className={`hover:underline ${lato.className} font-bold text-slate-400`}
            href="/NewsPage"
          >
            More News
          </Link>
          <div className="space-y-6">
            <div className="bg-white shadow-sm p-4">
              <h3 className="font-bold">
                Hominids - Genesis, a new series has started!
              </h3>
              <p className="text-xs text-gray-500 mb-2">
                Posted: July 14th, 2025 9:23:32 pm EDT
              </p>
              <p className="text-sm text-gray-700 font-serif">
                Tristan Nettles Begins Work on Groundbreaking New Series:
                Hominids – Genesis. Author Tristan Nettles has officially begun
                writing his ambitious new...
              </p>
              <p className="text-sm font-bold mt-2">READ MORE</p>
            </div>
            <div className="bg-white shadow-sm p-4">
              <h3 className="font-bold">
                The King - A Bronze Age Tale is finished!
              </h3>
              <p className="text-xs text-gray-500 mb-2">
                Posted: July 7th, 2025 6:31:24 pm EDT
              </p>
              <p className="text-sm text-gray-700 font-serif">
                Tristan finishes the final chapter of the epic 505s page follow
                up to The Shepherd - A Bronze Age Tale.
              </p>
              <p className="text-sm font-bold mt-2">READ MORE</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
