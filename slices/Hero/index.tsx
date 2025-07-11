import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import {
  SliceComponentProps,
  PrismicRichText,
  PrismicLink,
} from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

function hasCTABadges(primary: unknown): primary is {
  cta_buttons: Array<{ button: unknown; button_image: unknown }>;
} {
  return (
    typeof primary === "object" &&
    primary !== null &&
    "cta_buttons" in primary &&
    Array.isArray((primary as { cta_buttons?: unknown }).cta_buttons)
  );
}

const Hero: FC<HeroProps> = ({ slice }) => {
  const variation = slice.variation;

  // Helper to render badges (cta buttons)
  const renderCTABadges = () => {
    if (!hasCTABadges(slice.primary) || slice.primary.cta_buttons.length === 0)
      return null;
    return (
      <div className="flex gap-4 pt-6 flex-wrap items-center">
        {slice.primary.cta_buttons.map((cta, index) =>
          cta.button && cta.button_image ? (
            <PrismicLink
              key={index}
              field={cta.button}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <PrismicNextImage
                field={cta.button_image}
                className="h-12 w-auto object-contain"
              />
            </PrismicLink>
          ) : null
        )}
      </div>
    );
  };

  // No image variation — center text content
  if (variation === "noImage") {
    return (
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="w-full text-gray-900"
      >
        <div className="flex flex-col items-center justify-between z-1 pt-10 md:pt-10 relative max-w-[1440px] mx-auto px-6 md:px-10 xl:px-20">
          {isFilled.richText(slice.primary.title) && (
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <PrismicRichText field={slice.primary.title} />
            </h1>
          )}
          {isFilled.richText(slice.primary.description) && (
            <div className="text-lg md:text-xl text-gray-700 leading-relaxed">
              <PrismicRichText field={slice.primary.description} />
            </div>
          )}
          {renderCTABadges()}
        </div>
      </section>
    );
  }

  // embedUp variation — render embed on top
  if (variation === "embedUp") {
    return (
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="w-full text-gray-900"
      >
        <div className="flex flex-col items-center justify-between z-1 pt-20 relative max-w-[1440px] mx-auto px-6 md:px-10 xl:px-20 gap-6">
          {/* Embed */}
          {isFilled.embed(slice.primary.embed) && (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow">
              <div
                className="absolute top-0 left-0 w-full h-full [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:absolute [&>iframe]:top-0 [&>iframe]:left-0"
                dangerouslySetInnerHTML={{
                  __html: slice.primary.embed.html || "",
                }}
              />
            </div>
          )}

          {/* Title */}
          {isFilled.richText(slice.primary.title) && (
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <PrismicRichText field={slice.primary.title} />
            </h1>
          )}

          {/* Description */}
          {isFilled.richText(slice.primary.description) && (
            <div className="text-lg md:text-xl text-gray-700 leading-relaxed">
              <PrismicRichText field={slice.primary.description} />
            </div>
          )}

          {/* CTA Badges */}
          {renderCTABadges()}
        </div>
      </section>
    );
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full text-gray-900"
    >
      <div className="flex md:flex-row flex-col items-center md:items-end justify-between z-1 pt-20 md:pt-60 relative max-w-[1440px] mx-auto px-6 md:px-10 xl:px-20">
        {/* Text + CTA badges on left */}
        <div className="flex flex-col items-start justify-center self-stretch flex-1 md:max-w-1/2 z-2 pb-12 md:pb-30">
          {isFilled.richText(slice.primary.title) && (
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <PrismicRichText field={slice.primary.title} />
            </h1>
          )}
          {isFilled.richText(slice.primary.description) && (
            <div className="text-lg md:text-xl text-gray-700 leading-relaxed">
              <PrismicRichText field={slice.primary.description} />
            </div>
          )}
          {renderCTABadges()}
        </div>

        {/* Image on right */}
        {isFilled.image(slice.primary.image) && (
          <div className="w-full md:w-1/2 flex justify-center">
            <PrismicNextImage
              field={slice.primary.image}
              className="flex-1 md:max-w-1/2 rounded-xl"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
