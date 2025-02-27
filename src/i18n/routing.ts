import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

// TODO try to fetch this information from storyblok space during build
// TODO update locales to match your project's locales in storyblok
export const routing = defineRouting({
  locales: ["de", "en"],
  defaultLocale: "de",
  localePrefix: "as-needed", // As-needed means the default locale will not have a prefix https://next-intl-docs.vercel.app/docs/routing#locale-prefix-as-needed
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation(routing);
