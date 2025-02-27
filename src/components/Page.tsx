import {
  StoryblokServerComponent,
  storyblokEditable,
} from "@storyblok/react/rsc";

interface BlokItem {
  _uid: string;
  // other properties (e.g., 'component', 'content', etc.)
}

interface PageBlok {
  blocks: BlokItem[];
  [key: string]: any; 
}

interface PageProps {
  blok: PageBlok;
}

export const Page = ({ blok }: PageProps) => {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.blocks.map((blokItem) => (
        <StoryblokServerComponent blok={blokItem} key={blokItem._uid} />
      ))}
    </main>
  );
};
