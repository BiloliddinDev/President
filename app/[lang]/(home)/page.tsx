import {Showcase} from "@/app/[lang]/(home)/components/showcase";
import {News} from "@/app/[lang]/(home)/components/news";
import {About} from "./components/about";
import {Category} from "@/app/[lang]/(home)/components/category";
import {Collections} from "@/app/[lang]/(home)/components/Collections";

export default function Home() {
    return (
        <>
            <section>
                <Showcase/>
            </section>
            <section className="mt-[100px]">
                <News/>
            </section>
            <section className="mt-[100px]">
                <About title={"About"}/>
            </section>
            <section className={"mt-[100px]"}>
                <Category/>
            </section>
            <section className={"mt-[100px]"}>
                <Collections/>
            </section>
        </>

    );
}
