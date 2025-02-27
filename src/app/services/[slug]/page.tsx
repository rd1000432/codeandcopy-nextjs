import { getStoryblokApi } from "@/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

// Fetches all the static params for the service page
export const generateStaticParams = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "service",
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });

  return response.data.stories.map((story) => ({
    slug: story.slug,
  }));
};

// Fetch the specific service page data
const fetchServicePage = async (slug: string) => {
  const client = getStoryblokApi();
  const response = await client.getStory(`services/${slug}`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.story;
};

interface PageProps {
  params: Promise<{ slug: string }>; // Ensure params is awaited
}

const ServicePage = async ({ params }: PageProps) => {
  console.log("ServicePage", params);
  // Await params to ensure it's resolved before accessing slug
  const resolvedParams = await params;

  if (!resolvedParams?.slug) {
    return <div>Error: Missing slug</div>;
  }


  const story = await fetchServicePage(resolvedParams.slug);
  return <StoryblokStory story={story} />;
};

export default ServicePage;
