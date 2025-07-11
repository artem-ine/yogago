"use client";

import { FC, useEffect, useRef } from "react";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { Content } from "@prismicio/client";

export type ExploreMoreProps = SliceComponentProps<Content.ExploreMoreSlice>;

const ExploreMore: FC<ExploreMoreProps> = ({ slice }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-scroll carousel every 3 seconds
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (!carouselRef.current) return;
      const scrollWidth = carouselRef.current.scrollWidth;
      const clientWidth = carouselRef.current.clientWidth;
      if (carouselRef.current.scrollLeft + clientWidth >= scrollWidth) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const cardWidth = 280 + 24;
        carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 5000); // slower now - 5 seconds

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="w-full py-16 px-4 md:px-8 flex flex-col">
      {/* Title */}
      {slice.primary.title && (
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-extrabold text-center text-black">
            {slice.primary.title}
          </h2>
          <span className="block w-[64.5px] border-b-4 border-[#fcc419] rounded-[30px] mt-[18px] mx-auto" />
        </div>
      )}

      {/* Carousel container with relative position */}
      <div className="relative">
        {/* Left gradient fade with horizontal opacity */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10"
          style={{
            background: "linear-gradient(to right, #f3f3f8, transparent)",
          }}
        />

        {/* Right gradient fade with horizontal opacity */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10"
          style={{
            background: "linear-gradient(to left, #f3f3f8, transparent)",
          }}
        />

        {/* Carousel track */}
        <div
          ref={carouselRef}
          className="flex gap-20 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide items-center"
          style={{ scrollPaddingLeft: 24, scrollPaddingRight: 24 }}
        >
          {slice.primary.carousel.map((item, idx) => {
            // For every 3 cards: indexes 0,1 = squares; index 2 = rectangle
            const isRectangle = idx % 3 === 2;

            return (
              <a
                key={idx}
                href="#"
                className={`snap-start flex-shrink-0 bg-white rounded-2xl shadow-lg p-8 hover:shadow-1xl transition flex flex-col justify-center cursor-pointer mb-8`}
                style={{
                  width: isRectangle ? "360px" : "280px",
                  height: isRectangle ? "400px" : "280px",
                  // Align all cards vertically center in the flex container
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PrismicRichText
                  field={item.text}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="text-grayText text-lg leading-relaxed text-center">
                        {children}
                      </p>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold">{children}</strong>
                    ),
                    em: ({ children }) => (
                      <em className="italic">{children}</em>
                    ),
                  }}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
