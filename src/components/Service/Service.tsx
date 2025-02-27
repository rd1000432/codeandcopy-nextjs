import { renderRichText } from "@storyblok/react/rsc";
import Richtext from "../RichtextSection/components/Richtext/Richtext";
import styles from "./service.module.scss";

export const Service = (props: any) => {
    return (
        <main className="container mx-auto px-4 w-full py-16">
        <h1 className="text-3xl md:text-5xl font-bold">{props.blok.lead_text}</h1>
        <img className="mt-12" src={props.blok.main_image.filename}/>
        <p className="mt-12 text-lg md:text-2xl md:leading-relaxed">{props.blok.field}</p>
        {/* <div
            className="prose mt-12 md:prose-lg max-w-none"
            dangerouslySetInnerHTML={{
                __html: renderRichText(props.blok.body ?? ""),
            }}
        ></div> */}
      <Richtext className={styles.description} text={props.blok.body} />

        {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
        </main>
    );
} 