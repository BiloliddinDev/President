import Image from "next/image";
import orderImage from "@/public/images/b2b-image.png"
import {Button} from "@/components/ui/button";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";

export const OrderCard = () => {
    return (
        <div className={"flex items-center justify-between w-full"}>
            <div className={'flex gap-8'}>
                <Image src={orderImage} alt={'Order image '} width={80} height={80}/>
                <div className={"flex flex-col justify-start items-start gap-2"}>
                    <h4 className="text-center justify-start text-primary text-sm font-medium leading-tight">Raw Black
                        T-Shirt Lineup</h4>
                    <p className="text-center justify-start text-gray-600 text-xs font-medium leading-none">Ordered on:
                        27 July 2023</p>
                    <p className="justify-start text-primary text-xs font-medium  leading-none">70.00 USD</p>
                </div>
            </div>
            <div className={"flex gap-2"}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button  className={'w-[66px]'} variant="link">Processing</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <h3>Processing</h3>
                        <p>Your order is currently being packed and prepared for shipment.</p>
                    </TooltipContent>
                </Tooltip>
                <Button className={"w-[66px]"} variant={"secondary"}>View item</Button>
            </div>
        </div>
    )
}

