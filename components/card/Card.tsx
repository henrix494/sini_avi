import React, { ReactElement } from "react";

export default function Card({ children }: { children: ReactElement[] }) {
  return (
    <div className=" border-2 border-[white] p-2 shadow-2xl rounded-xl hover:border-2 hover:border-[#7f193e] transition-all flex flex-col items-center h-[550px]">
      {children}
    </div>
  );
}
