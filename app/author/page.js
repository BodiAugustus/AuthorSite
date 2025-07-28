"use client";

import { useState } from "react";
import Image from "next/image";

const photoGallery = [
  {
    src: "/slideshow/kids.jpg",
    alt: "July 10, 1997",
    caption: (
      <>
        My sister, cousin, and I
        <br />
        Man-O-War Cay, Abaco Bahamas
      </>
    ),
  },
  {
    src: "/slideshow/reunion.jpg",
    alt: "Family Reunion ",
    caption: (
      <>
        Lock Lyme Lodge
        <br />
        Family Reunion
      </>
    ),
  },
  {
    src: "/slideshow/usmc.jpg",
    alt: "Boot Camp",
    caption: (
      <>
        USMC Boot Camp
        <br />
        Parris Island, S.C.
      </>
    ),
  },
  {
    src: "/slideshow/lighthouse.jpg",
    alt: "Japanese Lighthouse",
    caption: (
      <>
        Japanese Lighthouse
        <br />
        Chuuk, Micronesia
      </>
    ),
  },
  {
    src: "/slideshow/PacificSailing.jpg",
    alt: "Japanese Lighthouse",
    caption: (
      <>
        Blue Water Sailing
        <br />
        Chuuk, Micronesia
      </>
    ),
  },
  {
    src: "/slideshow/shipwreck.jpg",
    alt: "Shipwreck",
    caption: (
      <>
        Shipwreck
        <br />
        Chuuk, Micronesia
      </>
    ),
  },
  {
    src: "/slideshow/chess.jpg",
    alt: "Chess",
    caption: (
      <>
        Chess
        <br />
        Pisar, Micronesia
      </>
    ),
  },
  {
    src: "/slideshow/monks.jpg",
    alt: "Monks",
    caption: (
      <>
        Little Monks
        <br />
        Adzom Monastary, Nepal
      </>
    ),
  },

  {
    src: "/slideshow/pirate.jpg",
    alt: "Pirate's Life",
    caption: (
      <>
        Pirate&nbsp;s Life
        <br />
        Thailand
      </>
    ),
  },
  {
    src: "/slideshow/ruins.jpg",
    alt: "Nan Madol Ruins",
    caption: (
      <>
        The Ruins of Nan Madol
        <br />
        Pohnpei, Micronesia
      </>
    ),
  },
  {
    src: "/slideshow/azom.jpg",
    alt: "Adzom Monastary",
    caption: (
      <>
        Adzom Monastary
        <br />
        Dallu, Nepal
      </>
    ),
  },
  {
    src: "/slideshow/writing.jpg",
    alt: "Coral Hill",
    caption: (
      <>
        Coral Hill
        <br />
        Koh Samui, Thailand
      </>
    ),
  },
  {
    src: "/slideshow/singing.jpg",
    alt: "Jam Bay",
    caption: (
      <>
        Jam Bay
        <br />
        Surat Thani, Thailand
      </>
    ),
  },

  {
    src: "/slideshow/wedding.jpg",
    alt: "Best Man",
    caption: (
      <>
        Best Man
        <br />
        Bangkok, Thailand
      </>
    ),
  },
  {
    src: "/slideshow/me.jpg",
    alt: "Coral Hill",
    caption: (
      <>
        Coral Hill
        <br />
        Koh Samui, Thailand
      </>
    ),
  },
  {
    src: "/slideshow/ashley.jpg",
    alt: "Ashley Oosthuizen",
    caption: (
      <>
        Ashley Oosthuizen
        <br />
        Surat Thani Prison, Thailand
      </>
    ),
  },
  {
    src: "/slideshow/ukraine.jpg",
    alt: "Ukrainian Mission",
    caption: (
      <>
        Before Attacking Dorozhnianka
        <br />
        Dorozhnianka, Ukraine
      </>
    ),
  },
  {
    src: "/slideshow/ukr.jpg",
    alt: "Remaining Squad",
    caption: (
      <>
        The Wolverines
        <br />
        Hulyaipole, Ukraine
      </>
    ),
  },
];

export default function AuthorPage() {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev === photoGallery.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? photoGallery.length - 1 : prev - 1));

  return (
    <main className="bg-white text-gray-800 px-6 md:px-12 lg:px-24 py-4 space-y-20">
      {/* Section: About the Author */}
      <section className="flex flex-col lg:flex-row items-start gap-8">
        <div className="lg:w-3/5 max-h-[80vh] overflow-y-auto pr-4 space-y-4">
          <h1 className="text-4xl font-serif font-semibold mb-4">The Author</h1>
          <p className="text-sm font-semibold text-gray-600">WRITTEN BY</p>
          <p className="mb-4">Jack Neeley</p>
          <p className="text-sm font-semibold text-gray-600">PHOTO CREDIT</p>
          <p className="mb-6">Ashley Oosthuizen</p>
          <p className="mb-4">
            Tristan Seth Nettles was born in Atlanta, Georgia, in 1987 with a
            severe speech impediment, the first son of Russ and Olga Nettles.
            After his parents divorced when he was eight, Tristan and his
            siblings, Josh and Tabi, lived primarily with their mother. Parts of
            his childhood were spent in Man-O-War Cay, in the Abaco Islands of
            the Bahamas, and the rest in the Atlanta area, where he fell in with
            the wrong crowds. After attending five middle schools and seven high
            schools, Tristan enlisted in the Marine Corps infantry, where he was
            stationed in Kaneohe Bay, Hawaii.
          </p>

          <p>
            Upon leaving the Marine Corps, following a home invasion and a stint
            in the brig, Tristan enrolled in a university Biology Program. In
            2015, directly after graduating with a B.S. in Biology, a restless
            spirit took Tristan far beyond U.S. borders—through remote Pacific
            islands, Himalayan trails, Southeast Asia, and Europe. His travels
            have left deep cultural imprints, grounding his storytelling in
            rich, authentic detail.
          </p>
          <p>
            But his path has not been ordinary. Tristan navigated the shadowed
            intersections of legality—using cryptocurrencies and the internet to
            import large amount of recreational drugs into Thailand to fund his
            medical school studies abroad, eventually leading to the arrest and
            imprisonment of his long time girlfriend, a South African woman
            named Ashley Oosthuizen. His creative work is not escapism but a
            reckoning with impulses past and present.
          </p>
          <p>
            His debut novel, The Shepherd: A Bronze Age Tale{" "}
            <span className="font-bold">(Histria Books, 2024)</span>, was
            written to bring awareness to Ashley&#39;s cause, along with a seven
            month stint in Ukraine fighting against Russia. Tristan&#39;s first
            novel debuted as a notoriously brutal and vivid vision of
            antiquity—a gritty coming-of-age tale immersed in love, sacrifice,
            and redemption. Praised for its “distinctive, narrative-driven
            storytelling” and stark portrayal of Bronze-Age life, it has earned
            rave ratings and an enthusiastic endorsement from the Midwest Book
            Review.
          </p>
          <p>
            Beyond his literary pursuits, Tristan balances a multifaceted life:
            living predominately internationally, currently on his fourth
            passport, and working in digital finance as a crypto consultant and
            funds manager, all while continuously advocating for Ashley
            Oosthuizen&#39;s release.
          </p>
          <p>
            Tristan Nettles writes with true conviction and authenticity—a man
            molded by real-world adventures, moral complexity, and an
            unflinching eye for human nature. His stories are as rugged as the
            Bronze Age, as layered as his own journey, and as unforgettable as
            the realities he explores.
          </p>
        </div>
        <div className="lg:w-2/5">
          <Image
            src="/selfie.jpg"
            alt="Tristan Nettles"
            width={400}
            height={600}
            className="rounded"
          />
        </div>
      </section>

      {/* Section: Press Biography */}
      <section>
        <h2 className="text-3xl font-serif font-semibold mb-6">
          Press Biography
        </h2>
        <p className="mb-4">
          Tristan Seth Nettles is an American author, combat veteran, and world
          traveler known for his intensely realistic storytelling. Born in
          Atlanta, GA in 1987, he overcame a severe speech impediment and a
          troubled youth before enlisting with the Marine Corps infantry and
          later earning a B.S. in Biology from the University of North Florida.
          His life has intersected at various times with crime, war, and
          technology, including a combat tour in Ukraine. Drawing from real-life
          grit, his writing explores the extremes of humanity with needle-like
          precision. He currently works as a crypto consultant and wealth
          manager for Ashley DeFi while continuing to advocate for Ashley
          Oosthuizen&#39;s release. Now, on his fourth passport, Nettles lives
          abroad full-time. His work fuses lived experience with historical
          scope, delivering fiction that is both timeless and deeply personal.
        </p>
        <p className="mb-4">
          Tristan lives in Puerto Rico, where he hopes to one day have a family
          and live in peace.
        </p>
      </section>

      {/* Section: Photo Gallery */}

      <section>
        <h2 className="text-3xl font-serif font-semibold mb-6">
          Photo Gallery
        </h2>
        <div className="flex items-center justify-center bg-sky-300 p-4 rounded-lg">
          <button
            onClick={prev}
            className="text-3xl px-4 text-gray-500 hover:text-black"
          >
            ‹
          </button>

          <div className="w-[1500px] overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${current * 300}px)`,
                width: `${photoGallery.length * 300}px`,
              }}
            >
              {photoGallery.map((photo, index) => (
                <div
                  key={index}
                  className="w-[300px] flex-shrink-0 text-center px-2"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={300}
                    height={300}
                    className="rounded shadow object-cover"
                  />
                  <p className="mt-2 text-sm">{photo.caption}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            className="text-3xl px-4 text-gray-500 hover:text-black"
          >
            ›
          </button>
        </div>
      </section>

      {/* Section: Film/TV Appearances */}
      <section>
        <h2 className="text-3xl font-serif font-semibold mb-6">
          Film/TV Appearances
        </h2>
        <p>Coming soon...</p>
      </section>

      {/* Section: Awards */}
      <section>
        <h2 className="text-3xl font-serif font-semibold mb-6">
          Awards & Nominations
        </h2>

        <div className="mb-6">
          <p>Coming soon...</p>
          {/* <h3 className="text-xl font-bold">Alex Awards</h3> */}
          {/* <div className="grid grid-cols-4 font-semibold border-b py-2">
            <div>Award Category</div>
            <div>Work</div>
            <div>Status</div>
            <div>Year</div>
          </div>
          <div className="grid grid-cols-4 border-b py-2">
            <div>Fiction</div>
            <div>Just After Sunset</div>
            <div>Winner</div>
            <div>2009</div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold">
            American Audio Publishers Association
          </h3>
          <div className="grid grid-cols-4 font-semibold border-b py-2">
            <div>Award Category</div>
            <div>Work</div>
            <div>Status</div>
            <div>Year</div>
          </div>
          <div className="grid grid-cols-4 border-b py-2">
            <div>Audie Award: Fiction, Unabridged</div>
            <div>
              The Talisman by Stephen King and Peter Straub. Narrated by Frank
              Muller.
            </div>
            <div>Winner</div>
            <div>2002</div>
          </div>
          <div className="grid grid-cols-4 border-b py-2">
            <div>Audie Award: Fiction</div>
            <div>Duma Key. Narrated by John Slattery.</div>
            <div>Winner</div>
            <div>2009</div>
          </div>
          <div className="grid grid-cols-4 border-b py-2">
            <div>Audie Award: Fiction</div>
            <div>Doctor Sleep. Narrated by Will Patton.</div>
            <div>Winner</div>
            <div>2014</div>
          </div>
          <div className="grid grid-cols-4 border-b py-2">
            <div>Audie Award: Thriller/Suspense</div>
            <div>The Institute (Narrated by Santino Fontana)</div>
            <div>Winner</div>
            <div>2020</div> */}
          {/* </div> */}
        </div>
      </section>
    </main>
  );
}
