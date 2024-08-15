import React from "react";
import Image from "next/image";
import Btn from "../btn/Btn";
export default function AboutTherapyComp() {
  return (
    <div className=" bg-alt-bg lg:h-[700px] flex items-center justify-center max-lg:mt-10 ">
      <div
        className={`flex justify-center items-center lg:max-h-[530px] max-lg:flex-col `}
      >
        <div className="lg:h-[700px] flex items-center max-lg:mt-10 max-lg:px-5 ">
          <Image
            src={"/therapy/oneImage.png"}
            width={550}
            height={550}
            alt="asa"
            className=" rounded-xl"
          />
        </div>
        <div className=" self-start lg:ml-24 max-lg:px-5 text-right">
          <h2 className=" text-main-bg text-[3rem] font-[700] leading-[1.2]">
            טיפול
            <span className=" text-alt"> טווינא </span>
          </h2>
          <p className="lg:w-[500px] text-right mt-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            dolor atque nostrum cumque sit voluptatibus, eveniet fugiat. Tempora
            fugiat laboriosam, repellendus eum inventore, aperiam omnis
            molestiae ratione, officiis vero assumenda.
          </p>
          <p className="lg:w-[500px] text-right mt-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            dolor atque nostrum cumque sit voluptatibus, eveniet fugiat. Tempora
            fugiat laboriosam, repellendus eum inventore, aperiam omnis
            molestiae ratione, officiis vero assumenda.
          </p>
          <p className="lg:w-[500px] text-right mt-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            dolor atque nostrum cumque sit voluptatibus, eveniet fugiat. Tempora
            fugiat laboriosam, repellendus eum inventore, aperiam omnis
            molestiae ratione, officiis vero assumenda.
          </p>
          <div className="mt-10">
            <Btn />
          </div>
        </div>
      </div>
    </div>
  );
}
