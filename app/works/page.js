// app/works/page.tsx
"use client";
import { useState } from "react";

const worksData = [
  {
    title: "The Shepherd - A Bronze Age Tale",
    type: "Historical Fiction",
    date: "March 11th, 2024",
  },
  // { title: "'Salem's Lot", type: "Limited Edition", date: "October 2004" },
  // { title: "11/22/63", type: "Novel", date: "November 8th, 2011" },
  // { title: "1408", type: "Short Story", date: "March 2002" },
  // { title: "1922", type: "Short Story", date: "November 2010" },
  // { title: "A Book of Horrors", type: "Anthology", date: "September 2011" },
];

export default function WorksPage() {
  const [sortKey, setSortKey] = useState("title");

  const sortedWorks = [...worksData].sort((a, b) =>
    a[sortKey].localeCompare(b[sortKey])
  );

  return (
    <div className="p-6 md:p-10 lg:p-16 md:min-h-[550px]">
      <h1 className="text-3xl md:text-4xl font-bold font-serif mb-8">
        Written Works - A to Z
      </h1>

      {/* <div className="flex gap-4 mb-4">
        <button
          onClick={() => setSortKey("title")}
          className="border px-4 py-1 rounded"
        >
          Title
        </button>
        <button
          onClick={() => setSortKey("date")}
          className="border px-4 py-1 rounded"
        >
          Published Date
        </button>
      </div> */}

      <div className="overflow-x-auto">
        <table className="w-full border-t border-gray-300">
          <thead>
            <tr className="text-left border-b border-gray-300">
              <th className="p-2 font-semibold">Title</th>
              <th className="p-2 font-semibold">Genre</th>
              <th className="p-2 font-semibold">Date of Publication</th>
            </tr>
          </thead>
          <tbody>
            {sortedWorks.map((work, index) => (
              <tr
                key={index}
                onClick={() =>
                  window.open("https://www.TheShepherdNovel.com", "_blank")
                }
                className="cursor-pointer border-b border-gray-200 hover:bg-blue-200"
              >
                <td className="p-2">{work.title}</td>
                <td className="p-2">{work.type}</td>
                <td className="p-2">{work.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
