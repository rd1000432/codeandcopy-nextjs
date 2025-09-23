import Richtext from "../RichtextSection/components/Richtext/Richtext";
import styles from "./legal.module.scss";

export const LegalPage = (props: any) => {
    const { lead_text, body } = props.blok;    
    return (
        <>
        <section className={styles.hero}>
          {lead_text && <h2 className={styles.heroText}>{lead_text}</h2>}
        </section>
        <section className={styles.serviceContainer}>
            {lead_text && <h1 className={styles.leadText}>{lead_text}</h1>}
            {body && <Richtext className={styles.description} text={body} />}
        </section>
        </>
    );
};