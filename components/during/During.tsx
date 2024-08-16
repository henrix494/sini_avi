"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Card from "../card/Card";
import { DuringTherapySlice } from "@/prismicio-types";
import { PrismicRichText } from "@prismicio/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function During({ slice }: { slice: DuringTherapySlice }) {
  const cardContainerRef = useRef<HTMLDivElement>(null);
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

  const imgArr = [
    {
      src: "/during/one.jpg",
      alt: "before section image",
      title: "ליפניי",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam fuga, eius ut ipsam architecto accusamus velit quas necessitatibus optio perferendis corrupti minima impedit iste. Maiores eligendi illo reprehenderit optio suscipit?",
    },
    {
      src: "/during/two.jpg",
      alt: "during section image",
      title: "בתור",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam fuga, eius ut ipsam architecto accusamus velit quas necessitatibus optio perferendis corrupti minima impedit iste. Maiores eligendi illo reprehenderit optio suscipit?",
    },
    {
      src: "/during/three.jpg",
      alt: "after section image",
      title: "אחריי",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam fuga, eius ut ipsam architecto accusamus velit quas necessitatibus optio perferendis corrupti minima impedit iste. Maiores eligendi illo reprehenderit optio suscipit?",
    },
  ];

  return (
    <>
      <div
        className="flex items-center lg:h-[900px] mt-10 flex-col gap-28"
        dir="rtl"
      >
        <div className="flex justify-around lg:gap-20 gap-10 max-lg:flex-col max-lg:px-7">
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
          className="flex lg:gap-10 gap-20 justify-between lg:w-[70%] max-lg:flex-col"
        >
          {imgArr.map((item) => (
            <Card key={item.alt}>
              <Image src={item.src} width={400} height={400} alt={item.alt} />
              <h3 className="text-[#381f28] text-[2rem] font-[700] leading-[1.3] mt-4">
                {item.title}
              </h3>
              <p className="lg:w-[400px] text-center mt-10">{item.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
