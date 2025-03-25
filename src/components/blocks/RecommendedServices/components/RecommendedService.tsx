import Link from 'next/link';
import styles from './recommended-service.module.scss';
import { IconArrow } from "@/icons";


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
    <div className={styles.wrapper}>
      <Link className={styles.imageLink} href={`/${fullSlug}`}>
        <img className={styles.image} src={story.content.main_image?.filename} />
      </Link>
      <div>
        <h3 className={styles.serviceTitle}>{story.content.lead_text}</h3>
      </div>
      {/* <p>{story.content.field}</p> */}
      <Link className={styles.serviceLink} href={`/${fullSlug}`}>Learn more
      <IconArrow
        className={styles.icon}
      />
      </Link>
    </div>
  );
};
