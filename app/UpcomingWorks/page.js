"use client";
import Image from "next/image";
import Link from "next/link";

const upcomingWorks = [
  {
    title: "False Positive",
    releaseDate: "Fall, 2025",
    description1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    description2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    description3:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    available:
      "False Positive will be available in most English-language markets in the Fall of 2025.",
    image: "/bookCover.jpeg",
    category: "Commercial Nonfiction",
  },
  {
    title: "The King - A Bronze Age Tale",
    releaseDate: "Summer, 2026",
    description1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    description2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    description3:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    available:
      "The King - A Bronze Age Tale will be available in most in most English-language markets by Summer, 2026.",
    image: "/bookCover.jpeg",
    category: "Historical Fiction",
  },
  // More books can be added here
];

export default function UpcomingWorks() {
  return (
    <section
      className="py-20 px-6 md:px-12 lg:px-24
    bg-fixed bg-center bg-cover bg-no-repeat relative"
      style={{ backgroundImage: "url('/navBG.png')" }}
    >
      <h1 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 mb-4">
        Upcoming Works
      </h1>
      <h2 className="text-2xl font-serif text-gray-900 mb-6">Novels</h2>

      {upcomingWorks.map((book, index) => (
        <div
          key={index}
          className="mb-16 rounded-lg flex flex-col lg:flex-row items-start gap-10 bg-white p-4"
        >
          <Image
            src={book.image}
            alt={book.title}
            width={300}
            height={350}
            className="object-cover rounded shadow-md hover:cursor-grab active:cursor-grabbing hover:scale-105 active:scale-100 transition-transform duration-300 transform"
            onClick={() =>
              window.open(
                "https://www.amazon.com/Shepherd-Bronze-Age-Tale/dp/1592113842",
                "_blank"
              )
            }
          />

          <div>
            <p className="uppercase text-xs font-light text-gray-600 mb-1">
              {book.category}
            </p>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">
              {book.title}
            </h3>
            <p className="text-red-600 font-semibold mb-4">
              Release Date: {book.releaseDate}
            </p>
            <p className="text-gray-800 mb-4">{book.description1}</p>
            <p className="text-gray-800 mb-4">{book.description2}</p>
            <p className="text-gray-800 mb-4">{book.description3}</p>
            <p className="text-gray-800 italic">{book.available}</p>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded">
              Pre-Order Now!
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
