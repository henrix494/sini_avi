import React from "react";
import Image from "next/image";
import { GetBackProps } from "@/slices/GetBack";
import { PrismicImage, PrismicRichText } from "@prismicio/react";
import Btn from "../btn/Btn";

export default function GetBackComp({ slice }: GetBackProps) {
  return (
    <div
      id={slice.primary.ids || ""}
      className={` lg:h-[700px] flex items-center justify-center max-lg:mt-10 bg-[white] ${slice.variation === "bgGray" && "bg-alt-bg"} ${slice.variation === "bgGrayImageLeft" && "bg-alt-bg"}`}
    >
      <div
        className={`flex justify-center items-center lg:max-h-[530px] max-lg:flex-col   ${slice.variation === "leftToRight" && "flex-row-reverse"} ${slice.variation === "bgGrayImageLeft" && "flex-row-reverse"}`}
      >
        <div className="lg:self-start lg:ml-24 max-lg:px-5 text-right  lg:mr-20 ">
          <div className="relative max-h-[800px]">
            <div className="text-right flex items-center space-x-4 space-x-reverse flex-row-reverse">
              <PrismicRichText
                field={slice.primary.title}
                components={{
                  heading2: ({ children }) => (
                    <h2 className="text-main-bg text-[3rem] font-[700] leading-[1.2] mb-4">
                      {children}
                    </h2>
                  ),
                }}
              />
              {slice.primary.colortext && (
                <PrismicRichText
                  field={slice.primary.colortext}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="text-alt text-[3rem] font-[700] leading-[1.2] mb-4">
                        {children}
                      </p>
                    ),
                  }}
                />
              )}
            </div>

            {slice.primary.underline && (
              <PrismicImage
                field={slice.primary.underline || " "}
                className="absolute right-0 top-14 w-[200px] "
              />
            )}
          </div>

          {slice.primary.get_back_text?.map(({ text }, index) => {
            return (
              <div key={index} className="lg:w-[500px] mt-10">
                <PrismicRichText
                  field={text}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="text-gray-700 text-base md:text-lg lg:text-xl">
                        {children}
                      </p>
                    ),
                  }}
                />
              </div>
            );
          })}

          <div className="mt-10">
            <Btn />
          </div>
        </div>
        <div className="lg:h-[700px] flex items-center max-lg:mt-10 max-lg:px-5  ">
          <Image
            src={slice.primary.main_image.url || " "}
            width={800}
            height={800}
            alt="me"
            className="rounded-xl w-full lg:w-auto  "
          />
        </div>
      </div>
    </div>
  );
}
