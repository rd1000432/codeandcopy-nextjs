export type MarqueeConfig = {
    beforeStar: boolean;
    afterStar: boolean;
  };
  
  export const getMarqueeConfig = (): MarqueeConfig[] => {
    return [
      { beforeStar: true, afterStar: true },
      { beforeStar: false, afterStar: true },
      { beforeStar: false, afterStar: true },
      { beforeStar: false, afterStar: true },
      { beforeStar: false, afterStar: true },
      { beforeStar: false, afterStar: true },
      { beforeStar: false, afterStar: true },
      { beforeStar: false, afterStar: true },
      { beforeStar: false, afterStar: true },
      { beforeStar: false, afterStar: true },
      { beforeStar: false, afterStar: true },
      { beforeStar: false, afterStar: false },
    ];
  };
  