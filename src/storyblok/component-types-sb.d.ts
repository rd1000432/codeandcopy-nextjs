import {StoryblokStory} from 'storyblok-generate-ts'

export interface FeatureStoryblok {
  headline: string;
  content: string;
  _uid: string;
  component: "feature";
  [k: string]: any;
}

export interface GridStoryblok {
  headline?: string;
  items: (FeatureStoryblok | TestimonialStoryblok)[];
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface HeroStoryblok {
  headline: string;
  content: string;
  _uid: string;
  component: "hero";
  [k: string]: any;
}

export interface PageStoryblok {
  blocks?: (FeatureStoryblok | GridStoryblok | HeroStoryblok | RecommendedServicesStoryblok | TestimonialStoryblok)[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface RecommendedServicesStoryblok {
  headline: string;
  services: (StoryblokStory<ServicesStoryblok> | string)[];
  _uid: string;
  component: "recommended_services";
  [k: string]: any;
}

export interface AssetStoryblok {
  _uid?: string;
  id: number | null;
  alt: string | null;
  name: string;
  focus: string | null;
  source: string | null;
  title: string | null;
  filename: string;
  copyright: string | null;
  fieldtype?: string;
  meta_data?: null | {
    [k: string]: any;
  };
  is_external_url?: boolean;
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface ServicesStoryblok {
  lead_text: string;
  main_image?: AssetStoryblok;
  field?: "" | "Web Development" | "Digital Marketing" | "Content Creation";
  body: RichtextStoryblok;
  _uid: string;
  component: "services";
  [k: string]: any;
}

export interface TestimonialStoryblok {
  name: string;
  comment: string;
  _uid: string;
  component: "testimonial";
  [k: string]: any;
}
