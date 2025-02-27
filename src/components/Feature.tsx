  interface FeatureBlok {
    headline: string;
    content: string;
  }
  
  interface FeatureProps {
    blok: FeatureBlok;
  }
  
  export const Feature = ({ blok }: FeatureProps) => {
    return (
      <div>
        <h3>{blok.headline}</h3>
        <p>{blok.content}</p>
      </div>
    );
  };
  