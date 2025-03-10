"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import type { FC } from "react";
import { useEffect, useState } from "react";


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
  const [clientDescription, setClientDescription] = useState<any>(null);

  useEffect(() => {
    setClientDescription(blok.description);
  }, [blok.description]);

  return (
    <section {...storyblokEditable(blok)} className={styles.wrapper}>
      <div className={styles.texticonWrapper}>
        {clientDescription ? (
          <pre>{JSON.stringify(clientDescription, null, 2)}</pre>
        ) : (
          <p>⚠️ No description available</p>
        )}
      </div>
    </section>
  );
};

export default TextIcon;
