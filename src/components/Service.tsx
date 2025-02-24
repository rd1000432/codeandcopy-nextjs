export const Service = (props: any) => {
    return <>
    <h1>{props.blok.lead_text}</h1>
    <pre>{JSON.stringify(props, null, 2)}</pre>
    </>;
} 