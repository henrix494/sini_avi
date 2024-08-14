import type { Metadata, ResolvingMetadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import { createClient } from "@/prismicio";
const inter = Inter({ subsets: ["latin"] });
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

export async function generateMetadata(): Promise<Metadata> {
  const clinet = createClient();
  const page = await clinet.getSingle("settings");
  return {
    title: page.data.site_title || "sini",
    description: page.data.meta_description,
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  };
}

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
        <NavBar navigation={page.data.navigation} logo={page.data.nav_logo} />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
