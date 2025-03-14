import Link from 'next/link';

interface StoryContent {
  main_image: { filename: string };
  lead_text: string;
  field: string;
}

interface Story {
  content: StoryContent;
  full_slug: string;
}

interface RecommendedServiceProps {
  story: Story;
}

export const RecommendedService = ({ story }: RecommendedServiceProps) => {
  return (
    <div>
      <img src={story.content.main_image.filename} />
      <div>
        <div><h3>{story.content.lead_text}</h3></div>
      </div>
      <p>{story.content.field}</p>
      <Link href={`/${story.full_slug}`}>Learn more</Link>
    </div>
  );
};
