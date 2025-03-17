/* eslint-disable sonarjs/no-duplicate-string */
import cn from "classnames";
import type { FC } from "react";

import { Button } from "@/components/common";
import type { FooterItemStoryblok, MultilinkStoryblok } from "@/storyblok/component-types-sb";

import styles from "./footer-item.module.scss";

interface FooterItemProps {
  blok: FooterItemStoryblok;
  className?: string;
}

const FooterItem: FC<FooterItemProps> = props => {
  const { blok, className = null } = props;
  const { headline_line_one, headline_line_two, call_to_action } = blok as { headline_line_one?: string; headline_line_two?: string; call_to_action?: { link: string; title: string }[] };

  return (
    <section className={styles.wrapper}>
      <div className={cn(styles.item, className)}>
        {(headline_line_one || headline_line_two) && (
          // Avoids inserting <br> when not necessary
          <h3 className={styles.headline}>
            {headline_line_one && <span>{headline_line_one}</span>}
            {headline_line_one && headline_line_two && <br />}
            {headline_line_two && <span>{headline_line_two}</span>}
          </h3>
        )}

        {call_to_action?.map((action, index) => (
          <Button
            key={index}
            link={{ cached_url: action.link } as MultilinkStoryblok}
            title={action.title}
            className={styles.footerButton}
            type={"icon"}
          />
        ))}
      </div>
    </section>
  );
};

export default FooterItem;
