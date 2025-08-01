import Image from "next/image";
import orderImage from "@/public/images/colection-item2.png"
import {Button} from "@/components/ui/button";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";

export const OrderCard = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return (
        <div className={"flex items-center justify-between w-full"}>
            <div className={'flex gap-8'}>
                <Image src={orderImage} alt={'Order image '} width={80} height={80}/>
                <div className={"flex flex-col justify-start items-start gap-2"}>
                    <h4 className="text-center justify-start text-primary text-sm font-medium leading-tight">Сумка для документов</h4>
                    <p className="text-center justify-start text-gray-600 text-xs font-medium leading-none">
                        Дата заказа:  {year}:{month}:{day} / {hours}:{minutes}
                    </p>
                    <p className="justify-start text-primary text-xs font-medium  leading-none">2 640 000 сум</p>  {/* .toLocaleString() */}
                </div>
            </div>
            <div className={"flex gap-2"}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button  className={'w-[66px]'} variant="link">Обработка</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <h3>Обработка</h3>
                        <p> В настоящее время Ваш заказ упаковывается и готовится к отправке. </p>
                    </TooltipContent>
                </Tooltip>
                <Button className={""} variant={"secondary"}>Посмотреть элемент</Button>
            </div>
        </div>
    )
}

