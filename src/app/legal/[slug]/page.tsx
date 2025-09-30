import { getStoryblokApi } from "@/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

export const dynamicParams = true;

export const generateStaticParams = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "legal_page",
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });

  return response.data.stories.map((story) => ({
    slug: story.slug.replace(/^legal\//, ""),
  }));
};

const fetchLegalPage = async (slug: string) => {
  const client = getStoryblokApi();
  try {
    const response = await client.getStory(`legal/${slug}`, {
      version: process.env.NODE_ENV === "development" ? "draft" : "published",
    });
    return response.data.story;
  } catch {
    // Gracefully handle missing story
    return null;
  }
};

export default async function LegalPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;

  if (!slug) return <div>Missing slug</div>;

  const story = await fetchLegalPage(slug);

  if (!story) return <div>Page not found</div>;

  return <StoryblokStory story={story} />;
}
