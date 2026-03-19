"use client";
import { useState } from "react";

const worksData = [
  {
    title: "The Shepherd - A Bronze Age Tale",
    type: "Historical Fiction",
    date: "March 11, 2024",
    url: "https://www.theshepherdnovel.com",
  },
  {
    title: "The King - A Bronze Age Tale II",
    type: "Historical Fiction",
    date: "September 22, 2026",
    url: "https://thekingsaga.com",
  },
  {
    title: "False Positive",
    type: "Commercial NonFiction",
    date: "October 20, 2026",
    url: "https://FalsePositiveNovel.com",
  },
];

export default function WorksPage() {
  const [sortKey, setSortKey] = useState("title"); // ← FIXED HERE

  const sortedWorks = [...worksData].sort((a, b) => {
    if (sortKey === "date") {
      // Sort dates newest → oldest
      return new Date(b.date) - new Date(a.date);
    }
    // Default: alphabetical by title
    return a.title.localeCompare(b.title);
  });

  return (
    <div className="p-6 md:p-10 lg:p-16 min-h-[550px]">
      <h1 className="text-3xl md:text-4xl font-bold font-serif mb-8">
        Written Works
      </h1>

      {/* Optional sorting controls – uncomment when ready */}
      {/* <div className="flex gap-4 mb-6">
        <button
          onClick={() => setSortKey("title")}
          className={`px-4 py-2 rounded ${sortKey === "title" ? "bg-amber-600 text-white" : "border border-gray-500"}`}
        >
          Title
        </button>
        <button
          onClick={() => setSortKey("date")}
          className={`px-4 py-2 rounded ${sortKey === "date" ? "bg-amber-600 text-white" : "border border-gray-500"}`}
        >
          Date
        </button>
      </div> */}

      <div className="overflow-x-auto">
        <table className="w-full border-t border-gray-300">
          <thead>
            <tr className="text-left border-b border-gray-300">
              <th className="p-3 font-semibold">Title</th>
              <th className="p-3 font-semibold">Genre</th>
              <th className="p-3 font-semibold">Publication Date</th>
            </tr>
          </thead>
          <tbody>
            {sortedWorks.map((work, index) => (
              <tr
                key={index}
                onClick={() =>
                  window.open(work.url, "_blank", "noopener,noreferrer")
                }
                className="cursor-pointer border-b border-gray-200 hover:bg-amber-950/30 transition-colors"
              >
                <td className="p-3 font-medium">{work.title}</td>
                <td className="p-3">{work.type}</td>
                <td className="p-3">{work.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
