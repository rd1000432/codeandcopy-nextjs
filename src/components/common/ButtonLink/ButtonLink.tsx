"use client";
import cn from "classnames";
import { type FC, useCallback, useRef } from "react";

import LinkWrapper from "../LinkWrapper/LinkWrapper";
import { IconArrow } from "@/icons";
import type { ButtonLinkStoryblok } from "@/storyblok/component-types-sb";

import styles from "./button-link.module.scss";

export type Props = {
  link: ButtonLinkStoryblok;
  className?: string;
  iconClassName?: string;
  onClick?: () => void;
};
const ButtonLink: FC<Props> = ({ link, className = null, iconClassName, onClick }) => {
  const { title, link: linkData, style, icon, icon_position } = link || {};
  const ref = useRef<HTMLButtonElement>(null);
  const linkClassname = cn(
    styles.link,
    {
      [styles.primary]: style === "primary",
      [styles.secondary]: style === "secondary",
    },
    className
  );

  const onClickCallback = useCallback(() => {
    if (onClick) {
      onClick();
    }
    setTimeout(() => ref.current?.blur());
  }, [onClick]);

  return (
    <LinkWrapper
      link={linkData}
      className={linkClassname}
      onClick={onClick ? onClickCallback : undefined}
      forwardref={ref}
    >
      {title}
      {icon && (
        <IconArrow
          className={cn(styles.iconWrapper, iconClassName, {
            [styles.reversed]: icon_position === "down",
          })}
        />
      )}
    </LinkWrapper>
  );
};

export default ButtonLink;
