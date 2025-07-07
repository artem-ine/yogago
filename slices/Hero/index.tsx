import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  const isImageRight = slice.variation === "imageRight";
  const isEmbedUp = slice.variation === "embedUp";

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white text-gray-900 py-12 md:py-20"
    >
      <div
        className={`container mx-auto flex flex-col-reverse ${
          isImageRight ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-10`}
      >
        {/* Content */}
        <div className="w-full md:w-1/2 px-4 md:px-6 flex flex-col gap-6">
          {/* Embed on Top for embedUp variation */}
          {isEmbedUp && isFilled.embed(slice.primary.embed) && (
            <div
              className="aspect-video w-full rounded-lg overflow-hidden shadow"
              dangerouslySetInnerHTML={{
                __html: slice.primary.embed.html || "",
              }}
            />
          )}

          <div className="flex flex-col gap-4">
            {isFilled.keyText(slice.primary.eyebrowHeadline) && (
              <p className="text-green-500 text-lg font-medium uppercase tracking-wide">
                {slice.primary.eyebrowHeadline}
              </p>
            )}

            {isFilled.richText(slice.primary.title) && (
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <PrismicRichText field={slice.primary.title} />
              </div>
            )}

            {isFilled.richText(slice.primary.description) && (
              <div className="text-lg md:text-xl text-gray-700 leading-relaxed">
                <PrismicRichText field={slice.primary.description} />
              </div>
            )}
          </div>
        </div>

        {/* Left (or Right) Image */}
        {isFilled.image(slice.primary.image) && (
          <div className="w-full md:w-1/2 flex justify-center">
            <PrismicNextImage
              field={slice.primary.image}
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
