"use client";

import { FC, useEffect, useRef } from "react";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";

export type ExploreMoreProps = SliceComponentProps<any>;

const ExploreMore: FC<ExploreMoreProps> = ({ slice }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-scroll carousel every 3 seconds
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (!carouselRef.current) return;
      const scrollWidth = carouselRef.current.scrollWidth;
      const clientWidth = carouselRef.current.clientWidth;
      if (carouselRef.current.scrollLeft + clientWidth >= scrollWidth) {
        // Scroll back to start
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Scroll right by one card width (including gap)
        const cardWidth = 280 + 24; // card width + gap (adjust if changed below)
        carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 md:px-8">
      {/* Title */}
      {slice.primary.title && (
        <h2 className="text-4xl font-extrabold mb-10 text-center md:text-left">
          {slice.primary.title}
        </h2>
      )}

      {/* Carousel track */}
      <div
        ref={carouselRef}
        className="flex gap-12 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        style={{ scrollPaddingLeft: 24, scrollPaddingRight: 24 }}
      >
        {slice.primary.carousel.map((item, idx) => (
          <a
            key={idx}
            href="#"
            className="snap-start flex-shrink-0 w-72 h-72 bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition flex flex-col justify-center cursor-pointer mb-8"
          >
            <PrismicRichText
              field={item.text}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-gray-900 text-lg leading-relaxed">
                    {children}
                  </p>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold">{children}</strong>
                ),
                em: ({ children }) => <em className="italic">{children}</em>,
              }}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default ExploreMore;
