import "@/app/globals.css";
import ShowcaseAnimation from "@/components/animation-section/showcase-animation";
import {ShowcaseDataFrom, ShowcaseItem} from "@/interface/showcase-type/showcase-type";
// import { getshowCaseData } from "@/service/home-service/showcase-image.service";
// import { showcaseService } from "@/service/home-service/showcase.service";


export async function Showcase({DataLayer, showcase}: {
    DataLayer: ShowcaseDataFrom
    showcase: ShowcaseItem[]
}) {
    // const DataLayer: ShowcaseDataFrom = await showcaseService() as ShowcaseDataFrom
    // const ImagesData: ShowcaseItem[] = await getshowCaseData() as ShowcaseItem[]

    return <ShowcaseAnimation DataLayer={DataLayer} showcase={showcase}></ShowcaseAnimation>
};
