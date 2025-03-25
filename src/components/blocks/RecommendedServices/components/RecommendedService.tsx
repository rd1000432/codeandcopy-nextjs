import Link from 'next/link';
import styles from './recommended-service.module.scss';

interface StoryContent {
  main_image?: { filename: string };
  lead_text?: string;
  field?: string;
}

interface Story {
  content: StoryContent;
  full_slug?: string;
}

interface RecommendedServiceProps {
  story: Story;
}

export const RecommendedService = ({ story }: RecommendedServiceProps) => {
  const fullSlug = story.full_slug || "default-slug";

  return (
    <div>
      <img src={story.content.main_image?.filename} />
      <div>
        <div><h3>{story.content.lead_text}</h3></div>
      </div>
      <p>{story.content.field}</p>
      <Link className={styles.serviceLink} href={`/${fullSlug}`}>Learn more</Link>
    </div>
  );
};
