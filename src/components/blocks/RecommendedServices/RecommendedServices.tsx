import { FC } from "react";
import { RecommendedService } from "./components/RecommendedService";
import styles from "./recommended-services.module.scss";

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
      services: Story[];
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
