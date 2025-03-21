import { storyblokEditable } from "@storyblok/react";
import type { FC } from "react";
import React from "react";
import Marquee from "react-fast-marquee";

import { getMarqueeConfig } from "@/helpers/getMarqueeConfig";
import { Star } from "@/icons";
import type {
  TextBannerStoryblok,
} from "@/storyblok/component-types-sb";

import styles from "./text-banner.module.scss";

export type Props = TextBannerStoryblok;

const TextBannerSection: FC<Props> = ({blok}) => {
  
  const { banner_text } = blok;

  if (!banner_text) {
    return null;
  }

  const marqueeConfig = getMarqueeConfig();

  return (
    <section
      className={styles.wrapper}
      {...storyblokEditable(blok)}
      aria-live="polite"
    >
      {banner_text && (
        <div>
          <Marquee speed={75}>
            {marqueeConfig.map((config, index) => (
              <p key={index} className={styles.marqueeItem}>
                {config.beforeStar && <Star className={styles.starIcon} />}
                {banner_text}
                {config.afterStar && <Star className={styles.starIcon} />}
              </p>
            ))}
          </Marquee>
        </div>
      )}
    </section>
  );
};

export default TextBannerSection;
