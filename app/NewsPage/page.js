"use client";
import { useState } from "react";
import Image from "next/image";

const newsItems = [
  {
    title: "The King - A Bronze Age Tale is finished!",
    date: "Posted: June 30th, 2025 3:51:24 pm EDT",
    content: `Tristan finishes the final chapter of the epic 500 page follow
    up to The Shepherd - A Bronze Age Tale. This thirty chapter masterpiece follows.....will be sent to.........`,
    youtubeEmbed: "",
    image: "/shepherd.png",
  },
  {
    title: "False Positive Publication Date Announced",
    date: "    Posted: August 7th, 2025 12:00:00 pm EDT",
    content: ` Award-winning publishing house, Histria Books, announced the
                long awaited true tale about the Ashley Oosthuizen Saga.`,
    youtubeEmbed: "",
  },
  {
    title: "New Author Website Posted",
    date: "    Posted: June 20th, 2025 12:00:00 pm EDT",
    content: ` A brand new author site for Tristan Nettles has been posted online for readers and fans to more easily connect and stay involved with the writer. Stay tuned for regular updates!`,
    youtubeEmbed: "",
    image: "/phangan3.jpg",
  },
  // Add more news objects as needed
];

const ITEMS_PER_PAGE = 10;

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = newsItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(newsItems.length / ITEMS_PER_PAGE);

  return (
    <main className="bg-white text-gray-800 px-6 md:px-12 lg:px-24 py-12">
      <h1 className="text-4xl font-serif font-bold mb-8">News</h1>
      {currentItems.map((item, index) => (
        <article key={index} className="mb-16 border-b pb-6">
          <h2 className="text-2xl font-serif font-semibold mb-2">
            {item.title}
          </h2>
          <p className="text-sm text-gray-500 mb-2">Posted: {item.date}</p>
          <p className="mb-4">{item.content}</p>
          {item.youtubeEmbed && (
            <div className="aspect-video w-full max-w-2xl">
              <iframe
                className="w-full h-full"
                src={item.youtubeEmbed}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          {item.image && (
            <div className=" w-full max-w-2xl">
              <Image
                src={item.image}
                alt="Blurred background"
                width={300}
                height={300}
                className="object-cover "
              />
            </div>
          )}
        </article>
      ))}

      <div className="flex justify-between mt-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-sm font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </main>
  );
}
