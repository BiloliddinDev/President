"use client";

import {useFormContext} from "react-hook-form";
import {FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";

const AddressForm = () => {
    const {control} = useFormContext();

    return (
        <div className="p-6 rounded-[4px] border">
            <h2 className="text-lg font-semibold mb-4">
                Способ получения и адрес доставки:
            </h2>

            <div className="space-y-5">
                <FormField
                    control={control}
                    name="address"
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

                <Dialog>
                    <DialogTrigger asChild>
                        <Button type="button" variant="outline" className="w-full">
                            Обозначение по карте
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                        <DialogHeader>
                            <DialogTitle>Выберите точку на карте</DialogTitle>
                        </DialogHeader>
                        <div
                            className="w-full h-[400px] bg-gray-100 rounded-md flex items-center justify-center text-muted-foreground">
                            Тут будет карта
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};

export default AddressForm;