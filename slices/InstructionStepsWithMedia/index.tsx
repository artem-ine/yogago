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
      className="w-full py-20 text-textDark"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-12">
        {/* Title */}
        {isFilled.richText(slice.primary.title) && (
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading1: ({ children }) => (
                <div className="text-center">
                  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                    {children}
                  </h1>
                  <span className="block w-[64.5px] h-[5px] bg-[#fcc419] rounded-[30px] m-18 mx-auto pb-4" />
                </div>
              ),
            }}
          />
        )}

        {/* Layout: Centered Image + Step list */}
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-center rounded-2xl">
          {/* Image Block (centered vertically with steps) */}
          <div className="md:w-1/2 w-full flex justify-center md:justify-end">
            <div className="w-full max-w-md">
              {isFilled.image(activeStep?.step_image) && (
                <PrismicNextImage
                  field={activeStep.step_image}
                  className="w-full h-full object-contain rounded-2xl shadow-md"
                />
              )}
            </div>
          </div>

          {/* Step List */}
          <div className="md:w-1/2 w-full flex flex-col gap-6">
            <ol className="flex flex-col gap-6">
              {steps.map((step, index) => (
                <li
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer p-6 border ${
                    index === activeIndex
                      ? "bg-white border-[2px] border-[#fcc419] rounded-[22px]"
                      : "border-transparent"
                  }`}
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
