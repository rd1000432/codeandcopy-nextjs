import { storyblokEditable } from "@storyblok/react/rsc";
import type { FC } from "react";

// import { LinkWrapper } from "@/components/common";
// import TextIconArrow from "../../icons/TextIconArrow.inline.svg";
// import TextIconStar from "../../icons/TextIconStar.inline.svg";

import type { TextIconStoryblok } from "@/storyblok/component-types-sb";
import styles from "./texticon.module.scss";

type LinkIcon = {
  _uid: string;

};

export type Props = TextIconStoryblok & {
  link_icons?: LinkIcon[];
  description?: any;
};

const TextIcon: FC<Props> = (blok) => {
  const { description } = blok;

  console.log("blok:", blok);
  console.log("description:", description);

  return (
    <section {...storyblokEditable(blok)} className={styles.wrapper}>
      <div className={styles.texticonWrapper}>
          <p
            className={styles.flexCol}
          >test</p>
        <div className={styles.flexCol}>
          <p>test</p>
        </div>
      </div>
    </section>
  );
};

export default TextIcon;
