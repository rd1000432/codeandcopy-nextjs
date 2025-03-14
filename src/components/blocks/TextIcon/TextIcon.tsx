import { storyblokEditable } from "@storyblok/react/rsc";
import type { FC } from "react";
import Link from 'next/link';

//TODO: Add LinkWrapper AND TextIconArrow AND TextIconStar HARD CODED
// import { LinkWrapper } from "@/components/common";
// import TextIconArrow from "../../icons/TextIconArrow.inline.svg";
// import TextIconStar from "../../icons/TextIconStar.inline.svg";

import type { TextIconStoryblok } from "@/storyblok/component-types-sb";
import type { RichtextSectionStoryblok, MultilinkStoryblok } from "../../../storyblok/component-types-sb";
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

const TextIcon: FC<Props> = ({blok}) => {
  const { link_icons, description, icon_link } = blok;

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
        <Link className={styles.iconLink} href={`/${icon_link.cached_url}`}>
          {link_icons && <img className={styles.icon} src={link_icons.filename} />}
        </Link>
        </div>
      </div>
    </section>
  );
};

export default TextIcon;
