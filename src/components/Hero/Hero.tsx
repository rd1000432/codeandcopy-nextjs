import { storyblokEditable } from "@storyblok/react/rsc";
import { type FC } from "react";
import { HeroStoryblok } from "../../storyblok/component-types-sb";
import styles from "./hero.module.scss"; 

export type Props = {blok: HeroStoryblok;}


const Hero: FC<Props> = ({ blok }) => {
  const {
    headline,
    content
  } = blok;

  return (
    <section
      {...storyblokEditable(blok)}
      className="container mx-auto px-4 w-full pt-32 pb-16"
    >
      <h1 className={styles.headline}>
        {headline}
      </h1>
      <p className="text-center text-xl mt-8">{content}</p>
    </section>
  );
};

export default Hero;
