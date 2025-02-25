import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import { Service } from "./components/Service";
import { Page } from "./components/Page";
import Hero from "./components/Hero";
import { Grid } from "./components/Grid"

export const getStoryblokApi = storyblokInit({
  // register components here
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    services: Service,
    page: Page,
    hero: Hero,
    grid: Grid,
  },
  enableFallbackComponent: true,
});




