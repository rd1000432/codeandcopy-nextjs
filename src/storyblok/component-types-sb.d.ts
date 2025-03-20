import {StoryblokStory} from 'storyblok-generate-ts'

export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      target?: "_self" | "_blank";
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      target?: "_self" | "_blank";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      target?: "_self" | "_blank";
      [k: string]: any;
    };

export interface ButtonLinkStoryblok {
  title: string;
  link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  style?: "" | "default" | "light" | "highlight";
  color?: "" | "default" | "light" | "highlight";
  _uid: string;
  component: "button_link";
  [k: string]: any;
}

export interface FeatureStoryblok {
  headline: string;
  content: string;
  _uid: string;
  component: "feature";
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

export interface FooterStoryblok {
  footer_logo?: AssetStoryblok;
  main_column?: FooterItemStoryblok[];
  social_links?: SocialLinkStoryblok[];
  legal_links?: LegalLinkStoryblok[];
  copyright: string;
  _uid: string;
  component: "footer";
  [k: string]: any;
}

export interface FooterItemStoryblok {
  headline_line_one?: string;
  headline_line_two?: string;
  call_to_action?: ButtonLinkStoryblok[];
  _uid: string;
  component: "footer_item";
  [k: string]: any;
}

export interface FooterItemLinkStoryblok {
  title?: string;
  link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "footer_item_link";
  [k: string]: any;
}

export interface GlobalStoryblok {
  global?: (
    | ButtonLinkStoryblok
    | FeatureStoryblok
    | FooterStoryblok
    | FooterItemStoryblok
    | FooterItemLinkStoryblok
    | GlobalStoryblok
    | GridStoryblok
    | HeaderStoryblok
    | HeaderMenuItemStoryblok
    | HeroStoryblok
    | LegalLinkStoryblok
    | PageStoryblok
    | RecommendedServicesStoryblok
    | RichtextSectionStoryblok
    | ServicesStoryblok
    | SocialLinkStoryblok
    | TestimonialStoryblok
    | TextIconStoryblok
  )[];
  _uid: string;
  component: "global";
  uuid?: string;
  [k: string]: any;
}

export interface GridStoryblok {
  headline?: string;
  items: (FeatureStoryblok | TestimonialStoryblok)[];
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface HeaderStoryblok {
  logo?: AssetStoryblok;
  logo_small?: AssetStoryblok;
  homepage_link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  menu_items?: HeaderMenuItemStoryblok[];
  _uid: string;
  component: "Header";
  [k: string]: any;
}

export interface HeaderMenuItemStoryblok {
  title?: string;
  link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "header_menu_item";
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

export interface HeroStoryblok {
  background_option: "" | "image" | "video";
  background_image?: AssetStoryblok;
  background_webm?: AssetStoryblok;
  background_mp4?: AssetStoryblok;
  fallback_image?: AssetStoryblok;
  headline?: RichtextStoryblok;
  call_to_action?: ButtonLinkStoryblok[];
  _uid: string;
  component: "hero";
  [k: string]: any;
}

export interface LegalLinkStoryblok {
  link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  title?: string;
  _uid: string;
  component: "legal_link";
  [k: string]: any;
}

export interface PageStoryblok {
  blocks?: (
    | FeatureStoryblok
    | GridStoryblok
    | HeaderMenuItemStoryblok
    | HeroStoryblok
    | RecommendedServicesStoryblok
    | RichtextSectionStoryblok
    | TestimonialStoryblok
    | TextIconStoryblok
  )[];
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

export interface RichtextSectionStoryblok {
  anchor_id?: string;
  text?: string;
  _uid: string;
  component: "richtext_section";
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

export interface SocialLinkStoryblok {
  link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  title?: string;
  icon?: AssetStoryblok;
  _uid: string;
  component: "social_link";
  [k: string]: any;
}

export interface TestimonialStoryblok {
  name: string;
  comment: string;
  _uid: string;
  component: "testimonial";
  [k: string]: any;
}

export interface TextIconStoryblok {
  link_icons?: AssetStoryblok;
  description: RichtextStoryblok;
  icon_link: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "text_icon";
  [k: string]: any;
}
