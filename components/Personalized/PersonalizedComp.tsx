import React from "react";
import Image from "next/image";
import { PersonalizedSlice } from "@/prismicio-types";
import { PrismicRichText } from "@prismicio/react";

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
        {/* Pain Section */}
        <div className="flex flex-col text-right">
          <h3 className="font-semibold text-gray-700 text-3xl text-main-bg">
            כאב :
          </h3>
          <ul className="mt-2 space-y-3 text-gray-600 text-2xl font-bold">
            <div className="flex gap-2 items-center">
              <li>גב</li>
              <Image src={"/body/back.svg"} width={30} height={30} alt="back" />
            </div>
            <div className="flex gap-2 items-center">
              <li>כתביים</li>
              <Image
                src={"/body/muscle.svg"}
                width={30}
                height={30}
                alt="muscle"
              />
            </div>
            <div className="flex gap-2 items-center">
              <li>ששדבשדבשדב</li>
              <Image
                src={"/body/digestion.svg"}
                width={30}
                height={30}
                alt="digestion"
              />
            </div>
            <div className="flex gap-2 items-center">
              <li>גב</li>
              <Image src={"/body/back.svg"} width={30} height={30} alt="back" />
            </div>
          </ul>
        </div>
        {/* Internal Section */}
        <div className="flex flex-col text-right">
          <h3 className="font-semibold text-gray-700 text-3xl text-main-bg">
            כאב :
          </h3>
          <ul className="mt-2 space-y-3 text-gray-600 text-2xl font-bold">
            <div className="flex gap-2 items-center">
              <li>גב</li>
              <Image src={"/body/back.svg"} width={30} height={30} alt="back" />
            </div>
            <div className="flex gap-2 items-center">
              <li>כתביים</li>
              <Image
                src={"/body/muscle.svg"}
                width={30}
                height={30}
                alt="muscle"
              />
            </div>
            <div className="flex gap-2 items-center">
              <li>ששדבשדבשדב</li>
              <Image
                src={"/body/digestion.svg"}
                width={30}
                height={30}
                alt="digestion"
              />
            </div>
            <div className="flex gap-2 items-center">
              <li>גב</li>
              <Image src={"/body/back.svg"} width={30} height={30} alt="back" />
            </div>
          </ul>
        </div>
        {/* More Benefits Section */}
        <div className="flex flex-col text-right">
          <h3 className="font-semibold text-gray-700 text-3xl text-main-bg">
            כאב :
          </h3>
          <ul className="mt-2 space-y-3 text-gray-600 text-2xl font-bold">
            <div className="flex gap-2 items-center">
              <li>גב</li>
              <Image src={"/body/back.svg"} width={30} height={30} alt="back" />
            </div>
            <div className="flex gap-2 items-center">
              <li>כתביים</li>
              <Image
                src={"/body/muscle.svg"}
                width={30}
                height={30}
                alt="muscle"
              />
            </div>
            <div className="flex gap-2 items-center">
              <li>ששדבשדבשדב</li>
              <Image
                src={"/body/digestion.svg"}
                width={30}
                height={30}
                alt="digestion"
              />
            </div>
            <div className="flex gap-2 items-center">
              <li>גב</li>
              <Image src={"/body/back.svg"} width={30} height={30} alt="back" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
