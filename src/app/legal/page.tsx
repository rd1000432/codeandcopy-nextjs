import { LegalPage as LegalBlock } from "@/components/blocks/Legal";
import { getStoryblokApi } from "@/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import styles from "./legal.module.scss"

const fetchLegalPage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory(`legal`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.story;
}

const fetchAllLegalPages = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: 'legal',
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.stories;
}

const LegalPage = async () => {
  const story = await fetchLegalPage();
  const services = await fetchAllLegalPages();

  return (
    <div>
        <StoryblokStory story={story} />
        <div className={styles.servicesContainer}>
        {services?.map((legal: any) => (
          <LegalBlock story={legal} key={legal.uuid} />
        ))}
        </div>
    </div>
  );    
};

export default LegalPage;
