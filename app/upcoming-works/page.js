"use client";
import Image from "next/image";
import Link from "next/link";

const upcomingWorks = [
  {
    title: "False Positive",
    releaseDate: "October 20th, 2026",
    description1:
      "From a troubled childhood in the American South to the battle-scarred fields of Ukraine, Tristan Seth Nettles has lived a life that almost defies belief. Born between wealth and poverty, armed with stubborn determination and a restless spirit, Tristan navigates a world that seems determined to break him to it's mold — and somehow survives, grows stronger, and fights back.",
    description2:
      "False Positive is the true story of a man who outruns his past but never forgets it. As a rambunctious youth, soldier, international dark web drug dealer, outlaw, and mercenary, Tristan travels the world — from armed home invasions in Mississippi to mountain top temples in Nepal, from Southeast Asian prisons to battlefields in Eastern Europe — chasing truth, redemption, and ultimately, justice. When the woman he loves, Ashley Oosthuizen, is wrongfully imprisoned and sentenced to death in Thailand, Tristan's mission becomes clear. What began as a reckless search for freedom turns into an international fight for someone else's. ",
    description3:
      "Told with dark humor, brutal honesty, and heart-stopping intensity, False Positive is a modern epic — a real-life odyssey in the spirit of Forrest Gump and Catch Me If You Can. It's a raw, unforgettable journey through love, loss, crime, war, and the deep, messy beauty of being human.",
    available: "",
    image: "/comingSoon.jpeg",
    category: "Commercial Nonfiction",
  },
  {
    title: "The King - A Bronze Age Tale",
    releaseDate: "September 22nd, 2026",
    description1:
      "In a brutal world shaped by bronze and blood, Pan Shepherd returns — no longer a slave, but a man driven by love, vengeance, and an unrelenting determination to rescue Beocca, who was abducted during their wedding by a sadistic prince-turned-king.",
    description2:
      "Set against the sweeping backdrop of a collapsing kingdom and a rising warlord, The King – A Bronze Age Tale continues the saga of the shepherd destined to become a king. As better-trained and better-equipped enemy armies close in, Pan must navigate overwhelming odds, betrayal, and court intrigue — not only to survive, but to reclaim the woman he loves.",
    description3:
      " Rich in historical detail, political intrigue, and haunting emotion, this epic sequel to The Shepherd cements Tristan Nettles’ place as a rising voice in historical fiction. The King is a powerful tale of war, leadership, and love — where loyalty endures, and nothing is more sacred than the bonds we fight to protect.",
    available: "",
    image: "/comingSoon.jpeg",
    category: "Commercial Fiction",
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
