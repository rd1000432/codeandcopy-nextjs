export const getSlugWithoutAppName = (slug?: string | null) => {
    if (!slug) {
      return "";
    }
  
    return slug.replace(`${process.env.NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER}/`, "");
  };
  