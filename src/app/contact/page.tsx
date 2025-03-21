import { getStoryblokApi } from "@/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

const fetchContactPage = async () => {
  const { isEnabled } = await draftMode();
  const client = getStoryblokApi();
  const response = await client.getStory(`contact`, {
    version: process.env.NODE_ENV === "development" || isEnabled
      ? "draft"
      : "published",
  });
  return response.data.story;
}

const ContactPage = async () => {
  const story = await fetchContactPage();
  return <StoryblokStory
    story={story} />;
};

export default ContactPage;
