import { RecommendedService } from "./RecommendedService";

export const RecommendedServices = (params: any) => {
    return (
        <section className="container mx-auto w-full px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold">{params.blok.headline}</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-16">
                {params.blok.services.map((service: any) => (
                    <RecommendedService key={service.content._uid} story={service} />
                ))}
            </div>
        </section>
    );
}