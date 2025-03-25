import Image from "next/image";
import cn from "classnames";
import type { FC } from "react";

import { Button } from "@/components/common";
import type { CallToActionStoryblok } from "@/storyblok/component-types-sb";

import styles from "./call-to-action.module.scss";

const CallToAction: FC<CallToActionStoryblok> =  ({ blok }) => {
  const { image, headline, button: [button] = [], orientation } = blok;

  if (!image?.filename) {
    return null;
  }

  return (
    <section
      className={styles.wrapper}
    >
      {/* <LXImage
        src={image?.filename}
        alt={""}
        className={styles.image}
        smart
        focus={image.focus}
        role="presentation"
        width={1920}
        sizes="100vw"
      /> */}
        <Image
        className={styles.backgroundImage}
        src={image?.filename}
        alt={""}
        role="presentation"
        width={1920}
        height={1080}
        sizes="100vw"
        />
      <div
        className={cn(styles.content, {
          [styles.right]: orientation === "right",
        })}
      >
        {headline && <p className={styles.headline}>{headline}</p>}
        {button && <Button link={button.link} title={button.title} />}
      </div>
    </section>
  );
};

export default CallToAction;
