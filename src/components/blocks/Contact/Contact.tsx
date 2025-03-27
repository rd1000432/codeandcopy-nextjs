import { storyblokEditable } from "@storyblok/react";
import type { FC } from "react";
import Image from "next/image";

import { Button } from "@/components/common";
import type { ContactStoryblok, ButtonLinkStoryblok } from "@/storyblok/component-types-sb";

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
            width={600}
            height={600}
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
        {button && 
        <Button 
         link={{ cached_url: button.link, title: button.title, _uid: '', component: 'button_link' } as ButtonLinkStoryblok}
         title={button.title}
         className={styles.button} />
         }
      </div>
    </section>
  );
};

export default Contact;
