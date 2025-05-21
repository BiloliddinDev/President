import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import ServicesImage from "@/public/images/services3.png";
import Image from "next/image";

export default function ReturnPage() {
    return (
        <div>
            <div className={"container !mt-22"}>
                <BreadcrumbDynamic/>
            </div>
            <Image width={1000} height={330} className={"w-full h-[330px] object-cover mt-8 mb-20"} src={ServicesImage}
                   alt={'ServicesImage'}/>

            <div className="container ">
                <div className="w-[590px] flex flex-col justify-start items-start gap-7">
                    <div
                        className="self-stretch justify-start text-primary text-lg font-medium  leading-7">Returns
                        & Refunds
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
                        <div
                            className="self-stretch justify-start text-zinc-700 text-base font-medium  leading-normal mb-4">Return
                            policy
                        </div>
                    </div>
                </div>
                <div className="self-stretch justify-start"><span
                    className="text-gray-900 text-sm font-medium leading-tight">You can return any item purchased on the Montblanc e-boutique within 30 days of the delivery date. Here’s how:<br/></span><span
                    className="text-gray-900 text-sm font-medium  underline leading-tight">Fill out the Return Form</span><span
                    className="text-gray-900 text-sm font-medium  leading-tight"> in order to get a Return Number. <br/>Make sure the merchandise you return is in its original condition, tags and packaging included, otherwise we will be unable to accept your return and issue a refund.<br/>Fill out 5 copies of the </span><span
                    className="text-gray-900 text-sm font-medium  underline leading-tight">Returns Proforma Invoice</span><span
                    className="text-gray-900 text-sm font-medium  leading-tight"> that came with your parcel. If the forms are not complete, the package will not pass Customs and will be returned to you.<br/>Ship your parcel with a shipping service of your choice and at your expense to our Italian warehouse.<br/></span><span
                    className="text-gray-900 text-sm font-medium  leading-tight">Due to merchandising restrictions, all returns must be shipped from the same country they were purchased from.<br/>Personalized Montblanc products cannot be returned for exchange or refund.<br/>Once your package reaches the warehouse, please allow 3 to 7 business days (depending on peak times) for your return to be processed. If your return does not meet the conditions listed, the package will be sent back to you. When your return has been accepted, your refund will be issued and you will receive a confirmation email.<br/>We would like to inform you that fragrances are non-refundable.<br/>For further information on the conditions for exercising your right to return, please see the </span><span
                    className="text-gray-900 text-sm font-medium  underline leading-tight">Legal Area</span><span
                    className="text-gray-900 text-sm font-medium  leading-tight">.</span></div>
            </div>
        </div>
    )
}