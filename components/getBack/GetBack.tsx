import React from "react";
import Image from "next/image";

export default function GetBack() {
  return (
    <div className="h-auto min-h-[800px] flex flex-col lg:flex-row justify-center items-center p-6 lg:p-10 max-lg:gap-10">
      <div className="flex flex-col justify-start w-full lg:w-[600px] space-y-6 text-right lg:text-left max-lg:order-2 ">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-main-bg mb-4">
            !תחזרו למגרש שלכם
          </h1>
        </div>

        <div>
          <p className="text-base md:text-lg lg:text-xl text-gray-700">
            האם ידעתם ששני שלישים מקבוצות ה-NFL משתמשות בדיקור סיני כדי לעזור
            להקל על השפעות אורח חייהן הפיזי המתיש?
          </p>
        </div>

        <div>
          <p className="text-base md:text-lg lg:text-xl text-gray-700">
            across מדינה, יותר ספורטאים מקצועיים פונים לדיקור סיני כדי להקל על
            כיווץ שרירים וכאבים, וגם כדי להתמודד עם בעיות בריאותיות נוספות כמו
            אלרגיות, סטרס, דיכאון ובעיות שינה.
          </p>
        </div>

        <div>
          <p className="text-base md:text-lg lg:text-xl text-gray-700">
            אם דיקור סיני מועיל כל כך לספורטאים ברמה גבוהה, תארו לעצמכם מה הוא
            יכול לעשות בשבילכם. נסו אותו היום ואל תתנו לשום דבר לעצור אתכם
            מלהחזיר את עצמכם למגרש שלכם.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-auto lg:ml-10 mt-6 lg:mt-0">
        <Image
          src={"/getBack/663cd2b9b9862681aa418b34_home-19.png"}
          width={500}
          height={500}
          alt="me"
          className="rounded-3xl w-full lg:w-auto"
        />
      </div>
    </div>
  );
}
