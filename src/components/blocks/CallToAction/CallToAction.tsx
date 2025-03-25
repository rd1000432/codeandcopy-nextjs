import Image from "next/image";
import cn from "classnames";
import type { FC } from "react";

import { Button } from "@/components/common";
import type { CallToActionStoryblok, ButtonLinkStoryblok } from "@/storyblok/component-types-sb";

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
        <Image
        className={styles.image}
        src={image?.filename}
        alt={""}
        role="presentation"
        width={1920}
        height={1080}
        />
      <div
        className={cn(styles.content, {
          [styles.right]: orientation === "right",
        })}
      >
        {headline && <p className={styles.headline}>{headline}</p>}
        {button && 
        <Button 
         link={{ cached_url: button.link, title: button.title, _uid: '', component: 'button_link' } as ButtonLinkStoryblok}
         title={button.title}
         className={styles.CTAButton} />
         }
      </div>
    </section>
  );
};

export default CallToAction;
