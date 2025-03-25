import { FC } from "react";
import { RecommendedService } from "./components/RecommendedService";
import styles from "./recommended-services.module.scss";

// Define the required types for the Story content and Story
interface StoryContent {
    main_image: { filename: string };
    lead_text: string;
    field: string;
  }
  
  interface Story {
    content: StoryContent;
    full_slug: string;
  }
  
  interface Props {
    blok: {
      services: Story[]; // Use the Story type for services
    };
  }

const RecommendedServices: FC<Props> = ({ blok }) => {
  return (
    <section className={styles.container}>
      <div className={styles.gridContainer}>
        {blok.services.map((service) => (
          <RecommendedService key={service.content.main_image.filename} story={service} />
        ))}
      </div>
    </section>
  );
};

export default RecommendedServices;
