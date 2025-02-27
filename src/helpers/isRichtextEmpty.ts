import type { RichtextStoryblok } from "@/storyblok/component-types-sb";

export const isRichtextEmpty = (richtext?: RichtextStoryblok) => {
  const isEmpty =
    richtext?.content &&
    richtext.content[0].content &&
    richtext.content[0].content[0] &&
    richtext.content[0].content[0].text &&
    richtext.content[0].content[0].text?.length <= 1;
  // Check if the first element is a blok. This is a failsafe for richtext section with just a single blok like a button
  const hasBlok = richtext?.content && richtext.content[0].type === "blok";
  if (hasBlok || (richtext?.content?.[0].type && richtext?.content?.[1]?.content)) {
    return false;
  }

  return isEmpty === undefined ? true : isEmpty;
};