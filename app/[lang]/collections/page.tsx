import React from "react";
import { Collections } from "./components/collections";

export interface HomePageProps {
    params: Promise<{ lang: "uz" | "ru" | "en" }>;
}

// export default async function Home({ params }: HomePageProps) {
    export default async function Home() {

    // const HomePageParam: { lang: "uz" | "ru" | "en" } = await params;
    // const dictionary = await getDictionary(HomePageParam.lang);
    return (
        <section className="mt-36">
            <Collections  />
        </section>
    );
}
