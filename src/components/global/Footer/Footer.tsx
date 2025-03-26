/* eslint-disable sonarjs/no-duplicate-string */
// import { LXImage } from "@lx-media/lx-image";
import { storyblokEditable } from "@storyblok/react";
import type { FC } from "react";

// import { LinkWrapper } from "@/components/common";
import Link from "next/link";

// import { LXFooterIcon } from "@/icons";
import Logo from "@/icons/Logo.inline.svg";
import Image from "next/image";
import type { FooterStoryblok } from "@/storyblok/component-types-sb";

import FooterItem from "./components/FooterItem";
import styles from "./footer.module.scss";
import { stripHome } from "@/helpers/stripHome";


const Footer: FC<{ blok: FooterStoryblok }> = ({ blok }) => {

  const { copyright, legal_links, social_links, main_column } = blok;

    const normalizeUrl = (url: string) => {
      if (!url) return "/";
      const strippedUrl = stripHome(url);
    
      // Ensure it starts with a leading slash
      const absoluteUrl = strippedUrl.startsWith("/") ? strippedUrl : `/${strippedUrl}`;
    
      return absoluteUrl === "" ? "/" : absoluteUrl; // Ensures "/" remains if `/home` was the only thing in the URL
    };

  return (
    <footer className={styles.footer} {...storyblokEditable(blok)}>
      <div className={styles.content}>
        <div className={styles.columns}>
          {!!main_column?.length &&
            main_column?.map((col: any, index: number) => (
              <div key={index} className={styles.column}>
                <FooterItem blok={col} key={index} />
              </div>
            ))}
          <div className={styles.column}>
            <Logo className={styles.footerLogo} />
          </div>
        </div>
      </div>
      <div className={styles.bottomLine}>
        <p className={styles.copyright} data-cy="lx-copyright">
          {new Date().getFullYear()} © {copyright}
        </p>
        <div className={styles.legalLinks}>
          {legal_links?.map((link: any) => {
            if (!link?.link || !link?.title) {
              return null;
            }

            return (
              <a
                key={link._uid}
                href={normalizeUrl(link.link?.cached_url || "/")}
                className={styles.legalLink}
              >
                {link.title}
              </a>
            );
          })}
        </div>
        <div className={styles.socialLinks}>
          {social_links?.map((link: any) =>
            link.link && link.icon ? (
              <Link href={link.link!} key={link._uid} className={styles.socialLink}>
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
      </div>
    </footer>
  );
};

export default Footer;
