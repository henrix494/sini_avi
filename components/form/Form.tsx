import React from "react";
import Btn from "../btn/Btn";
export default function Form() {
  return (
    <div className="mt-14 text-xl text-main-bg" dir="rtl">
      <form>
        <div className="flex gap-10 max-lg:flex-col  ">
          <div className="flex flex-col  gap-2 ">
            <label htmlFor="name" className="whitespace-nowrap text-[white]">
              שם*
            </label>
            <input
              className="w-[200px] h-[30px] border border-gray-300 rounded px-2"
              type="text"
              id="name"
              style={{ verticalAlign: "middle" }}
            />
          </div>
          <div className="flex flex-col  gap-2 ">
            <label htmlFor="name" className="whitespace-nowrap text-[white]">
              שם משפחה*
            </label>
            <input
              className="w-[200px] h-[30px] border border-gray-300 rounded px-2"
              type="text"
              id="name"
              style={{ verticalAlign: "middle" }}
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col  gap-2 mt-10 ">
            <label htmlFor="name" className="whitespace-nowrap text-[white]">
              מספר לחזרה*
            </label>
            <input
              className="w-full h-[30px] border border-gray-300 rounded px-2 "
              type="text"
              id="name"
              style={{ verticalAlign: "middle" }}
            />
          </div>
        </div>
        <div className="mt-10">
          <button className="self-end bg-[white] text-[black] px-14 py-2 rounded-full hover:opacity-90 transition-all">
            שלח\י
          </button>
        </div>
      </form>
    </div>
  );
}
