import { storyblokEditable } from "@storyblok/react";
import type { FC } from "react";

import { LinkWrapper } from "@/components/common";
import TextIconArrow from "../../icons/TextIconArrow.inline.svg";
import TextIconStar from "../../icons/TextIconStar.inline.svg";

import type { TextIconSectionStoryblok } from "@/storyblok/component-types-sb";
import type { RichtextSectionStoryblok, MultilinkStoryblok } from "../../../src/storyblok/component-types-sb";
import Richtext from "../RichtextSection/components/Richtext";
import styles from "./texticon-section.module.scss";

type LinkIcon = {
  _uid: string;
  icons_link: MultilinkStoryblok;
  icon_left?: "arrow" | "star" | null;
  icon_right?: "arrow" | "star" | null;
};

export type Props = TextIconSectionStoryblok & {
  link_icons?: LinkIcon[];
  description?: any;
};

const TextIconSection: FC<Props> = (blok) => {
  const { link_icons, description, icons_link } = blok;

  // console.log("link_icons:", link_icons);

  const renderIcon = (iconType: string | null) => {
    switch (iconType) {
      case "arrow":
        return <TextIconArrow className={styles.icon} />;
      case "star":
        return <TextIconStar className={styles.icon} />;
      default:
        return null;
    }
  };

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
          {Array.isArray(link_icons) &&
            link_icons.map((icon, index) => (
              <LinkWrapper
                link={icons_link}
                key={icon._uid || index}
                className={styles.iconLink}
              >
                {renderIcon(icon.icon_left ?? null)}
                {renderIcon(icon.icon_right ?? null)}
              </LinkWrapper>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TextIconSection;
