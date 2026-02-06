export default function MiscPage() {
  return (
    <main className="bg-white text-gray-800 px-6 md:px-12 lg:px-24 py-10 space-y-20">
      {/* Section: Links */}
      <section>
        <h2 className="text-3xl font-serif font-semibold mb-6">
          Miscellaneous
        </h2>
        <h3 className="text-2xl font-semibold mb-4">Links</h3>

        <div className="space-y-6">
          <div>
            <p className="font-bold">Tristan Nettles Twitter</p>
            <a
              href="https://x.com/tristan_nettles"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Official Twitter/X page
            </a>
          </div>

          <div>
            <p className="font-bold">The Shepherd - A Bronze Age Tale</p>
            <a
              href="https://www.TheShepherdNovel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Official webpage for The Shepherd novel
            </a>
          </div>
          <div>
            <p className="font-bold">Tristan Nettles YouTube Channel</p>
            <a
              href="https://www.youtube.com/@TristanNettlesFreeAshley"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Official YouTube channel of Tristan Nettles.
            </a>
          </div>
          <div>
            <p className="font-bold">Free Ashley</p>
            <a
              href="https://www.FreeAshley.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Website dedicated to Ashley Oosthuizen
            </a>
          </div>
          {/* <div>
            <p className="font-bold">WZON</p>
            <p>Sports radio station owned by Stephen</p>
          </div>
          <div>
            <p className="font-bold">WKIT</p>
            <p>Rock n' Roll radio station owned by Stephen</p>
          </div>
          <div>
            <p className="font-bold">CAFE PRESS</p>
            <p>Official Stephen King Merchandise</p>
          </div> */}
        </div>
      </section>

      {/* Section: Online Book Stores */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Online Book Stores</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold">Amazon</p>
            <a
              href="https://www.amazon.com/Shepherd-Bronze-Age-Tale/dp/1592113842"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              The world&#39;s largest online book seller where you can find
              &#39;The Shepherd - A Bronze Age Tale&#39;.
            </a>
          </div>
          <div>
            <p className="font-bold">Barnes & Noble</p>
            <a
              href="https://www.barnesandnoble.com/w/shepherd-tristan-nettles/1143322620"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Barnes & Noble Booksellers is an American bookseller with the
              largest number of retail outlets in the United States. You can
              also find Tristan&#39;s works there.
            </a>
          </div>
        </div>
      </section>

      {/* Section: Publishers */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Publishers</h3>
        <div className="space-y-4 mb-5">
          <p>
            <span className="font-bold">Histria Books</span> – Histria Books is
            a leading independent publishing house, with offices in Las Vegas
            and Palm Beach. They publish over 60 books annually.
          </p>
          <a
            href="https://histriabooks.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Histria Books Official Website
          </a>
        </div>
        <div className="space-y-4">
          <p>
            <span className="font-bold">Simon & Schuster</span> - Simon and
            Schuster is an American publishing house. It was founded in New York
            City in 1924. Along with Penguin Random House, Hachette,
            HarperCollins and Macmillan Publishers, Simon & Schuster is
            considered one of the Big Five English language publishers.
          </p>
          <a
            href="https://www.simonandschuster.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Simon and Schuster Official Website
          </a>
        </div>
      </section>
    </main>
  );
}
