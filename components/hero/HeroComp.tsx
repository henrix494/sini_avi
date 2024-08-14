"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { HeroProps } from "@/slices/Hero";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";

export default function HeroComp({ slice }: HeroProps) {
  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        component.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1, // Adjust duration as needed
        }
      );
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-screen relative flex items-center justify-center pt-32 z-[1]">
      <Image
        src={slice.primary.cover.url || ""}
        layout="fill"
        objectFit="cover"
        alt="asc"
        priority={true}
      />
      <div
        ref={component}
        className="z-10 text-[white] text-center lg:w-[1000px] opacity-0 max-lg:px-4 max-lg:flex max-lg:flex-col max-lg:items-center"
        style={{ transition: "opacity 0s" }}
      >
        {/* <h1 className="text-white text-2xl md:text-5xl lg:text-7xl font-extrabold text-wrap">
          להפעיל <span className="text-alt">ריפוי טיבעי</span>. לשנות את ההרגשה 
        </h1> */}
        <PrismicRichText
          field={slice.primary.hero_color}
          components={{
            paragraph: ({ children }) => (
              <p className="text-alt text-2xl md:text-5xl lg:text-7xl font-extrabold inline-block ">
                {children}
              </p>
            ),
          }}
        />
        <PrismicRichText
          field={slice.primary.hero_title}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-white text-2xl md:text-5xl lg:text-7xl font-extrabold inline-block lg:ml-4 ">
                {children}
              </h2>
            ),
          }}
        />
        <PrismicRichText
          field={slice.primary.rest_hero_title}
          components={{
            heading3: ({ children }) => (
              <h3 className="text-white text-2xl md:text-5xl lg:text-7xl font-extrabold inline-block ">
                {children}
              </h3>
            ),
          }}
        />
        <div className="flex justify-center">
          <PrismicRichText
            field={slice.primary.first_text}
            components={{
              paragraph: ({ children }) => (
                <p className="mt-10 text-xl  text-center lg:w-[900px]">
                  {children}
                </p>
              ),
            }}
          />
        </div>
        <div className="flex justify-center">
          <PrismicRichText
            field={slice.primary.secound_text}
            components={{
              paragraph: ({ children }) => (
                <p className="mt-7 text-xl  text-center lg:w-[900px]">
                  {children}
                </p>
              ),
            }}
          />
        </div>
        <div className="mt-10">
          <Link
            href={
              "https://wa.me/972535226921?text=היי,%20אני%20מעוניין%2Fנת%20לשמוע%20עוד%20פרטים%20על%20הטיפול%20!"
            }
            target="_blank"
            className="bg-[white] px-8 text-[black] rounded-full py-2  font-bold hover:bg-alt hover:text-[white] transition-all "
          >
            קבע פגישה
          </Link>
        </div>
      </div>
    </div>
  );
}
