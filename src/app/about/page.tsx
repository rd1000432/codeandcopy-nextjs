import { getStoryblokApi } from "@/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

const fetchAboutPage = async () => {
  const { isEnabled } = await draftMode();
  const client = getStoryblokApi();
  const response = await client.getStory(`about`, {
    version: process.env.NODE_ENV === "development" || isEnabled
      ? "draft"
      : "published",
  });
  return response.data.story;
}

const AboutPage = async () => {
  const story = await fetchAboutPage();
  return <StoryblokStory
    story={story} />;
};

export default AboutPage;
