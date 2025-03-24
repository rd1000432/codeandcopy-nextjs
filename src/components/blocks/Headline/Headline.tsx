import { storyblokEditable } from "@storyblok/react";
import cn from "classnames";
import type { FC } from "react";

import type { HeadlineStoryblok } from "@/storyblok/component-types-sb";

import styles from "./headline-section.module.scss";
export type Props = HeadlineStoryblok & {
  extraPadding?: boolean;
};

const Headline: FC<Props> = ({blok})  => {    
  const { headline, extraPadding } = blok;
  return (
    <section
      className={cn({
        [styles.extraPadding]: extraPadding,
      })}
      {...storyblokEditable(blok)}
    >
      <h2 className={styles.headline}>{headline}</h2>
    </section>
  );
};

export default Headline;
