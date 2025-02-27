"use client";
import Link from "next/link";
import type { ForwardedRef, ReactNode } from "react";
import type { FC } from "react";

import { stripHome } from "../../../helpers/stripHome";
import { useLink } from "../../hooks/useLink";
import type { MultilinkStoryblok } from "@/storyblok/component-types-sb";

type LinkWrapperProps = {
  link?: MultilinkStoryblok;
  className?: string;
  children: ReactNode;
  forwardRef?: ForwardedRef<any>;
  noDiv?: boolean;
  [key: string]: any;
};

const LinkWrapper: FC<LinkWrapperProps> = ({
  link,
  className,
  children,
  forwardRef = null,
  noDiv = false,
  ...props
}) => {
  const linkParams = useLink(link);

  if (linkParams === null) {
    if (noDiv) {
      return <>{children}</>;
    }
    return (
      <div className={className} ref={forwardRef} {...props}>
        {children}
      </div>
    );
  }

  const { href, type, isNewTab } = linkParams;

  if (type === "external" || isNewTab) {
    return (
      <Link
        href={href}
        target={isNewTab ? "_blank" : "_self"}
        className={className}
        rel="noreferrer"
        ref={forwardRef}
        {...props}
      >
        {children}
      </Link>
    );
  }

  if (type === "anchored") {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }

  /*
   * NOTE: in case of href=/home, the link will be stripped to /. If no replace is provided, it will be stripped to an empty string which will result in href="" which leads to a link to the current page.
   */
  if (type === "internal") {
    return (
      <Link
        href={stripHome(href, "/")}
        ref={forwardRef}
        {...props}
        className={className}
      >
        {children}
      </Link>
    );
  }
  return null;
};

export default LinkWrapper;
