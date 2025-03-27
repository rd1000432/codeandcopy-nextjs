import Richtext from "../RichtextSection/components/Richtext/Richtext";
import styles from "./service.module.scss";

export const Service = (props: any) => {
    const { lead_text, main_image, field, body } = props.blok;
    
    return (
        <>
        <section className={styles.hero}>
            p.
        </section>
        <section className={styles.serviceContainer}>
           {lead_text && <h1 className={styles.test}>{lead_text}</h1>}
            {main_image && <img className={styles.mainImage} src={main_image.filename} alt="Main Image" />}
            {field && <p className={styles.fieldText}>{field}</p>}
            {body && <Richtext className={styles.description} text={body} />}
        </section>
        </>
    );
};
