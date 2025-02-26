import Link from 'next/link';


export const RecommendedService = (props: any) => {
    console.log(props.story);
    return (
        <div>
            <img src={props.story.content.main_image.filename} />
            <div>
                <div><h3>{props.story.content.lead_text}</h3></div>
            </div>
            <p>{props.story.content.field}</p>
            <Link href={`/${props.story.full_slug}`}>Learn more</Link>
        </div>
    );
}