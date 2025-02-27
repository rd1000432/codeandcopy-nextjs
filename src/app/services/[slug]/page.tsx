import { getStoryblokApi } from "@/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

export const generateStaticParams = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "service",
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });

  return response.data.stories.map((story) => ({ slug: story.slug }));
};

const fetchServicePage = async (slug: string) => {
  const client = getStoryblokApi();
  const response = await client.getStory(`services/${slug}`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.story;
};

const ServicePage = async ({ params }: { params: { slug: string } }) => {
  const story = await fetchServicePage(params.slug);
  return <StoryblokStory story={story} />;
};


export default ServicePage;