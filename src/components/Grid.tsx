import {
  StoryblokServerComponent,
  storyblokEditable,
} from "@storyblok/react/rsc";

interface BlokItem {
  _uid: string;
  // other properties (e.g., 'component', 'content', etc.)
}

interface GridBlok {
  headline: string;
  items: BlokItem[];
  [key: string]: any; // Add this index signature to allow other properties (for compatibility with SbBlokData)
}

interface GridProps {
  blok: GridBlok;
}

export const Grid = ({ blok }: GridProps) => {
  return (
    <section {...storyblokEditable(blok)} className="bg-blue-100 py-16">
      <div className="container mx-auto w-full px-4">
        <h2 className="text-3xl md:text-4xl font-bold">{blok.headline}</h2>
        <div className="grid md:grid-flow-col auto-cols-fr mt-12 gap-8">
          {blok.items.map((blokItem) => (
            <StoryblokServerComponent blok={blokItem} key={blokItem._uid} />
          ))}
        </div>
      </div>
    </section>
  );
};
