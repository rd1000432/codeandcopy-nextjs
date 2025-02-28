import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import { Service } from "./components/Service/Service";
import { Page } from "./components/Page";
import Hero from "./components/Hero";
import { Grid } from "./components/Grid";
import { Feature } from "./components/Feature";
import { Testimonial } from "./components/Testimonial";
import { RecommendedServices } from "./components/RecommendedServices";
import TextIconSection from "./components/TextIconSection";

const cachedFetch = (input: any, init?: any): Promise<Response> => {
  return fetch(input, {
    ...init,
    cache: process.env.NODE_ENV === "development" ? "no-cache" : "force-cache",
  });
}

export const getStoryblokApi = storyblokInit({
  // register components here
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    fetch: cachedFetch,
  },
  components: {
    services: Service,
    page: Page,
    hero: Hero,
    grid: Grid,
    feature: Feature,
    testimonial: Testimonial,
    recommended_services: RecommendedServices,
    text_icon_section: TextIconSection,
  },
  enableFallbackComponent: true,
});




