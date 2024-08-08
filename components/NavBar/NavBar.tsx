"use client";
import React, { useState } from "react";

export default function NavBar() {
  const [isHam, setIsHam] = useState<boolean>(false);

  const handleHamClick = () => {
    setIsHam((prev) => !prev);
  };

  return (
    <nav className="bg-main-bg h-[80px] fixed top-0 w-full text-white flex lg:justify-center  text-[white] z-[120]">
      <div className="flex items-center max-lg:justify-around h-full lg:w-[70%] w-full px-4 lg:px-0 lg:gap-20">
        <div>
          <h2>Logo</h2>
        </div>
        <div
          className={`flex max-lg:flex-col lg:flex-row gap-10 lg:items-center lg:static absolute top-[70px] lg:top-0 left-0 w-full lg:w-auto bg-main-bg transition-all duration-500 ease-out overflow-hidden ${
            isHam ? "max-h-[400px]" : "max-h-0"
          } lg:max-h-none lg:block`}
          style={{ zIndex: isHam ? 9 : -1 }}
        >
          <div className="flex gap-10 max-lg:flex-col">
            <h2>Link 1</h2>
            <h2>Link 2</h2>
            <h2>Link 3</h2>
            <h2>Link 4</h2>
          </div>
        </div>
        <div onClick={handleHamClick} className="lg:hidden cursor-pointer">
          <span>HAM</span>
        </div>
      </div>
    </nav>
  );
}
