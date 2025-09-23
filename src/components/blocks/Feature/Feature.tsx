import { storyblokEditable } from "@storyblok/react/rsc";
import type { RichtextSectionStoryblok } from "../../../storyblok/component-types-sb";
import Richtext from "../RichtextSection/components/Richtext";
import styles from "./feature.module.scss";

interface FeatureBlok {
  _uid: string;
  headline: string;
  content?: any;
  [key: string]: any;
}

interface FeatureProps {
  blok: FeatureBlok;
}

const Feature = ({ blok }: FeatureProps) => {
  const { headline, content } = blok;


  return (
    <div {...storyblokEditable(blok)}  className={styles.feature}>
      {headline && <h3 className={styles.headline}>{headline}</h3>}
      {content && (
          <Richtext
            className={styles.contentText}
            text={
              {
                _uid: blok._uid,
                content: content,
                component: "richtext_section",
              } as RichtextSectionStoryblok
            }
          />
        )}
      
    </div>
  );
};

export default Feature;
