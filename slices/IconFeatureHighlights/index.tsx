"use client";

import { FC } from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Content, isFilled } from "@prismicio/client";

export type IconFeatureHighlightsProps =
  SliceComponentProps<Content.IconFeatureHighlightsSlice>;

const IconFeatureHighlights: FC<IconFeatureHighlightsProps> = ({ slice }) => {
  const features = slice.primary.features || [];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full py-16 text-black"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        {/* Title */}
        {isFilled.richText(slice.primary.title) && (
          <div className="mb-12">
            <div className="text-3xl md:text-5xl font-extrabold leading-tight">
              <PrismicRichText field={slice.primary.title} />
            </div>
            <span className="block w-[64.5px] h-[5px] bg-[#fcc419] rounded-[30px] mt-[18px] mx-auto" />
          </div>
        )}
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center"
          >
            {/* Container for image + shape */}
            <div className="relative w-36 h-36 mb-6">
              {/* Decorative Shape behind */}
              <div
                className={`absolute top-0 right-0 w-full h-full ${
                  feature.shape === "circle"
                    ? "rounded-full"
                    : feature.shape === "half-circle"
                      ? "rounded-t-full"
                      : feature.shape === "quarter-circle"
                        ? "rounded-tr-[100%]"
                        : feature.shape === "square"
                          ? ""
                          : "rounded-[50%]"
                }`}
                style={{
                  backgroundColor: feature.shape_color || "#FACC15",
                  zIndex: 10,
                  transform: "translate(25%, -25%)", // Push shape slightly top-right outside
                }}
              ></div>

              {/* Main Image on top */}
              {isFilled.image(feature.image) && (
                <PrismicNextImage
                  field={feature.image}
                  className="w-full h-full object-cover rounded-lg shadow-lg relative z-20"
                />
              )}
            </div>

            {/* Description */}
            {isFilled.richText(feature.description) && (
              <div className="text-sm md:text-base font-medium leading-snug max-w-[140px]">
                <PrismicRichText field={feature.description} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default IconFeatureHighlights;
