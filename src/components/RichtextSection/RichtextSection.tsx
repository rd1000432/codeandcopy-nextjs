import { storyblokEditable } from "@storyblok/react";
import type { FC } from "react";

import type { RichtextSectionStoryblok } from "@/storyblok/component-types-sb";

import Richtext from "./components/Richtext";
import styles from "./richtext-section.module.scss";

export type Props = RichtextSectionStoryblok;

const RichtextSection: FC<Props> = blok => {
  return (
    <section
      {...storyblokEditable(blok)}
      className={styles.wrapper}
    >
      <Richtext text={blok} />
    </section>
  );
};

export default RichtextSection;
