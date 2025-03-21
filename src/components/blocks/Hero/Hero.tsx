"use client";
import { storyblokEditable } from "@storyblok/react";
import { type FC, useState } from "react";

import type { HeroStoryblok, ButtonLinkStoryblok } from "@/storyblok/component-types-sb";
import styles from "./hero.module.scss";
export type Props = HeroStoryblok;
import Image from "next/image";

import { Button } from "../Button/Button";

import Richtext from "../RichtextSection/components/Richtext";
import cn from "classnames";

const Hero: FC<Props> = ({blok}) => {  
  const {
    background_option,
    background_webm,
    background_mp4,
    background_image,
    fallback_image,
    headline,
    call_to_action
  } = blok;
  
  const [isVideoError, setIsVideoError] = useState(false);

  const isVideo = background_option === "video" && !isVideoError;
  const isImage = background_option === "image" && background_image?.filename;

  const hasWebM = background_webm?.filename?.endsWith(".webm");
  const hasMP4 = background_mp4?.filename?.endsWith(".mp4");

  const handleVideoError = () => {
    if (!isVideoError) {
      setIsVideoError(true);
    }
  };

  // Helper for rendering video
  const renderVideoSources = () => (
    <>
      {hasWebM && <source src={background_webm?.filename} type="video/webm" />}
      {hasMP4 && <source src={background_mp4?.filename} type="video/mp4" />}
    </>
  );

  const noBackground = !isVideo && !isImage;

  const heroClass = cn(styles.hero, {
    [styles.heroNoVideo]: noBackground
  });

  return (
    <section className={styles.wrapper}>
      <section className={heroClass} {...storyblokEditable(blok)}>
        { isVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            className={styles.videoBackground}
            role="presentation"
            onError={handleVideoError}
          >
            {renderVideoSources()}
          </video>
        ) : isImage ? (
          <Image
            className={styles.backgroundImage}
            src={background_image?.filename}
            alt={background_image?.alt || "Background image"}
            role="presentation"
            width={1920}
            height={1080}
            sizes="100vw"
          />
        ) : fallback_image?.filename ? (
          // If no video or image, show the fallback image (if provided)
          <Image
            className={styles.onErrorBackgroundImage}
            src={fallback_image?.filename}
            alt={fallback_image?.alt || "Fallback image"}
            fill
            width={1920}
            sizes="100vw"
          />
        ) : (
          // If no background available, show a default background or nothing
          <div className={styles.defaultBackground}>{/* Show default background if needed */}</div>
        )}

        {headline && <Richtext className={styles.headline} text={headline} />}


        {call_to_action?.map((action: ButtonLinkStoryblok, index: number) => (
          <Button
            key={index}
            link={{ cached_url: action.link, title: action.title, _uid: '', component: 'button_link' } as ButtonLinkStoryblok}
            className={styles.button}
          />
        ))}
      </section>
    </section>
  ); 
};

export default Hero;
