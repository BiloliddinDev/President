import "@/app/globals.css";
import ShowcaseAnimation from "@/components/animation-section/showcase-animation";
import {ShowcaseDataFrom} from "@/interface/showcase-type/showcase-type";
import {showcaseService} from "@/service/home-service/showcase.service";


export async function Showcase() {

    const DataLayer: ShowcaseDataFrom = await showcaseService() as ShowcaseDataFrom
    return <ShowcaseAnimation DataLayer={DataLayer}></ShowcaseAnimation>
};
