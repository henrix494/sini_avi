"use client";
import React, { useState } from "react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { LinkField } from "@prismicio/types"; // Import the type
import { ImageFieldImage } from "@prismicio/client";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
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

    if (!isHam) {
      gsap.to(".ham-line1", { rotation: 38, y: -4, duration: 0.3 });
      gsap.to(".ham-line2", { opacity: 0, duration: 0.3 });
      gsap.to(".ham-line3", { rotation: -38, y: -4, duration: 0.3 });
    } else {
      gsap.to(".ham-line1", { rotation: 0, y: 0, duration: 0.3 });
      gsap.to(".ham-line2", { opacity: 1, duration: 0.3 });
      gsap.to(".ham-line3", { rotation: 0, y: 0, duration: 0.3 });
    }
  };

  return (
    <nav className="bg-main-bg h-[80px] fixed top-0 w-full text-white flex lg:justify-center text-[white] z-[100] ">
      <div className="flex items-center max-lg:justify-around h-full lg:w-[70%] w-full px-4 lg:px-0 lg:gap-20 z-[1200] ">
        <div>
          <Image src={"/icon.svg"} width={70} height={60} alt="icon" />
        </div>
        <div
          className={`flex max-lg:flex-col lg:flex-row gap-10 lg:items-center lg:static absolute top-[70px] lg:top-0 left-0 w-full lg:w-auto bg-main-bg transition-all duration-500 ease-out overflow-hidden ${
            isHam ? "max-h-[400px]" : "max-h-0"
          } lg:max-h-none lg:block`}
          style={{ zIndex: isHam ? 9 : -1 }}
        >
          <div className="flex gap-10 max-lg:flex-col relative text-right px-4 pt-2 ">
            {navigation.map(({ link, label }: any) => (
              <PrismicNextLink
                key={label}
                field={link}
                className="text-white cursor-pointer "
              >
                {label}
              </PrismicNextLink>
            ))}
            <Link
              href={
                "https://wa.me/972535226921?text=היי,%20אני%20מעוניין%2Fנת%20לשמוע%20עוד%20פרטים%20על%20הטיפול%20!"
              }
              target="_blank"
              className="self-center bg-[white] text-[black] px-16 py-2 rounded-full hover:opacity-90 transition-all font-bold lg:hidden mb-4"
            >
              <button>צור קשר</button>
            </Link>
          </div>
        </div>
        <div onClick={handleHamClick} className="lg:hidden cursor-pointer">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ham"
          >
            <line
              x1="4"
              y1="7"
              x2="20"
              y2="7"
              stroke="white"
              strokeWidth="2"
              className="ham-line1"
            />
            <line
              x1="4"
              y1="12"
              x2="20"
              y2="12"
              stroke="white"
              strokeWidth="2"
              className="ham-line2"
            />
            <line
              x1="4"
              y1="17"
              x2="20"
              y2="17"
              stroke="white"
              strokeWidth="2"
              className="ham-line3"
            />
          </svg>
        </div>
      </div>
      <Link
        href={
          "https://wa.me/972535226921?text=היי,%20אני%20מעוניין%2Fנת%20לשמוע%20עוד%20פרטים%20על%20הטיפול%20!"
        }
        target="_blank"
        className="self-center bg-[white] text-[black] px-16 py-2 rounded-full hover:opacity-90 transition-all font-bold max-lg:hidden"
      >
        <button>צור קשר</button>
      </Link>
    </nav>
  );
}
