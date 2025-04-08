import React, { FC } from 'react';
import {
  StoryblokServerComponent,
  storyblokEditable
} from "@storyblok/react/rsc";
import type { ButtonLinkStoryblok } from "@/storyblok/component-types-sb";

import styles from './grid.module.scss';
import { Button } from "../Button/Button";
import cn from "classnames";


interface BlokItem {
  _uid: string;
  button?: string;
  link_title?: string; 
}

interface GridBlok {
  headline: string;
  items: BlokItem[];
  [key: string]: any; 
}

interface GridProps {
  blok: GridBlok;
}
const Grid: FC<GridProps> = ({ blok }: GridProps) => { 

  return (
    <section {...storyblokEditable(blok)} className={styles.gridSection}>
      <div className={styles.container}>
        <div className={cn(styles.gridContainer, {
            [styles.twoColumns]: blok.items.length === 2,
            [styles.threeColumns]: blok.items.length === 3
        })}>
          {blok.items.map((blokItem) => (
            <div key={blokItem._uid} className={styles.gridItem}>
              <StoryblokServerComponent blok={blokItem} />
              {/* Button for each blokItem */}
              {blokItem.button && blokItem.link_title && (
                <Button
                  label={blokItem.button}
                  link={{
                    cached_url: blokItem.button,
                    title: blokItem.link_title, 
                    _uid: '',
                    component: 'button_link'
                  } as ButtonLinkStoryblok}
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

