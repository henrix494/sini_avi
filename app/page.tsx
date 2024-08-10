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
// import { Metadata } from "next";
// import { SliceZone } from "@prismicio/react";

// import { createClient } from "@/prismicio";
// import { components } from "@/slices";

// export default async function Page() {
//   const client = createClient();
//   const page = await client.getSingle("homepage");

//   return <SliceZone slices={page.data.slices} components={components} />;
// }

// export async function generateMetadata(): Promise<Metadata> {
//   const client = createClient();
//   const page = await client.getSingle("homepage");

//   return {
//     title: page.data.meta_title,
//     description: page.data.meta_description,
//   };
// }
