"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    src: "/shepherd.png",
    alt: "Christine Cover",
    href: "/works",
  },
  {
    src: "/shepherd.png",
    alt: "Cujo Cover",
    href: "/UpcomingWorks",
  },
  {
    src: "/shepherd.png",
    alt: "Pet Sematary Cover",
    href: "/NewsPage",
  },
];

export default function HomePage() {
  const [slideIndex, setSlideIndex] = useState(0);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    startSlideTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startSlideTimer = () => {
    intervalRef.current = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
  };

  const stopSlideTimer = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div
      className="min-h-[calc(100vh-15vh)] bg-fixed bg-center bg-cover bg-no-repeat relative"
      style={{ backgroundImage: "url('/phangan3.jpg')" }}
    >
      <div className="pt-6">
        {/* Slideshow Section */}
        <section
          className="relative w-full max-w-[960px] mx-auto aspect-[16/8] rounded-lg shadow-lg overflow-hidden bg-black md:mt-2"
          onMouseEnter={stopSlideTimer}
          onMouseLeave={startSlideTimer}
          ref={containerRef}
        >
          <Link href={slides[slideIndex].href}>
            <div className="absolute inset-0 z-0 cursor-pointer">
              <Image
                src={slides[slideIndex].src}
                alt={slides[slideIndex].alt}
                fill
                className="transition-opacity duration-500 ease-in-out"
                priority
              />
            </div>
          </Link>
        </section>

        {/* Slide Indicators */}
        <div className="absolute z-10 w-full flex justify-center space-x-2 pt-5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSlideIndex(idx)}
              className={`h-3 w-3 rounded-full border border-white ${
                idx === slideIndex ? "bg-blue-400" : "bg-slate-200"
              } transition-colors duration-300`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
