"use client";
import { useState } from "react";
import Image from "next/image";

const newsItems = [
  {
    title: "Update on U.S. Distribution Changes",
    date: "Posted: September 8th, 2025 8:47:34 pm EDT",
    content: `Tristan Nettles publisher, Histria Books, is excited to share that their transition from IPG to Simon & Schuster distribution is well underway. This move gives Histria Books access to state-of-the-art systems and the industry’s leading sales force, expanding our reach and creating new opportunities for every author, including Tristan. Distribution via Simon & Schuster begins January 1, 2026.`,
    youtubeEmbed: "",
    image: "",
  },
  {
    title: "Writing Epic",
    date: "Posted: August 19th, 2025 10:30:05 am EDT",
    content: `As Tristan Nettles carves out his fourth novel, he reflects on a life that fuels his storytelling—a tapestry of raw experiences that most could hardly imagine. Each novel, from *The Shepherd* to his latest work in progress, channels the grit and heart of a life lived boldly. This week, Tristan’s been immersed in writing, promising a story that pulses with riveting authenticity. Fans can catch glimpses of his process and musings on his X profile (@tristan_nettles). Keep an eye out for more as this prolific author’s next chapter unfolds!`,
    youtubeEmbed: "",
    image: "/sc.png",
  },
  {
    title: "Diving Deeper into Hominids – Genesis",
    date: "    Posted: August 8th, 2025 6:48:43 pm EDT",
    content: `This week's focus has been on character development for the young protagonist, exploring themes of identity, alliance, and conflict in a largely pre-linguistic era driven by instinct and emotion. Fans can expect another excerpt shared soon on Tristan's X profile—follow @tristan_nettles for real-time glimpses into this groundbreaking saga. Stay tuned as the journey toward supremacy unfolds!`,
    youtubeEmbed: "",
    image: "",
  },
  {
    title: "Excerpt from: Hominids - Genesis",
    date: "    Posted: July 29th, 2025 11:08:18 am EDT",
    content: `Readers and fans can now enjoy the first short excerpt from Tristan Nettles newest series, Hominids, which seeks to chart the journey of five distinct species of early humans on the island of Java, 55,000 years ago, as they all vye for survival and supremecy. Be sure to follow Tristan on his X profile to see all of the latest excerpts as they are posted!`,
    youtubeEmbed: "",
    image: "/excerpt1.png",
  },
  {
    title: "Expanding Our Reach: – New Partnerships to Empower Your Books",
    date: "Posted: July 24th, 2025 3:13:08 pm EDT",
    content: `Tristan Nettles will receive unprecedented levels of exposure for his upcoming and future works, thanks to multiple large aquistion and partnership deals undertaken by his publisher Histria Books. Per their most recent newsletter: On the heels of our previous announcement that Simon & Schuster will provide sales and distribution services for Histria Books in the United States and Canada beginning January 1, 2026, we are thrilled to share two exciting new announcements that mark the next chapter in our growth—and yours. These developments are designed to enhance sales and distribution, increase discoverability, and open new markets for Histria Books and our authors. In a landmark move to expand our international presence, Histria Books has joined forces with Forefront Books, based in Nashville, to acquire the Unicorn Publishing Group in the United Kingdom and to launch the Unified Publishing Group (UPG). The Unified Publishing Group brings together three respected publishers to: Strengthen global distribution—including expanded access to the UK, Europe, and other international markets; Launch co-publishing initiatives across genres and territories; Support authors with deeper editorial and marketing resources; Through UPG, Histria authors will benefit from new global exposure, potential co-publishing opportunities, and an unparalleled new international distribution network.
`,
    youtubeEmbed: "",
  },
  {
    title: "Research deep dive underway for Hominids – Genesis",
    date: "Posted: July 23th, 2025 11:02:46 am EDT",
    content: `With The King – A Bronze Age Tale now signed and scheduled for release, Tristan Nettles is wasting no time digging deeper into his next epic: Hominids – Genesis. This week, he’s been immersed in research to bring historical, cultural, and evolutionary accuracy to this bold prehistoric saga. From early human tool use and interspecies conflict to ancient climate shifts and survival strategies, each element is being woven with care and intensity. The groundwork laid now will shape a gripping story of love, loss, and survival in a world without modern language — but full of raw human emotion. Stay tuned for more insights and sneak peeks as the series continues to evolve.
`,
    youtubeEmbed: "",
  },
  {
    title: "Publishing contract for, 'The King - A Bronze Age Tale,' signed!",
    date: "Posted: July 16th, 2025 6:31:12 am EDT",
    content: `Tristan Nettles has signed a new publishing agreement covering 'The King - A Bronze Age Tale' which will be published by Histria Books and Simon & Schuster! This marks Tristan's third traditionally published novel, and amounts to over 1450 pages in under five years! With work already started on a brand new series, titled, 'Hominids,' there are still many more stories left to be told! Stay tuned!
`,
    youtubeEmbed: "",
  },
  {
    title: "Hominids - Genesis has started!",
    date: "Posted: July 14th, 2025 9:23:32 pm EDT",
    content: `Tristan Nettles Begins Work on Groundbreaking New Series: Hominids – Genesis. Author Tristan Nettles has officially begun writing his ambitious new multi-book series, Hominids – Genesis. The story follows a young ancient boy coming of age in a mysterious land where five early human species coexist, compete, and clash over scarce resources — a world where only one will ultimately survive. Blending commercial fiction, evolutionary science, and spiritual themes, this bold new series promises to explore what it means to be human in a time before history, in a way readers have never seen before. Stay tuned for more updates as this groundbreaking saga unfolds.
`,
    youtubeEmbed: "",
  },
  {
    title: "The King - A Bronze Age Tale is finished!",
    date: "Posted: July 7th, 2025 6:31:24 pm EDT",
    content: `Tristan finishes the final chapter of the epic 505 page follow
    up to The Shepherd - A Bronze Age Tale. This thirty chapter masterpiece follows Pan Shepherd as he leads a rebellion that ultimately topples a centuries old kingdom under the control of a sadistic prince turned king. The novel, the third written by Tristan, will be published by Simon & Schuster, so look for it at a bookstore near you soon!`,
    youtubeEmbed: "",
  },
  {
    title: "False Positive Publication Date Announced",
    date: "    Posted: July 3rd, 2025 1:12:53 pm EDT",
    content: `Award-winning publisher Histria Books — now part of the Simon & Schuster family — has officially announced the release of the long-awaited true account of the Ashley Oosthuizen saga, coming Fall 2026. Spanning 710 pages, this global odyssey is a raw, unforgettable journey — equal parts David Copperfield, Forrest Gump, and Requiem for a Dream. It’s a modern epic of war, crime, sex, drugs, corruption, betrayal, and wrongful imprisonment — all drawn from real events that expose the uncomfortable truths of our modern world from multiple, often unflattering angles. Heartbreaking and profound, this generational story pulls no punches — and every word is true. Keep your eyes on bookstore shelves this fall. This is one book you won't want to miss.`,
    youtubeEmbed: "",
  },
  {
    title: "New Author Website Posted",
    date: "    Posted: June 20th, 2025 9:53:06 am EDT",
    content: `Readers and fans can now explore the newly launched official website of author Tristan Nettles, designed to make it easier than ever to connect, follow his journey, and stay up to date on current and upcoming works. The site features exclusive updates, book announcements, and behind-the-scenes content — all in one place. Stay tuned for regular updates and insights from the author himself.`,
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
