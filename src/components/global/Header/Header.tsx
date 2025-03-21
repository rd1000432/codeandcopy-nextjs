'use client'
import { useState, useEffect } from "react";
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
import cn from "classnames";


type HeaderProps = {
  blok: HeaderStoryblok;
  isDraftMode: boolean;
  homepage_link?: { cached_url: string };
  logo?: { filename: string; alt?: string };
  logo_small?: { filename: string; alt?: string };
};

const Header: FC<HeaderProps> = props => {
  const { blok, isDraftMode, logo_small} = props;
  const { isMobileMenuOpen, toggleMenu, closeMenu } = useHeader();
  const [scrolledPastHero, setScrolledPastHero] = useState(false);


  const normalizeUrl = (url: string) => {
    if (!url) return "/";
    const strippedUrl = stripHome(url);
  
    // Ensure it starts with a leading slash
    const absoluteUrl = strippedUrl.startsWith("/") ? strippedUrl : `/${strippedUrl}`;
  
    return absoluteUrl === "" ? "/" : absoluteUrl; // Ensures "/" remains if `/home` was the only thing in the URL
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = Math.min(500, window.innerHeight); // Match min-height: min(rem(500), 100vh);
      setScrolledPastHero(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header {...storyblokEditable(blok)} 
    className={cn(styles.header, {
      [styles.mobileMenuOpen]: isMobileMenuOpen,
      [styles.scrolledPastHero]: scrolledPastHero
    })}
    >
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
          closeMenu={closeMenu}
        />
    </header>
  );
};

export default Header;