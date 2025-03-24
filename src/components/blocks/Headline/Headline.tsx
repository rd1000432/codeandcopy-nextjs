import { storyblokEditable } from "@storyblok/react";
import type { FC } from "react";

import type { HeadlineStoryblok } from "@/storyblok/component-types-sb";

import styles from "./headline-section.module.scss";
export type Props = HeadlineStoryblok & {
  extraPadding?: boolean;
};

const Headline: FC<Props> = ({blok})  => {    
  const { headline } = blok;
  return (
    <section
    className={styles.wrapper}
      {...storyblokEditable(blok)}
    >
      <h2 className={styles.headline}>{headline}</h2>
    </section>
  );
};

export default Headline;
