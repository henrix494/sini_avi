import { ContactSlice } from "@/prismicio-types";
import React from "react";
import Image from "next/image";
import Form from "../form/Form";
export default function ContactComp({ slice }: { slice: ContactSlice }) {
  return (
    <div className="lg:h-screen bg-main-bg max-lg:px-6">
      <div className=" flex items-center h-full  justify-center mt-4 ">
        <div className="flex justify-center gap-[6rem] lg:gap-[16rem] max-lg:flex-col">
          <div className="lg:self-start text-[white] font-bold text-5xl ">
            <div className=" text-right leading-[4rem] max-lg:mt-7">
              <h3 className="">השאר פרטים</h3>
              <h4 className="text-alt">וניצור איתך קשר</h4>
              <h5>בהקדם</h5>
            </div>
            <div className=" ">
              <Form />
            </div>
          </div>
          <div>
            <Image
              src={"/contact/imageOne.png"}
              width={600}
              height={600}
              alt="therapy"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
