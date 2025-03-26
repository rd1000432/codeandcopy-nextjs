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
import Logo from "@/icons/Logo.inline.svg";


type HeaderProps = {
  blok: HeaderStoryblok;
  isDraftMode: boolean;
  homepage_link?: { cached_url: string };
  logo?: { filename: string; alt?: string };
  logo_small?: { filename: string; alt?: string };
};

const Header: FC<HeaderProps> = props => {
  const { blok, isDraftMode} = props;
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
      const heroHeight = Math.min(50, window.innerHeight);
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
          <Logo className={styles.logoIcon} />
        </Link>
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