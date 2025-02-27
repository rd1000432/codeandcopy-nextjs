"use client";
import cn from "classnames";
import { type FC, useCallback, useRef } from "react";

import { LinkWrapper } from "@/components/common";
// import { IconArrowLine } from "@/components/icons";
import type { MultilinkStoryblok } from "@/storyblok/component-types-sb";

import styles from "./button.module.scss";

type Props = {
  title?: string;
  link?: MultilinkStoryblok;
  color?: "default" | "highlight" | "light" | "";
  style?: "default" | "borderless" | "";
  className?: string;
  onClick?: () => void;
  [key: string]: any;
};

export const Button: FC<Props> = props => {
  const { title, link, style = "default", color = "default", className, onClick, ...rest } = props;
  const ref = useRef<HTMLButtonElement>(null);

  const linkClassname = cn(
    styles.button,
    {
      [styles.bordered]: style === "default",
      [styles.light]: color === "light",
      [styles.highlight]: color === "highlight",
    },
    className
  );

  const onClickCallback = useCallback(() => {
    if (onClick) {
      onClick();
    }
    setTimeout(() => ref.current?.blur());
  }, [onClick]);

  if (!title && (!link || !onClick)) {
    return null;
  }

  return (
    <LinkWrapper
      link={link}
      className={linkClassname}
      onClick={onClick ? onClickCallback : undefined}
      forwardRef={ref}
      {...rest}
    >
      {title}
      {/* <IconArrowLine
        className={cn(styles.icon, {
          [styles.light]: color === "light",
        })}
      /> */}
    </LinkWrapper>
  );
};
