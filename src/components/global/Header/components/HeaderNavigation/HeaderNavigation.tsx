"use client";

import cn from "classnames";
import { usePathname } from "next/navigation";
import { type FC } from "react"; // useRef

import { getIsActive } from "@/helpers/getIsActive";
import { stripHome } from "@/helpers/stripHome";

import type { HeaderStoryblok } from "@/storyblok/component-types-sb";

// import LanguageSwitcher from "../LanguageSwitcher";
import styles from "./header-navigation.module.scss";
import Link from "next/link";

const HeaderNavigation: FC<{
  blok: HeaderStoryblok;
  isMobileMenuOpen?: boolean;
  isDraftMode?: boolean;
  closeMenu?: () => void; 
}> = ({ blok, isMobileMenuOpen, closeMenu }) => {
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
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
