import React from "react";
import { Collections } from "./components/collections";


interface HomePageProps {
    params: Promise<{ lang: "uz" | "ru" | "en"}>;
}

export default async function Home({params}: HomePageProps) {

    const HomePageParam: { lang: "uz" | "ru" | "en" } = await params;
    // const dictionary = await getDictionary(HomePageParam.lang);
    return (<section className="mt-36">

<Collections lang={HomePageParam.lang}/>

    </section>
    );
}
