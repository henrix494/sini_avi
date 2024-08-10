"use client";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className=" h-screen relative flex items-center justify-center pt-10 z-[-1]  ">
      <Image
        src="/hero/663cd119a16c36211dcff236_home-slide-1.png"
        layout="fill"
        objectFit="cover"
        alt="asc"
        priority={true}
      />
      <div className="z-10 text-[white] text-center w-[800px]">
        <h1 className="text-white text-2xl md:text-5xl lg:text-7xl font-extrabold text-wrap    ">
          להפעיל <span className=" text-alt">ריפוי טיבעי</span>. לשנות את ההרגשה
        </h1>
        <p className="mt-10 text-xl">
          ? האם חיי היומיום שלך מוגבלים בגלל מצב שאינך מצליח להתגבר עליו באמצעות
          תרופות מרשם בלבד
        </p>
        <p className="mt-2">
          נקודות דיקור מעוררות את מערכת העצבים המרכזית לשחרר כימיקלים המסייעים
          לתהליך הריפוי הטבעי של הגוף, ומשפרים את הרווחה הגופנית והרגשית שלך.
        </p>
        <button className="bg-[white] px-8 text-[black] rounded-full py-2 mt-10 font-bold hover:bg-alt hover:text-[white] transition-all">
          קבע פגישה
        </button>
      </div>
    </div>
  );
}
