"use client";

import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

export function DeliveryMethod() {
    // const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
    // const [open, setOpen] = useState(false);

    console.log(location)

    return (
        <div className="p-4 border rounded-[4px]">
            <h2 className="text-lg font-semibold">Способ получения и адрес доставки:</h2>
            <div className="space-y-2">
                <Label htmlFor="address" className={"my-3"}>Куда доставить заказ?</Label>
                <Input id="address" placeholder="Адрес"/>
                <p className="text-sm text-muted-foreground">
                    Укажите адрес на карте или используйте поиск
                </p>
                <div className="flex gap-2">
                    {/*<Button variant={'default'} className={"w-full"} onClick={() => setOpen(true)}>Обозначение по*/}
                    {/*    карте</Button>*/}
                </div>
            </div>

            {/*<MapModal*/}
            {/*    open={open}*/}
            {/*    setOpen={setOpen}*/}
            {/*    onLocationSelect={(lat, lng) => setLocation({lat, lng})}*/}
            {/*/>*/}
        </div>
    );
}
