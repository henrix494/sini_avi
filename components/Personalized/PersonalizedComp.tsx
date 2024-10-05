import React from "react";
import Image from "next/image";
import { PersonalizedSlice } from "@/prismicio-types";
import { PrismicImage, PrismicRichText } from "@prismicio/react";

export default function PersonalizedComp({
  slice,
}: {
  slice: PersonalizedSlice;
}) {
  return (
    <div className="flex flex-col h-auto bg-[#fafafa] p-8 " dir="rtl">
      <div className="text-center">
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-4xl font-extrabold text-gray-800 inline-block lg:ml-4">
                {children}
              </h2>
            ),
          }}
        />
        <PrismicRichText
          field={slice.primary.titlecolor}
          components={{
            heading3: ({ children }) => (
              <h3 className="text-4xl font-extrabold text-alt inline-block">
                {children}
              </h3>
            ),
          }}
        />
        <PrismicRichText
          field={slice.primary.description}
          components={{
            paragraph: ({ children }) => (
              <p className="mt-4 text-gray-600 leading-8 lg:leading-[0.8rem] max-lg:text-center">
                {children}
              </p>
            ),
          }}
        />
      </div>
      <div className="flex lg:gap-20 gap-10 justify-center mt-6 max-lg:flex-col">
        {slice.primary.list_container.map(({ title }, index) => {
          return (
            <div className="flex flex-col text-right" key={index}>
              <PrismicRichText
                field={title}
                components={{
                  paragraph: ({ children }) => (
                    <p className="font-semibold text-gray-700 text-3xl text-main-bg">
                      {children}
                    </p>
                  ),
                }}
              />
              {slice.primary.list_items_two?.map(({ text, image }, index) => {
                return (
                  <div className="flex gap-2 items-center mt-4" key={index}>
                    <PrismicRichText field={text} />
                    <PrismicImage field={image} className="w-[30px] h-[30px]" />
                  </div>
                );
              })}
            </div>
          );
        })}
        {slice.primary.list_container_two?.map(({ title }, index) => {
          return (
            <div key={index} className="flex flex-col text-right">
              <PrismicRichText
                field={title}
                components={{
                  heading3: ({ children }) => (
                    <h3 className="font-semibold text-gray-700 text-3xl text-main-bg">
                      {children}
                    </h3>
                  ),
                }}
              />
              {slice.primary.list_items_three?.map(({ text, image }, index) => {
                return (
                  <div key={index} className="flex gap-2 items-center mt-4">
                    <PrismicRichText
                      field={text}
                      components={{
                        heading3: ({ children }) => (
                          <h3 className="">{children}</h3>
                        ),
                      }}
                    />
                    <PrismicImage field={image} className="w-[30px] h-[30px]" />
                  </div>
                );
              })}
            </div>
          );
        })}
        {slice.primary.list_container_three?.map(({ title }, index) => {
          return (
            <div className="flex flex-col text-right " key={index}>
              <PrismicRichText
                field={title}
                components={{
                  heading3: ({ children }) => (
                    <h3 className="font-semibold text-gray-700 text-3xl text-main-bg">
                      {children}
                    </h3>
                  ),
                }}
              />
              {slice.primary.list_items_one?.map(({ text, image }, index) => {
                return (
                  <div className="flex gap-2 items-center mt-4" key={index}>
                    <PrismicRichText field={text} />
                    <PrismicImage field={image} className="w-[30px] h-[30px]" />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
