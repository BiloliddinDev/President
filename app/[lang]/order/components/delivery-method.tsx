"use client";

import {useState} from "react";
import {useFormContext} from "react-hook-form";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./map-modal"), {ssr: false});

const AddressForm = () => {
    const {control, setValue, getValues} = useFormContext();
    const [isOpen, setIsOpen] = useState(false);
    const [tempPosition, setTempPosition] = useState(getValues("address.location"));

    const handleSave = () => {
        if (tempPosition) {
            setValue("address.location", tempPosition);
            setIsOpen(false); 
        }
    };

    return (
        <div className="p-6 rounded-[4px] border">
            <h2 className="text-lg font-semibold mb-4">
                Способ получения и адрес доставки:
            </h2>

            <div className="space-y-5">
                <FormField
                    control={control}
                    name="address.text"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className="text-sm">Куда доставить заказ?</FormLabel>
                            <FormControl>
                                <Input placeholder="Адрес" {...field} />
                            </FormControl>
                            <p className="text-sm text-muted-foreground">
                                Укажите адрес на карте или используйте поиск
                            </p>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <Button type="button" variant="outline" className="w-full">
                            Обозначение по карте
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                        <DialogHeader>
                            <DialogTitle>Выберите точку на карте</DialogTitle>
                            <DialogDescription>
                                Нажмите на нужное место на карте для выбора адреса.
                            </DialogDescription>
                        </DialogHeader>

                        <LeafletMap 
                            position={tempPosition} 
                            setPosition={setTempPosition}
                        />

                        <div className="flex justify-end pt-4">
                            <Button onClick={handleSave} type="button">
                                Save Location
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};

export default AddressForm;