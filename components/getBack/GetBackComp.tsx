import React from "react";
import Image from "next/image";
import { GetBackProps } from "@/slices/GetBack";
import { PrismicImage, PrismicRichText } from "@prismicio/react";

export default function GetBackComp({ slice }: GetBackProps) {
  return (
    <div className="h-auto min-h-[800px] flex flex-col lg:flex-row justify-center items-center p-6 lg:p-10 max-lg:gap-10 ">
      <div className="flex flex-col justify-start w-full lg:w-[600px] space-y-6 text-right lg:text-left max-lg:order-2 ">
        <div className="relative">
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading2: ({ children }) => (
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-main-bg mb-4 text-right">
                  {children}
                </h2>
              ),
            }}
          />
          <Image
            className=" absolute right-0 top-12"
            src={"/underLine.svg"}
            width={400}
            height={200}
            alt="under"
          />
        </div>
        {slice.primary.get_back_text?.map(({ text }, index) => {
          return (
            <div key={index}>
              <PrismicRichText
                field={text}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-base md:text-lg lg:text-xl text-gray-700 text-right">
                      {" "}
                      {children}
                    </p>
                  ),
                }}
              />
              ;
            </div>
          );
        })}
        {/* 
        <div>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 text-right">
            האם ידעתם ששני שלישים מקבוצות ה-NFL משתמשות בדיקור סיני כדי לעזור
            להקל על השפעות אורח חייהן הפיזי המתיש?
          </p>
        </div>

        <div>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 text-right">
            across מדינה, יותר ספורטאים מקצועיים פונים לדיקור סיני כדי להקל על
            כיווץ שרירים וכאבים, וגם כדי להתמודד עם בעיות בריאותיות נוספות כמו
            אלרגיות, סטרס, דיכאון ובעיות שינה.
          </p>
        </div>

        <div>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 text-right">
            אם דיקור סיני מועיל כל כך לספורטאים ברמה גבוהה, תארו לעצמכם מה הוא
            יכול לעשות בשבילכם. נסו אותו היום ואל תתנו לשום דבר לעצור אתכם
            מלהחזיר את עצמכם למגרש שלכם.
          </p>
        </div> */}
        <div className="self-end ">
          <button className="self-end bg-[#381f28] text-[white] px-20 py-2 rounded-full">
            צור קשר
          </button>
        </div>
      </div>

      <div className="w-full lg:w-auto lg:ml-10 mt-6 lg:mt-0">
        <Image
          src={slice.primary.main_image.url || " "}
          width={500}
          height={500}
          alt="me"
          className="rounded-3xl w-full lg:w-auto"
        />
      </div>
    </div>
  );
}
