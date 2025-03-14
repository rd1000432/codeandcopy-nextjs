"use client";

import cn from "classnames";
import { usePathname } from "next/navigation";
import { type FC, useRef } from "react";

import { getIsActive } from "@/helpers/getIsActive";
import type { HeaderStoryblok } from "@/storyblok/component-types-sb";

// import LanguageSwitcher from "../LanguageSwitcher";
import styles from "./header-navigation.module.scss";
import Link from "next/link";

const HeaderNavigation: FC<{
  blok: HeaderStoryblok;
  isMobileMenuOpen?: boolean;
  isDraftMode?: boolean;
}> = ({ blok, isMobileMenuOpen}) => {
  const menuItemLinkRef = useRef<(HTMLElement | null)[]>([]);
  const pathName = usePathname();

  return (
    <nav className={cn(styles.headerNavigation, { [styles.open]: isMobileMenuOpen })}>
      <ul className={styles["navigationList"]}>
        {!!blok.menu_items?.length &&
          blok.menu_items.map((item, index) => {
            return (
              <li
                key={item._uid}
                className={cn(styles.link, {
                  [styles.active]: getIsActive(pathName, item.link?.cached_url || "", blok),
                })}
              >
                <Link
                  href={item.link!.cached_url || ""}
                  ref={(element: HTMLAnchorElement | null) => { menuItemLinkRef.current[index] = element; }}
                  key={index}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        {/* <LanguageSwitcher version={isDraftMode ? "draft" : "published"} /> */}
        {/* <div className={cn(styles.footerLinks, styles.legalLinks)}>
          {footer.legal_links?.map((link, index) => (
            <LinkWrapper
              link={link.link!}
              forwardRef={element => (menuItemLinkRef.current[index] = element)}
              key={index}
            >
              {link.title}
            </LinkWrapper>
          ))}
        </div> */}
        {/* <div className={cn(styles.footerLinks, styles.socialLinks)}>
          {footer.social_links?.map((link, index) =>
            link.link && link.icon ? (
              <LinkWrapper
                link={link.link!}
                forwardRef={element => (menuItemLinkRef.current[index] = element)}
                key={index}
              >
                <LXImage
                  src={link.icon.filename}
                  alt={link.icon.alt ?? ""}
                  width={24}
                  height={24}
                  role="presentation"
                  objectFit="cover"
                />
              </LinkWrapper>
            ) : null
          )}
        </div> */}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
