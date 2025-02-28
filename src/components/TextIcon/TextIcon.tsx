import { storyblokEditable } from "@storyblok/react/rsc";
import type { FC } from "react";

// import { LinkWrapper } from "@/components/common";
// import TextIconArrow from "../../icons/TextIconArrow.inline.svg";
// import TextIconStar from "../../icons/TextIconStar.inline.svg";

import type { TextIconStoryblok } from "@/storyblok/component-types-sb";
import type { RichtextSectionStoryblok, MultilinkStoryblok } from "../../storyblok/component-types-sb";
import Richtext from "../RichtextSection/components/Richtext";
import styles from "./texticon.module.scss";

type LinkIcon = {
  _uid: string;
  icons_link: MultilinkStoryblok;
};

export type Props = TextIconStoryblok & {
  link_icons?: LinkIcon[];
  description?: any;
};

const TextIcon: FC<Props> = (blok) => {
  const { link_icons, description } = blok;

  return (
    <section {...storyblokEditable(blok)} className={styles.wrapper}>
      <div className={styles.texticonWrapper}>
        {description && (
          <Richtext
            className={styles.flexCol}
            text={
              {
                _uid: blok._uid,
                content: description,
                font_size: "heading-02",
                component: "richtext_section",
              } as RichtextSectionStoryblok
            }
          />
        )}
        <div className={styles.flexCol}>
          {link_icons && <p>test</p>}
        </div>
      </div>
    </section>
  );
};

export default TextIcon;
