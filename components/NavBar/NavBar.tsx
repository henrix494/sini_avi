"use client";
import React, { useState } from "react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { LinkField } from "@prismicio/types"; // Import the type
import { ImageFieldImage } from "@prismicio/client";

// Define the type for the navigation prop
interface NavigationItem {
  label: string;
  link: LinkField; // Ensure this matches the expected type for PrismicNextLink
}

export default function NavBar({
  navigation,
  logo,
}: {
  navigation: any;
  logo: ImageFieldImage; // Ensure the logo prop is also of the correct type
}) {
  const [isHam, setIsHam] = useState<boolean>(false);

  const handleHamClick = () => {
    setIsHam((prev) => !prev);
  };

  return (
    <nav className="bg-main-bg h-[80px] fixed top-0 w-full text-white flex lg:justify-center text-[white] z-[100]">
      <div className="flex items-center max-lg:justify-around h-full lg:w-[70%] w-full px-4 lg:px-0 lg:gap-20 z-[1200]">
        <div>
          <PrismicNextImage field={logo} alt="" height={50} />
        </div>
        <div
          className={`flex max-lg:flex-col lg:flex-row gap-10 lg:items-center lg:static absolute top-[70px] lg:top-0 left-0 w-full lg:w-auto bg-main-bg transition-all duration-500 ease-out overflow-hidden ${
            isHam ? "max-h-[400px]" : "max-h-0"
          } lg:max-h-none lg:block`}
          style={{ zIndex: isHam ? 9 : -1 }}
        >
          <div className="flex gap-10 max-lg:flex-col relative text-right ">
            {navigation.map(({ link, label }: any) => (
              <PrismicNextLink
                key={label}
                field={link}
                className="text-white cursor-pointer "
              >
                {label}
              </PrismicNextLink>
            ))}
          </div>
        </div>
        <div onClick={handleHamClick} className="lg:hidden cursor-pointer">
          <span>HAM</span>
        </div>
      </div>
    </nav>
  );
}
