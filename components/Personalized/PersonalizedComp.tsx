import React from "react";
import Image from "next/image";

export default function PersonalizedComp() {
  return (
    <div className="flex flex-col h-auto bg-[#fafafa] p-8 " dir="rtl">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">
          בניית תוכנית <span className="text-alt">אישית</span>
        </h1>
        <p className="mt-4 text-gray-600">
          רבים מהמחקרים הראו שדיקור סיני, לבד או בשילוב עם רפואה קונבנציונלית,
          יכול לעזור בטיפול במצבים כגון:
        </p>
      </div>
      <div className="flex gap-20 justify-center mt-6 max-lg:flex-col">
        {/* Pain Section */}
        <div className="flex flex-col text-right">
          <h3 className="font-semibold text-gray-700 text-3xl text-main-bg">
            כאב :
          </h3>
          <ul className="mt-2 space-y-3 text-gray-600 text-2xl font-bold">
            <div className="flex gap-2 items-center">
              <li>גב</li>
              <Image src={"/body/back.svg"} width={30} height={30} alt="back" />
            </div>
            <div className="flex gap-2 items-center">
              <li>כתביים</li>
              <Image
                src={"/body/muscle.svg"}
                width={30}
                height={30}
                alt="muscle"
              />
            </div>
            <div className="flex gap-2 items-center">
              <li>ששדבשדבשדב</li>
              <Image
                src={"/body/digestion.svg"}
                width={30}
                height={30}
                alt="digestion"
              />
            </div>
            <div className="flex gap-2 items-center">
              <li>גב</li>
              <Image src={"/body/back.svg"} width={30} height={30} alt="back" />
            </div>
          </ul>
        </div>
        {/* Internal Section */}
        <div className="flex flex-col text-right">
          <h3 className="font-semibold text-gray-700 text-3xl text-main-bg">
            כאב :
          </h3>
          <ul className="mt-2 space-y-3 text-gray-600 text-2xl font-bold">
            <div className="flex gap-2 items-center">
              <li>גב</li>
              <Image src={"/body/back.svg"} width={30} height={30} alt="back" />
            </div>
            <div className="flex gap-2 items-center">
              <li>כתביים</li>
              <Image
                src={"/body/muscle.svg"}
                width={30}
                height={30}
                alt="muscle"
              />
            </div>
            <div className="flex gap-2 items-center">
              <li>ששדבשדבשדב</li>
              <Image
                src={"/body/digestion.svg"}
                width={30}
                height={30}
                alt="digestion"
              />
            </div>
            <div className="flex gap-2 items-center">
              <li>גב</li>
              <Image src={"/body/back.svg"} width={30} height={30} alt="back" />
            </div>
          </ul>
        </div>
        {/* More Benefits Section */}
        <div className="flex flex-col text-right">
          <h3 className="font-semibold text-gray-700 text-3xl text-main-bg">
            כאב :
          </h3>
          <ul className="mt-2 space-y-3 text-gray-600 text-2xl font-bold">
            <div className="flex gap-2 items-center">
              <li>גב</li>
              <Image src={"/body/back.svg"} width={30} height={30} alt="back" />
            </div>
            <div className="flex gap-2 items-center">
              <li>כתביים</li>
              <Image
                src={"/body/muscle.svg"}
                width={30}
                height={30}
                alt="muscle"
              />
            </div>
            <div className="flex gap-2 items-center">
              <li>ששדבשדבשדב</li>
              <Image
                src={"/body/digestion.svg"}
                width={30}
                height={30}
                alt="digestion"
              />
            </div>
            <div className="flex gap-2 items-center">
              <li>גב</li>
              <Image src={"/body/back.svg"} width={30} height={30} alt="back" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
