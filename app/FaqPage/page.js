"use client";
import { useState } from "react";

const faqs = {
  General: [
    {
      question: "Do you have any social media pages?",
      answer:
        "Yes. You can follow Tristan Nettles on his verified X account by clicking on the relevant icon at the bottom of the page.",
    },
    {
      question: "What is the story behind Ashley Oosthuizen's imprisonment?",
      answer: `
          Ashley Oosthuizen was arrested after being coerced into signing her
          name on a package that did not belong to her containing MDMA.
          Interested parties can learn more about Ashley Oosthuizen and her
          story by visiting
          <a
            href="https://www.FreeAshley.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-400"
          >
            FreeAshley.org
          </a>
          and by following her Facebook page,
           <a
            href="https://www.facebook.com/p/A-voice-for-Ashley-Oosthuizen-100082862406906/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-400"
          >
            <em>A Voice for Ashley Oosthuizen</em>
          </a>
          .`,
    },
    {
      question:
        "Why did you serve in Ukraine, and what was that experience like?",
      answer: `I went to Ukraine to help raise awareness for Ashley Oosthuizen's cause. By fighting for other people's freedom, it was hoped that other people would help fight for Ashley's. An article covering one of the missions I went on can be found in 
         <a
            href="https://www.rollingstone.com/politics/politics-news/stephen-zabielski-russia-ukraine-conflict-1371094/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-400"
          >
            Rollingstone.
          </a>There were many others like it.`,
    },
    {
      question:
        "How did your background in biology and the military shape your worldview?",
      answer:
        "Both pursuits have led me to deduct, not infer, my conclusions to avoid being misled or mislead. I have a greater appreciation for the majesty of life than I did before, and its many complexities. I also learned how to think rationally, scientifically, and for myself. Some of my discoveries have been eye opening, to say the least.",
    },
    {
      question: "What role does cryptocurrency play in your life today?",
      answer:
        "I use digital finance daily, most notably as an investment platform but more and more as a daily means of transaction. I am heavily invested in the Sonic Blockchain and believe very much in Monero as well. I encourage all people, especially young ones, to learn how to invest in and utilize digital assets.",
    },
    {
      question:
        "Is your advocacy for Ashley a one-man mission or part of a larger campaign?",
      answer:
        "It is part of a much larger campaign set up and run by her mother, who lives outside of Ashley's prison in Surat Thani, Thailand, and visits her regularly. She also maintains all legal proceedings in Thailand to get her released, and continues to work with the South African government as well. Ashley was initially sentenced to death, then commuted to life, then commuted to 34 years, and now, most recently, her sentence has been commuted down to 12 with a downgrade of her charges and eligibility for a royal pardon. Everyone works, hopes, and prays that Ashley will be allowed to return home soon.",
    },
    {
      question: "What countries have influenced your worldview the most?",
      answer: "The USA. Nepal and Thailand as well.",
    },
    {
      question: "What's your favorite place out of everywhere you have gone?",
      answer: "Koh Phangan, Thailand.",
    },
    {
      question: "What does a typical day look like for you now?",
      answer:
        "I wake up before 6 and write until 9. Then I take an hour for breakfast. From 10 until lunch I focus on digital assets. After lunch I work more on writing until taking an hour or two for a physical activity, like going to the gym or the beach. Afterwards, I work until dinner and then revise my writing for an hour or so before bed, usually around 10.",
    },
    {
      question: "Are your travel stories based on real events?",
      answer:
        "Yes. My fiction writing is also heavily influenced by my world travels and living internationally. ",
    },
  ],
  Writing: [
    {
      question: "Why did you become a writer?",
      answer:
        "First, to help raise attention and awareness for Ashley Oosthuizen. Second, as a means to share my experiences with the world.",
    },
    {
      question: "Where do you get your ideas?",
      answer:
        "They come to me suddenly, and without warning. I imagine my colorful life has helped a lot.",
    },
    {
      question: "Do you only write about the Bronze Age?",
      answer:
        "No. I have a list of works planned that have nothing to do with the time period.",
    },
    {
      question: "Will you read my manuscript and tell me what you think?",
      answer: "Tristan Nettles is unable to read unsolicited manuscripts.",
    },
    {
      question: "How did you get published?",
      answer:
        "I sent in my manuscript to various traditional publishers and was eventually offered a contract.",
    },
    {
      question: "What inspired The Shepherd: A Bronze Age Tale?",
      answer:
        "Ashley Oosthuizen. The storyline came to me in a dream during her trial. I then spent 15 month writing it up in the jungles of El Salvador to help raise awareness and funds for her cause before volunteering to go fight in Ukraine.",
    },
    {
      question: "How do you research ancient history for your novels?",
      answer:
        "I have an extensive historical background, curated from childhood,  including many university classes specifically centered on ancient history. I use modern tools and research methods as well to ensure historical accuracy in my writing.",
    },
    {
      question:
        "Are your future books going to continue in the historical fiction genre?",
      answer:
        "Yes. My future works will include both historical, and commerical fiction.",
    },
    {
      question: "Can you give me some writing tips?",
      answer:
        "Yes! Read a lot, write a lot, and edit constantly. The devil is in the details.",
    },
    {
      question:
        "What authors or books have most influenced your writing style?",
      answer:
        "The classic writers - especially Dumas, Dickens and Tolstoy. I have also been influenced by some more modern authors as well, specifically Patrick O'Brian and Bernard Cornwell.",
    },
  ],
  // Rumors: [
  //   {
  //     question: "Are ?",
  //     answer:
  //       "Stephen King has explained that writing is something he felt compelled to do from a very young age—it was never a choice, but a necessity.",
  //   },
  //   {
  //     question: "Where do you get your ideas?",
  //     answer:
  //       "Ideas come from anywhere and everywhere—news articles, conversations, dreams, and just daily life.",
  //   },
  //   {
  //     question: "Do you accept story ideas?",
  //     answer:
  //       "No. For legal and creative reasons, unsolicited story ideas are not accepted.",
  //   },
  //   {
  //     question: "Will you read my manuscript and tell me what you think?",
  //     answer: "Stephen King is unable to read unsolicited manuscripts.",
  //   },
  //   {
  //     question:
  //       "I need an agent/publisher, can you tell me the name of a good one?",
  //     answer:
  //       "We do not recommend individual agents or publishers. We suggest referring to the latest edition of the Writer’s Market for resources.",
  //   },
  //   {
  //     question: "Where can I submit my assignment from On Writing?",
  //     answer:
  //       "Stephen King does not collect assignments. This was meant as an exercise for readers, not a submission.",
  //   },
  //   {
  //     question: "Why did you write books as Richard Bachman?",
  //     answer:
  //       "Stephen King used the pseudonym Richard Bachman early in his career to test whether his success was due to talent or luck.",
  //   },
  //   {
  //     question: "Where would be a good place to send my writing?",
  //     answer:
  //       "Many websites and publications accept submissions. Research the appropriate markets based on genre and audience.",
  //   },
  //   {
  //     question: "Can you give me some writing tips?",
  //     answer:
  //       "Yes! Read a lot, write a lot, and don't be afraid to revise. Consistency and perseverance are key.",
  //   },
  //   {
  //     question: "Do you teach any courses or seminars?",
  //     answer:
  //       "Stephen King does not currently offer writing seminars or courses.",
  //   },
  // ],
  // Miscellaneous: [
  //   {
  //     question: "Why did you become a writer?",
  //     answer:
  //       "Stephen King has explained that writing is something he felt compelled to do from a very young age—it was never a choice, but a necessity.",
  //   },
  //   {
  //     question: "Where do you get your ideas?",
  //     answer:
  //       "Ideas come from anywhere and everywhere—news articles, conversations, dreams, and just daily life.",
  //   },
  //   {
  //     question: "Do you accept story ideas?",
  //     answer:
  //       "No. For legal and creative reasons, unsolicited story ideas are not accepted.",
  //   },
  //   {
  //     question: "Will you read my manuscript and tell me what you think?",
  //     answer: "Stephen King is unable to read unsolicited manuscripts.",
  //   },
  //   {
  //     question:
  //       "I need an agent/publisher, can you tell me the name of a good one?",
  //     answer:
  //       "We do not recommend individual agents or publishers. We suggest referring to the latest edition of the Writer’s Market for resources.",
  //   },
  //   {
  //     question: "Where can I submit my assignment from On Writing?",
  //     answer:
  //       "Stephen King does not collect assignments. This was meant as an exercise for readers, not a submission.",
  //   },
  //   {
  //     question: "Why did you write books as Richard Bachman?",
  //     answer:
  //       "Stephen King used the pseudonym Richard Bachman early in his career to test whether his success was due to talent or luck.",
  //   },
  //   {
  //     question: "Where would be a good place to send my writing?",
  //     answer:
  //       "Many websites and publications accept submissions. Research the appropriate markets based on genre and audience.",
  //   },
  //   {
  //     question: "Can you give me some writing tips?",
  //     answer:
  //       "Yes! Read a lot, write a lot, and don't be afraid to revise. Consistency and perseverance are key.",
  //   },
  //   {
  //     question: "Do you teach any courses or seminars?",
  //     answer:
  //       "Stephen King does not currently offer writing seminars or courses.",
  //   },
  // ],
};

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [openQuestion, setOpenQuestion] = useState(null);

  const questions = faqs[selectedCategory];

  return (
    <main className="bg-gray-50 px-6 md:px-12 lg:px-24 py-12">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar Navigation */}
        <aside className="lg:w-1/4 mb-8 lg:mb-0">
          <ul className="space-y-2 text-lg font-medium">
            {Object.keys(faqs).map((cat) => (
              <li
                key={cat}
                className={
                  selectedCategory === cat
                    ? "font-bold cursor-pointer"
                    : "cursor-pointer"
                }
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenQuestion(null);
                }}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <section className="lg:w-3/4">
          <h1 className="text-4xl font-serif font-semibold mb-6">
            Frequently Asked Questions
          </h1>
          <h2 className="text-2xl font-serif font-semibold mb-6">
            {selectedCategory}
          </h2>
          <ul className="space-y-4">
            {questions.map((q, idx) => (
              <li key={idx}>
                <button
                  className="flex items-start text-left w-full font-semibold text-lg focus:outline-none"
                  onClick={() =>
                    setOpenQuestion(openQuestion === idx ? null : idx)
                  }
                >
                  <span className="mr-2">
                    {openQuestion === idx ? "▾" : "▸"}
                  </span>
                  {q.question}
                </button>
                {openQuestion === idx && (
                  <div
                    className="mt-2 ml-6 text-gray-700 text-base"
                    dangerouslySetInnerHTML={{ __html: q.answer }}
                  />
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
