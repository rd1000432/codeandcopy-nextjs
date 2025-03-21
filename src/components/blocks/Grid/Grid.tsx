import React, { FC } from 'react';
import {
  StoryblokServerComponent,
  storyblokEditable
} from "@storyblok/react/rsc";
import type { ButtonLinkStoryblok } from "@/storyblok/component-types-sb";

import styles from './grid.module.scss';
import { Button } from "../Button/Button";


interface BlokItem {
  _uid: string;
  button?: string;
  link_title?: string; 
}

interface GridBlok {
  headline: string;
  items: BlokItem[];
  [key: string]: any; // Add this index signature to allow other properties (for compatibility with SbBlokData)
}

interface GridProps {
  blok: GridBlok;
}
const Grid: FC<GridProps> = ({ blok }: GridProps) => { 
  return (
    <section {...storyblokEditable(blok)} className={styles.gridSection}>
      <div className={styles.container}>
        <h2 className={styles.headline}>{blok.headline}</h2>
        <div className={styles.gridContainer}>
          {blok.items.map((blokItem) => (
            <div key={blokItem._uid} className={styles.gridItem}>
              <StoryblokServerComponent blok={blokItem} />
              {/* Button for each blokItem */}
              {blokItem.button && blokItem.link_title && (
                <Button
                  label={blokItem.button}
                  link={{ cached_url: blokItem.link_title, title: blokItem.link_title, _uid: '', component: 'button_link' } as ButtonLinkStoryblok}
                  className={styles.buttonGrid}
                  style="borderless"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Grid;

