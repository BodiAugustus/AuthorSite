// app/new-releases/page.tsx
import Image from "next/image";
import { cinzel } from "../font";

export const metadata = {
  title: "New Releases | Tristan Nettles",
  description:
    "Explore the latest books by Tristan Nettles. From Bronze Age battles to modern conspiracies, read what’s new.",
  keywords: [
    "new book releases",
    "Tristan Nettles latest books",
    "Bronze Age historical fiction",
    "thriller author new books",
  ],
  alternates: {
    canonical: "https://www.tristannettles.com/new-releases",
  },
  openGraph: {
    title: "New Releases | Tristan Nettles",
    description:
      "Get the latest books from historical fiction and thriller author Tristan Nettles.",
    url: "https://www.tristannettles.com/new-releases",
    images: [
      {
        url: "https://www.tristannettles.com/preview.png",
        width: 1200,
        height: 630,
        alt: "New Books by Tristan Nettles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Latest Books by Tristan Nettles",
    description:
      "Don’t miss the newest additions to the Tristan Nettles collection.",
    images: ["https://www.tristannettles.com/preview.png"],
  },
};

export default function NewReleases() {
  return (
    <section
      className="min-h-screen px-4 py-12 md:px-20 md:py-6
    bg-fixed bg-center bg-cover bg-no-repeat relative"
      style={{ backgroundImage: "url('/navBG.png')" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1
          className={`text-3xl md:text-5xl font-bold text-gray-900 mb-10 tracking-tighter ${cinzel.className}`}
        >
          New Releases
        </h1>

        {/* Content wrapper */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Book Cover */}
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <Image
              src="/comingSoon.jpeg" // Replace with actual image path
              alt="Upcoming soon"
              width={300}
              height={450}
              className="shadow-lg rounded"
            />
          </div>

          {/* Book Description */}
          <div className="text-gray-800 text-lg space-y-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                False Positive
              </h2>
              <p className="text-sm text-gray-500">
                Release Date: October 20th, 2026
              </p>
            </div>
            {/* Scrollable content area */}
            <div className="max-h-[60vh] overflow-y-auto pr-4 space-y-6 bg-white p-2 rounded-md">
              <p className="font font-serif">
                From a troubled childhood in the American South to the
                battle-scarred fields of Ukraine,{" "}
                <strong>Tristan Seth Nettles</strong> has lived a life that
                almost defies belief. Born between wealth and poverty, armed
                with stubborn determination and a restless spirit, Tristan
                navigates a world that seems determined to break him to it&#39;s
                mold — and somehow survives, grows stronger, and fights back.
              </p>
              <p className="font font-serif">
                <em>False Positive</em> is the true story of a man who outruns
                his past but never forgets it. As a rambunctious youth, soldier,
                international dark web drug dealer, outlaw, lover, and
                mercenary, Tristan travels the world — from armed home invasions
                in Mississippi to mountain top temples in Nepal, from Southeast
                Asian prisons to battlefields in Eastern Europe — chasing truth,
                redemption, and ultimately, justice. When the woman he loves,
                Ashley Oosthuizen, is wrongfully imprisoned and sentenced to
                death in Thailand, Tristans&#39; mission becomes clear. What
                began as a reckless search for freedom turns into an
                international fight for someone else&#39;s.
              </p>
              <p className="font font-serif">
                Told with dark humor, brutal honesty, and heart-stopping
                intensity, <strong>False Positive</strong> is a modern epic — a
                real-life odyssey in the spirit of <em>Forrest Gump</em> and{" "}
                <em>Catch Me If You Can</em>. It&#39;s a raw, unforgettable
                journey through love, loss, crime, war, and the deep, messy
                beauty of being human.
              </p>

              <p className="font font-serif italic font-bold">
                False Positive is available for preorder now — in hardcover,
                ebook, and audiobook — only at Histria Books!
              </p>
            </div>

            <button className="mt-4 px-4 py-2 bg-black text-white rounded">
              Order Now!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
