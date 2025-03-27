import { storyblokEditable } from "@storyblok/react";
import type { FC } from "react";
import Image from "next/image";

import { Button } from "@/components/common";
import type { ContactStoryblok } from "@/storyblok/component-types-sb";

import styles from "./contact.module.scss";

export type Props = ContactStoryblok;


const Contact: FC<Props> = ({ blok }) => {
  const { image, name, position, phone, button: [button] = [] } = blok;
  return (
    <section
      {...storyblokEditable(blok)}
      className={styles.wrapper}
    >
      {image?.filename && (
        <div className={styles.imageWrapper}>
          <Image
            src={image?.filename}
            alt={image.alt ?? ""}
            className={styles.image}
            fill
            width={0}
            sizes="50vw, 100vw"
          />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.text}>
          {name && <h2 className={styles.headline}>{name}</h2>}
          {position && <p className={styles.position}>{position}</p>}
          {phone && (
            <a href={`tel:${phone}`} className={styles.phoneLink}>
              t. <span className={styles.phone}>{phone}</span>
            </a>
          )}
        </div>
        {button && <Button className={styles.button} {...button} style="solid" type="icon" />}
      </div>
    </section>
  );
};

export default Contact;
