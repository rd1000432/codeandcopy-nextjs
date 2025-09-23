import { getStoryblokApi } from "@/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

export const generateStaticParams = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "legal_page", // Make sure this matches your content type!
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });

  return response.data.stories.map((story) => ({
    slug: story.slug.replace("legal/", ""), // strip the "legal/" prefix for routing
  }));
};

const fetchLegalPage = async (slug: string) => {
  const client = getStoryblokApi();
  const response = await client.getStory(`legal/${slug}`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.story;
};

interface PageProps {
  params: { slug: string };
}

const LegalPage = async ({ params }: PageProps) => {
  if (!params?.slug) {
    return <div>Error: Missing slug</div>;
  }

  const story = await fetchLegalPage(params.slug);
  return <StoryblokStory story={story} />;
};

export default LegalPage;
