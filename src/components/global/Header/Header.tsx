import { storyblokEditable } from "@storyblok/react/rsc";
import type { FC } from "react";
import type { HeaderStoryblok } from "@/storyblok/component-types-sb";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.scss";

type Props = {
  blok: HeaderStoryblok;
};

const Header: FC<Props> = ({ blok }) => {
  const {
    logo,
    homepage_link,
    logo_small,
    menu_items = [],
  } = blok;

  return (
    <header {...storyblokEditable(blok)} className={styles.wrapper}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href={homepage_link?.cached_url || "/"}>
          {logo && (
            <Image
              src={logo.filename}
              alt={logo.alt || "Logo"}
              width={150} // Adjust as needed
              height={50} // Adjust as needed
              priority
            />
          )}
        </Link>
        {logo_small && (
          <Image
            src={logo_small.filename}
            alt={logo_small.alt || "Small Logo"}
            width={50} // Adjust as needed
            height={50} // Adjust as needed
          />
        )}
      </div>

      {/* Navigation Menu */}
      <nav className={styles.nav}>
        <ul>  
          {/* Render menu_items (if they exist) */}
          {menu_items.map((menuItem) => (
            <li key={menuItem._uid} className={styles.navItem}>
              <Link href={menuItem.link?.cached_url || "#"}>
                {menuItem.title}
              </Link>
              {/* Render sub-items (if they exist) */}
              {menuItem.sub_items && menuItem.sub_items.length > 0 && (
                <ul className={styles.subMenu}>
                  {menuItem.sub_items.map((subItem) => (
                    <li key={subItem._uid} className={styles.subMenuItem}>
                      <Link href={subItem.link?.cached_url || "#"}>
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;