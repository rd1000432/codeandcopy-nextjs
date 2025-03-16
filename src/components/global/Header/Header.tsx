'use client'
import { storyblokEditable } from "@storyblok/react/rsc";
import type { FC } from "react";
import type { HeaderStoryblok } from "@/storyblok/component-types-sb";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.scss";
import { useHeader } from "./hooks/useHeader";
import HeaderNavigation from "./components/HeaderNavigation";
import BurgerButton from "./components/BurgerButton";
import { stripHome } from "@/helpers/stripHome";


type HeaderProps = {
  blok: HeaderStoryblok;
  isDraftMode: boolean;
  homepage_link?: { cached_url: string };
  logo?: { filename: string; alt?: string };
  logo_small?: { filename: string; alt?: string };
};

const Header: FC<HeaderProps> = props => {
  const { blok, isDraftMode, logo_small} = props;
  const { isMobileMenuOpen, toggleMenu } = useHeader();
  const normalizeUrl = (url: string) => {
    if (!url) return "/";
    const strippedUrl = stripHome(url);
  
    // Ensure it starts with a leading slash
    const absoluteUrl = strippedUrl.startsWith("/") ? strippedUrl : `/${strippedUrl}`;
  
    return absoluteUrl === "" ? "/" : absoluteUrl; // Ensures "/" remains if `/home` was the only thing in the URL
  };


  return (
    <header {...storyblokEditable(blok)} className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
      <Link className={styles.logoLink} href={normalizeUrl(blok.homepage_link?.cached_url || "/")}>
      {blok.logo && (
            <Image
              src={blok.logo.filename}
              alt={blok.logo.alt || "Logo"}
              width={150}
              height={50} 
              priority
            />
          )}
        </Link>
        {logo_small && (
          <Image
            src={logo_small.filename}
            alt={logo_small.alt || "Small Logo"}
            width={50}
            height={50} 
          />
        )}
      </div>
      <BurgerButton onClick={toggleMenu} isOpen={isMobileMenuOpen} />
      {/* Navigation Menu */}
      <HeaderNavigation
          blok={blok}
          isMobileMenuOpen={isMobileMenuOpen}
          isDraftMode={isDraftMode}
        />
    </header>
  );
};

export default Header;