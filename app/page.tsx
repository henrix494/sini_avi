import Image from "next/image";
import Hero from "@/components/hero/Hero";
import GetBack from "@/components/getBack/GetBack";
import Personalized from "@/components/Personalized/Personalized";
export default function Home() {
  return (
    <main>
      <Hero />
      <GetBack />
      <Personalized />
    </main>
  );
}
