"use client";

import cn from "classnames";
import { usePathname } from "next/navigation";
import { type FC } from "react"; // useRef

import { getIsActive } from "@/helpers/getIsActive";
import { stripHome } from "@/helpers/stripHome";
import Image from "next/image";

import type { FooterStoryblok, HeaderStoryblok } from "@/storyblok/component-types-sb";

// import LanguageSwitcher from "../LanguageSwitcher";
import styles from "./header-navigation.module.scss";
import Link from "next/link";

const HeaderNavigation: FC<{
  blok: HeaderStoryblok;
  isMobileMenuOpen?: boolean;
  isDraftMode?: boolean;
  footer: FooterStoryblok;
  closeMenu?: () => void; 
}> = ({ blok, isMobileMenuOpen, footer, closeMenu }) => {
  const pathName = usePathname();

  const normalizeUrl = (url: string) => {
    if (!url) return "/";
    const strippedUrl = stripHome(url);
  
    // Ensure it starts with a leading slash
    const absoluteUrl = strippedUrl.startsWith("/") ? strippedUrl : `/${strippedUrl}`;
  
    return absoluteUrl === "" ? "/" : absoluteUrl; // Ensures "/" remains if `/home` was the only thing in the URL
  };  

  return (
  
    <nav className={cn(styles.headerNavigation, { [styles.open]: isMobileMenuOpen })}>
      <ul className={styles.navigationList}>
        {!!blok.menu_items?.length &&
          blok.menu_items.map((item) => (
            <li
              key={item._uid}
              className={cn(styles.link, {
              [styles.active]: getIsActive(pathName, normalizeUrl(item.link?.cached_url || ""), item)
                            })}
            >
              <Link 
                href={normalizeUrl(item.link?.cached_url || "")}
                onClick={closeMenu}
              >
                {item.title}
              </Link>
            </li>
          ))}
          <div className={cn(styles.footerLinks, styles.legalLinks)}>
            {footer.legal_links?.map((link, index) => (
              <Link
                href={normalizeUrl(link.link?.cached_url || "")}
                key={index}
                onClick={closeMenu}
              >
                {link.title}
              </Link>
            ))}
        </div>
        <div className={cn(styles.footerLinks, styles.socialLinks)}>
          {footer.social_links?.map((link, index) =>
            link.link && link.icon ? (
              <Link
              href={normalizeUrl(link.link?.cached_url || "")}
              key={index}
              onClick={closeMenu}
              >
                <Image
                  src={link.icon.filename}
                  alt={link.icon.alt || `Link to ${link.title || "social media"}`}
                  width={44}
                  height={44}
                  />
              </Link>
            ) : null
          )}
        </div>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
