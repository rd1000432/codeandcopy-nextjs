import { storyblokEditable } from "@storyblok/react";
import cn from "classnames";
import type { FC } from "react";
import { render } from "storyblok-rich-text-react-renderer";
import { LinkWrapper } from "@/components/common";
import { isRichtextEmpty } from "../../../../helpers/isRichtextEmpty";
import type {
  ButtonLinkStoryblok,
  RichtextSectionStoryblok,
  RichtextStoryblok,
} from "@/storyblok/component-types-sb";

import { ButtonLink } from "../ButtonLink/ButtonLink";
import styles from "./richtext.module.scss";

export type Props = {
  text?: RichtextSectionStoryblok | RichtextStoryblok;
  anchor_id?: string;
  className?: string;
};

const Richtext: FC<Props> = blok => {
  const { text, anchor_id = "", className = null } = blok;
  if (!blok || !text) {
    return null;
  }
  const content =
    (text as RichtextSectionStoryblok).component === "richtext_section"
      ? text.content
      : text;

  if (isRichtextEmpty(content as RichtextStoryblok)) {
    return null;
  }

  const { font_size = "body", font_family = "figtree" } = text as RichtextSectionStoryblok;
  return (
    <>
      {blok && (
        <div
          id={anchor_id}
          className={cn(styles.richtext, className, styles[font_size], text.className, {
            [styles.spaceGrotesk]: font_family === "space_grotesk",
          })}
          {...storyblokEditable(blok)}
        >
          {render(content, {
            markResolvers: {
              link: (children, props) => {
                return (
                  <LinkWrapper
                  link={{
                    linktype: props.linktype as any,
                    cached_url: props.href,
                    url: props.href,
                    email: props.href,
                    target: props.target as any,
                    ...props,
                  }}
                  noDiv={true}
                  className={styles.link}
                >
                  {children}
                </LinkWrapper>
                );
              },
              highlight: children => <span className={styles.highlight}>{children}</span>,
              textStyle: children => <span>{children}</span>,
              underline: children => <u className={styles.underline}>{children}</u>,
              italic: children => <i className={styles.italic}>{children}</i>,
            },
            blokResolvers: {
              ["button_link"]: props => <ButtonLink {...(props as ButtonLinkStoryblok)} />,
            },
          })}
        </div>
      )}
    </>
  );
};

export default Richtext;
