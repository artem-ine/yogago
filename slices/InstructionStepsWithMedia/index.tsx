"use client";

import { FC, useState } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type InstructionStepsWithMediaProps =
  SliceComponentProps<Content.InstructionStepsWithMediaSlice>;

const InstructionStepsWithMedia: FC<InstructionStepsWithMediaProps> = ({
  slice,
}) => {
  const steps = slice.primary.steps || slice.items || [];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-20 text-textDark"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-12">
        {/* Title */}
        {isFilled.richText(slice.primary.title) && (
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading1: ({ children }) => (
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-left">
                  {children}
                </h1>
              ),
            }}
          />
        )}

        {/* Layout: Image + Step list */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Active Step Image */}
          <div className="md:w-1/2 w-full flex justify-center md:justify-start">
            {isFilled.image(activeStep?.step_image) && (
              <PrismicNextImage
                field={activeStep.step_image}
                className="rounded-xl max-w-full h-auto transition-all duration-300 ease-in-out"
              />
            )}
          </div>

          {/* Step List */}
          <div className="md:w-1/2 w-full flex flex-col gap-6">
            <ol className="flex flex-col gap-6">
              {steps.map((step, index) => (
                <li
                  key={index}
                  className={`cursor-pointer transition-colors p-6 ${
                    index === activeIndex
                      ? "border-2 border-yellow-400 rounded-xl"
                      : "border-none"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="mb-1 text-sm font-semibold tracking-wide text-black">
                    Step {step.step_number}
                  </div>
                  <p className="text-base md:text-lg text-black leading-relaxed">
                    {step.step_text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructionStepsWithMedia;
