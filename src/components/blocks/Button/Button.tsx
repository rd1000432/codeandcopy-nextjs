"use client";
import cn from "classnames";
import { type FC } from "react";

import Link from "next/link";
import { IconArrow } from "@/icons";
import type { MultilinkStoryblok } from "@/storyblok/component-types-sb";
import { stripHome } from "@/helpers/stripHome";

import styles from "./button.module.scss";

type Props = {
  title?: string;
  link?: MultilinkStoryblok;
  color?: "default" | "highlight" | "light" | "";
  style?: "default" | "borderless" | "";
  className?: string;
  [key: string]: any;
};

export const Button: FC<Props> = props => {
  const { title, link, style = "default", color = "default", className } = props;

  const normalizeUrl = (link?: MultilinkStoryblok) => {
    const url = link?.cached_url || ""; // Ensure it's a string

    if (!url) return "/";
    const strippedUrl = stripHome(url);
    return strippedUrl.startsWith("/") ? strippedUrl : `/${strippedUrl}`;
  };

  const linkClassname = cn(
    styles.button,
    {
      [styles.bordered]: style === "default",
      [styles.light]: color === "light",
      [styles.highlight]: color === "highlight",
    },
    className
  );

  if (!title && (!link?.cached_url || !link?.title)) {
    return null;
  }

  return (
    <Link
    className={linkClassname} 
    href={normalizeUrl(link?.cached_url || "/")}
    >
      {title || link?.title || "Default Button Title"}
      <IconArrow
        className={cn(styles.icon, {
          [styles.light]: color === "light",
        })}
      />
    </Link>
  );
};
