import { getStoryblokApi } from "@/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

// Fetches all the static params for the legal page
export const generateStaticParams = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "legal",
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });

  return response.data.stories.map((story) => ({
    slug: story.slug,
  }));
};

// Fetch the specific legal page data
const fetchLegalPage = async (slug: string) => {
  const client = getStoryblokApi();
  const response = await client.getStory(`legal/${slug}`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.story;
};

interface PageProps {
  params: Promise<{ slug: string }>; // Ensure params is awaited
}

const LegalPage = async ({ params }: PageProps) => {
  // Await params to ensure it's resolved before accessing slug
  const resolvedParams = await params;

  if (!resolvedParams?.slug) {
    return <div>Error: Missing slug</div>;
  }


  const story = await fetchLegalPage(resolvedParams.slug);
  return <StoryblokStory story={story} />;
};

export default LegalPage;
