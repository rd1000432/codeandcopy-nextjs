"use client";
import { useParams, usePathname } from "next/navigation";
import { useMemo } from "react";

import { getSlugWithoutAppName } from "../../helpers/getSlugWithoutAppName";
import { routing } from "../../i18n/routing";
import type { MultilinkStoryblok } from "@/storyblok/component-types-sb";

const getSlugWithLanguage = (fullSlug: string, language: string) => {
  if (language === routing.defaultLocale) {
    return fullSlug;
  } else {
    const [langSlug, ...otherSlug] = fullSlug.split("/");

    if (langSlug === language) {
      return [language, ...otherSlug].join("/");
    } else {
      return fullSlug;
    }
  }
};

export const useLink = (
  link?: MultilinkStoryblok
): {
  href: string;
  type: "internal" | "external" | "anchored";
  isNewTab: boolean;
} | null => {
  const pathName = usePathname();

  const { locale } = useParams<{ locale: string; slug: string }>();

  return useMemo(() => {
    const { linktype, cached_url, anchor, target, story, email } = link || {};
    const isNewTab = target === "_blank";

    if (!link) {
      return null;
    }

    if (linktype === "story") {
      if (!story) {
        return null;
      }

      const { full_slug = "" } = story;
      const fullSlugWithLanguage = getSlugWithoutAppName(getSlugWithLanguage(full_slug, locale));

      if (anchor) {
        if (pathName === fullSlugWithLanguage) {
          return {
            href: `#${anchor}`,
            type: "anchored",
            isNewTab,
          };
        } else {
          return {
            href: `/${fullSlugWithLanguage}#${anchor}`,
            type: "internal",
            isNewTab,
          };
        }
      }

      return {
        href: `/${fullSlugWithLanguage}`,
        type: "internal",
        isNewTab,
      };
    }

    if (linktype === "email") {
      if (!email) {
        return null;
      }
      return {
        href: `mailto:${link.email}`,
        type: "external",
        isNewTab,
      };
    }

    return {
      href: cached_url || "/",
      type: "external",
      isNewTab,
    };
  }, [link, locale, pathName]);
};
