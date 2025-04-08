import { RecommendedService } from "@/components/blocks/RecommendedServices/components/RecommendedService";
import { getStoryblokApi } from "@/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import styles from "./services.module.scss"

const fetchServicesPage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory(`services`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.story;
}

const fetchAllServices = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: 'services',
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.stories;
}

const ServicesPage = async () => {
  const story = await fetchServicesPage();
  const services = await fetchAllServices();

  return (
    <div>
        <StoryblokStory story={story} />
        <div className={styles.servicesContainer}>
        {services?.map((service: any) => (
          <RecommendedService story={service} key={service.uuid} />
        ))}
        </div>
    </div>
  );
};

export default ServicesPage;
