import HomePage from "./HomePage/page";
import NewReleases from "./NewReleases/page";
import ComingSoon from "./ComingSoon/page";
import NewsletterSignup from "./NewsLetterSignup/page";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tristan Nettles",
    url: "https://www.tristannettles.com",
    image: "https://www.tristannettles.com/preview.png",
    sameAs: ["https://twitter.com/tristan_nettles"],
    jobTitle: "Novelist",
    description:
      "Tristan Nettles is the author of historical and Bronze Age fiction including 'The Shepherd' and 'False Positive'.",
    worksFor: {
      "@type": "Organization",
      name: "Ashley DeFi",
    },
  };
  const bookStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Book",
      name: "The Shepherd – A Bronze Age Tale",
      author: {
        "@type": "Person",
        name: "Tristan Nettles",
      },
      datePublished: "2022-01-01",
      description:
        "An epic historical novel set during the collapse of the Bronze Age, following a shepherd who becomes a warrior king.",
      publisher: {
        "@type": "Organization",
        name: "Independent",
      },
      inLanguage: "English",
    },
    {
      "@context": "https://schema.org",
      "@type": "Book",
      name: "False Positive",
      author: {
        "@type": "Person",
        name: "Tristan Nettles",
      },
      datePublished: "2021-01-01",
      description:
        "A gripping modern thriller about medicine, betrayal, and redemption.",
      publisher: {
        "@type": "Organization",
        name: "Independent",
      },
      inLanguage: "English",
    },
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bookStructuredData[0]),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bookStructuredData[1]),
        }}
      />
      <HomePage />
      <NewReleases />
      <ComingSoon />
      <NewsletterSignup />
    </div>
  );
}
