import { RecommendedService } from "@/components/RecommendedService";
import { getStoryblokApi } from "@/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

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
        <div className="grid md:grid-cols-2 gap-8 container mx-auto px-4 w-full py-16">
        {services?.map((service: any) => (
          <RecommendedService story={service} key={service.content.uuid} />
        ))}
        </div>
    </div>
  );
};

export default ServicesPage;
