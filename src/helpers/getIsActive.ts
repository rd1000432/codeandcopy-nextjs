"use client";

import { routing } from "@/i18n/routing";

import type { MultilinkStoryblok } from "../storyblok/component-types-sb";
import { getSlugWithoutAppName } from "./getSlugWithoutAppName";
import { stripHome } from "./stripHome";

export const getIsActive = (locale: string, pathName: string, link: MultilinkStoryblok) => {
  if (link === undefined || link.url === undefined) {
    return false;
  }

  let url = link.story?.full_slug ? link.story.full_slug : link.cached_url;

  switch (link.linktype) {
    case "story":
      url = `${stripHome(url)}${link.anchor ? "#" + link.anchor : ""}`;
      break;
    case "asset":
    case "url":
      url = link.url;
      break;
    case "email":
      url = `mailto:${link.email}}`;
      break;
  }

  let path = pathName.length ? `${pathName.slice(1)}/` : "/";

  if (locale !== routing.defaultLocale) {
    path = `${locale}/` + path;
  }

  return url && path.includes(getSlugWithoutAppName(url));
};
