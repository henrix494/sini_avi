import React from "react";
import Image from "next/image";
import Btn from "../btn/Btn";
import { HeroAboutSlice } from "@/prismicio-types";

export default function HeroAboutComp({ slice }: { slice: HeroAboutSlice }) {
  return (
    <div className="h-screen relative flex items-center justify-center z-[1]">
      <div className="absolute inset-0">
        <Image
          src={"/hero/6627d58dd6df44cb0db65b4a_bannerb_3.jpg"}
          layout="fill"
          objectFit="cover"
          alt="Hero Background"
          priority={true}
        />
      </div>
      <div
        className="z-10 flex w-screen justify-center items-center mt-20 max-lg:px-5 "
        dir="rtl"
      >
        <div className="mb-4 flex flex-col items-center justify-center  ">
          <div className="lg:w-[600px] lg:h-[350px] bg-[#ffffff15] backdrop-blur-md flex   rounded-xl max-lg:py-4">
            <div className=" pr-5 pt-3 lg:text-[3rem] text-[2rem] font-bold lg:leading-[4rem] ">
              <h3 className="text-[white]"></h3>
              <h4 className="text-alt ">דיקור סיני</h4>
              <p className="text-base lg:text-xl text-[white] font-normal max-lg:leading-[1.7rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                esse libero iste culpa, corrupti ea a reprehenderit nam
                inventore veniam ad deserunt est quos, sed, animi cupiditate
                amet? Doloremque, veniam!
              </p>
              <Btn className="text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-red-500 w-1/2 h-[25%] max-lg:hidden"></div>
      </div>
    </div>
  );
}
