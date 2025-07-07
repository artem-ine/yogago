import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import {
  SliceComponentProps,
  PrismicRichText,
  PrismicLink,
} from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  const variation = slice.variation;

  // Helper to render badges (cta buttons)
  const renderCTABadges = () => {
    if (!slice.primary.cta_buttons || slice.primary.cta_buttons.length === 0)
      return null;
    return (
      <div className="flex gap-4 pt-6 flex-wrap items-center">
        {slice.primary.cta_buttons.map((cta, index) =>
          cta.button && cta.button.url && cta.button_image ? (
            <PrismicLink
              key={index}
              field={cta.button}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <PrismicNextImage
                field={cta.button_image}
                alt={cta.button_image.alt ?? "Download button"}
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
        className="w-full text-gray-900 py-12 md:py-20"
      >
        <div className="container mx-auto max-w-3xl text-center px-4 md:px-6 flex flex-col gap-6">
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
        className="w-full bg-white text-gray-900 py-12 md:py-20"
      >
        <div className="container mx-auto max-w-6xl px-4 md:px-6 flex flex-col gap-6">
          {isFilled.embed(slice.primary.embed) && (
            <div
              className="aspect-video w-full rounded-lg overflow-hidden shadow"
              dangerouslySetInnerHTML={{
                __html: slice.primary.embed.html || "",
              }}
            />
          )}
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

  // For default and imageRightWithCta variations with image
  // Default: image left, text right
  // imageRightWithCta: image left, text right (per your request)
  // (Note: Both same layout now, just slight classname difference if you want)

  const isImageRightWithCta = variation === "imageRightWithCta";

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white text-gray-900 py-12 md:py-20"
    >
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-10 px-4 md:px-6">
        {/* Text + CTA badges on left */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
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
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
