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
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomePage />
      <NewReleases />
      <ComingSoon />
      <NewsletterSignup />
    </div>
  );
}
