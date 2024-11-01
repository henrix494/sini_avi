import type { Metadata, ResolvingMetadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import { createClient } from "@/prismicio";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

// export async function generateMetadata(): Promise<Metadata> {
//   const clinet = createClient();
//   const page = await clinet.getSingle("settings");
//   return {
//     title: "TWC",
//     description: page.data.meta_description,
//     openGraph: {
//       images: [page.data.og_image.url || ""],
//     },
//   };
// }
export const metadata: Metadata = {
  title: "TWC",
  description: "...",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clinet = createClient();
  const page = await clinet.getSingle("settings");
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="bottom-center" />
        <NavBar navigation={page.data.navigation} logo={page.data.nav_logo} />
        {children}
      </body>
    </html>
  );
}
