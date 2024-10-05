import Link from "next/link";
import React from "react";

export default function Btn({ className }: { className?: string }) {
  return (
    <Link
      href={
        "https://wa.me/972535226921?text=היי,%20אני%20מעוניין%2Fנת%20לשמוע%20עוד%20פרטים%20על%20הטיפול%20!"
      }
      target="_blank"
      className={
        `self-end bg-[#381f28] text-[white] px-20 py-2 rounded-full hover:opacity-90 transition-all ` +
        className
      }
    >
      צור קשר
    </Link>
  );
}
