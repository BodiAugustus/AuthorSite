import {
  Geist,
  Geist_Mono,
  Playfair_Display_SC,
  Cinzel,
  Lato,
} from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/page";
import Footer from "./Footer.js/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const playfair = Playfair_Display_SC({
  variable: "--font-playfair-sc",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});
export const cinzel = Cinzel({
  variable: "--font--cinzel",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});
export const lato = Lato({
  variable: "--font--lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata = {
  title: "Tristan Nettles | Novelist",
  description:
    "Official site of Tristan Nettles, author of new age classics, including 'The Shepherd: A Bronze Age Tale,' and 'False Positive.' Come experience unforgettable storytelling woven with original, thought-provoking plots.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Tristan Nettles",
    "Bronze Age novels",
    "historical fiction author",
    "Ashley Oosthuizen",
    "The Shepherd Novel",
    "best historical novels",
    "books about ancient history",
    "military fiction",
    "support Ashley Oosthuizen",
    "independent author",
    "A Bronze Age Tale",
    "False Positive",
    "The King - A Bronze Age Tale",
    "The Shepherd - A Bronze Age Tale",
  ].join(", "),
  authors: [{ name: "Tristan Nettles", url: "https://www.TristanNettles.com" }],
  openGraph: {
    title: "Tristan Nettles | Novelist",
    description:
      "Experience unforgettable storytelling woven with original, thought-provoking plots.",
    url: "https://www.TristanNettles.com",
    siteName: "Tristan Nettles",
    type: "website",
    images: [
      {
        url: "https://www.TristanNettles.com/preview.png",
        width: 1200,
        height: 630,
        alt: "Tristan Nettles - Historical Novelist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tristan Nettles | Novelist & Advocate",
    description:
      "Author of 'The Shepherd'. Explore historical fiction rooted in the Bronze Age. Support the cause to free Ashley Oosthuizen.",
    creator: "@tristan_nettles",
    images: ["https://www.TristanNettles.com/preview.png"],
  },
  alternates: {
    canonical: "https://www.tristannettles.com",
  },
};
//check

export default function RootLayout({ children }) {
  const structuredData = [
    {
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
    },
    {
      "@context": "https://schema.org",
      "@type": "Book",
      name: "The Shepherd – A Bronze Age Tale",
      author: { "@type": "Person", name: "Tristan Nettles" },
      datePublished: "2022-01-01",
      description:
        "An epic historical novel set during the collapse of the Bronze Age, following a shepherd who becomes a warrior king.",
      publisher: { "@type": "Organization", name: "Independent" },
      inLanguage: "English",
    },
    {
      "@context": "https://schema.org",
      "@type": "Book",
      name: "False Positive",
      author: { "@type": "Person", name: "Tristan Nettles" },
      datePublished: "2021-01-01",
      description:
        "A gripping modern thriller about medicine, betrayal, and redemption.",
      publisher: { "@type": "Organization", name: "Independent" },
      inLanguage: "English",
    },
  ];

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
