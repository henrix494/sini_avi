"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Card from "../card/Card";
import { DuringTherapySlice } from "@/prismicio-types";
import { PrismicRichText } from "@prismicio/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function During({ slice }: { slice: DuringTherapySlice }) {
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const eachCardRef = useRef<HTMLDivElement>(null);
  let mm = gsap.matchMedia();
  useEffect(() => {
    if (cardContainerRef.current) {
      mm.add("(min-width: 800px)", () => {
        gsap.fromTo(
          cardContainerRef?.current?.children as any,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power1.inOut",
            stagger: 0.2, // Slight delay between each card animation
            scrollTrigger: {
              trigger: cardContainerRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }
  }, []);
  useLayoutEffect(() => {
    mm.add("(max-width: 800px)", () => {
      if (eachCardRef.current) {
        gsap.fromTo(
          eachCardRef?.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: eachCardRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <>
      <div className="flex items-center  mt-10 flex-col gap-28 " dir="rtl">
        <div className="flex justify-around lg:gap-20 gap-10 max-lg:flex-col max-lg:px-7 ">
          <div>
            <PrismicRichText
              field={slice.primary.title_color}
              components={{
                heading3: ({ children }) => (
                  <h3 className="text-[2.5rem] font-[700] text-alt inline-block ml-4">
                    {children}
                  </h3>
                ),
              }}
            />
            <PrismicRichText
              field={slice.primary.title}
              components={{
                heading4: ({ children }) => (
                  <h4 className="text-[2.5rem] font-[700] text-main-bg inline-block">
                    {children}
                  </h4>
                ),
              }}
            />
          </div>
          <div>
            <PrismicRichText
              field={slice.primary.description}
              components={{
                paragraph: ({ children }) => (
                  <p className="lg:w-[500px] text-[#666] text-[1.125rem]">
                    {children}
                  </p>
                ),
              }}
            />
          </div>
        </div>
        <div
          ref={cardContainerRef}
          className="flex lg:gap-10 gap-10 justify-between flex-wrap "
        >
          {slice.primary.cards?.map(({ image, title, text }, index) => (
            <Card key={index}>
              <Image
                src={image.url || " "}
                width={400}
                height={400}
                alt={image.alt || " "}
                className="w-full h-auto object-cover " // Ensure the image is responsive
              />
              <PrismicRichText
                field={title}
                components={{
                  heading3: ({ children }) => (
                    <h3 className="text-[#381f28] text-[2rem] font-[700] leading-[1.3] mt-4 text-center  ">
                      {" "}
                      {/* Center the text */}
                      {children}
                    </h3>
                  ),
                }}
              />
              <PrismicRichText
                field={text}
                components={{
                  heading4: ({ children }) => (
                    <h4 className=" text-center mt-10 ">{children}</h4>
                  ),
                }}
              />
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
