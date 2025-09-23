import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import Contact from "./components/blocks/Contact/Contact";
import { Service } from "./components/blocks/Service";
import { Page } from "./components/blocks/Page";
import Hero from "./components/blocks/Hero";
import Grid from "./components/blocks/Grid";
import Feature from "./components/blocks/Feature";
import { Testimonial } from "./components/blocks/Testimonial";
import  RecommendedServices from "./components/blocks/RecommendedServices";
import TextIcon from "./components/blocks/TextIcon";
import Header  from "./components/global/Header";
import { Button } from "./components/blocks/Button";
import  TextBanner from "./components/blocks/TextBanner/TextBanner";
import Headline from "./components/blocks/Headline/Headline";
import CallToAction from "./components/blocks/CallToAction";
import { LegalPage } from "./components/blocks/Legal/Legal";

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
    text_icon: TextIcon,
    header: Header,
    button_link: Button,
    text_banner: TextBanner,
    headline: Headline,
    call_to_action: CallToAction,
    contact: Contact,
    legal_page: LegalPage,
  },
  enableFallbackComponent: true,
});




