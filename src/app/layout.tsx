import type { Metadata } from "next";
import "./globals.css";
import { Figtree, Space_Grotesk } from "next/font/google";

import "@/styles/globals.scss";
import { StoryblokProvider } from "@/components/StoryblokProvider";
import { getStoryblokApi } from "@/storyblok";
import { draftMode } from "next/headers";
import Header from "@/components/global/Header/Header";
import Footer from "@/components/global/Footer/Footer";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Code & Copy Creations",
  description: "Digital Agency",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const storyblokApi = getStoryblokApi();

  // Fetch the Global story (where the Header is stored)
  const draft = await draftMode();
  const isEnabled = draft.isEnabled;
  let headerContent = null;
  let footerContent = null;

  try {
    const { data } = await storyblokApi.get(`cdn/stories/global/header`, {
      version: process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
    });

    // console.log("Full Storyblok response:", JSON.stringify(data, null, 2));

    headerContent = data.story.content.global[0];

    if (!headerContent) {
      console.warn("Header content is missing or undefined.");
    }

  // Fetch Footer content
  const { data: footerData } = await storyblokApi.get(`cdn/stories/global/footer`, {
    version: process.env.NODE_ENV === "development" || isEnabled
      ? "draft"
      : "published",
  });

  footerContent = footerData.story.content.global[0];

  if (!footerContent) {
    console.warn("Footer content is missing or undefined.");
  }
} catch (error) {
  console.error("Failed to fetch Header or Footer:", error);
}

  return (
    <StoryblokProvider>
      <html lang="en">
        <body
          className={`${figtree.variable} ${space_grotesk.variable} antialiased`}
        >
          {/* Render the Header */}
          {headerContent ? (
            <Header blok={headerContent} isDraftMode={isEnabled} />
          ) : (
            <div>Loading Header...</div>
          )}
          {children}


          {/* Render the Footer */}
          {footerContent ? (
            <Footer blok={footerContent} />
          ) : (
            <div>Loading Footer...</div>
          )}
        </body>
      </html>
    </StoryblokProvider>
  );
}