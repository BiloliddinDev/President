"use client";

import {useState} from "react";
import {useFormContext, useWatch} from "react-hook-form";
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
import { OrderProps } from "./order";

const LeafletMap = dynamic(() => import("./map-modal"), {ssr: false});

const AddressForm = ({dictionary}: OrderProps) => {
    const {control, setValue} = useFormContext();
    const [isOpen, setIsOpen] = useState(false);

    const location = useWatch({name: "address.location", control});
    const [tempPosition, setTempPosition] = useState(location);

    const handleSave = () => {
        if (tempPosition) {
            setValue("address.location", tempPosition, {
                shouldValidate: true,
                shouldDirty: true
            });
            setIsOpen(false);
        }
    };

    return (
        <div className="p-6 rounded-[4px] border">
            <h2 className="text-lg font-semibold mb-4">
                {dictionary.order.addressForm.title}
            </h2>

            <div className="space-y-5">
                <FormField
                    control={control}
                    name="address.text"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className="text-sm">
                                {dictionary.order.addressForm.addressLabel}
                            </FormLabel>
                            <FormControl>
                                <Input placeholder={dictionary.order.addressForm.addressPlaceholder} {...field} />
                            </FormControl>
                            <p className="text-sm text-muted-foreground">
                                {dictionary.order.addressForm.addressHint}
                            </p>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={control}
                    name="address.location.lat"
                    render={() => (
                        <FormItem>
                            <FormLabel className="text-sm">
                                {dictionary.order.addressForm.locationLabel}
                            </FormLabel>
                            <FormControl>
                                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                                    <DialogTrigger asChild>
                                        <Button type="button" variant="default" className="w-full">
                                            {dictionary.order.addressForm.mapButton}
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-4xl">
                                        <DialogHeader>
                                            <DialogTitle>
                                                {dictionary.order.addressForm.mapModalTitle}
                                            </DialogTitle>
                                            <DialogDescription>
                                                {dictionary.order.addressForm.mapModalDescription}
                                            </DialogDescription>
                                        </DialogHeader>

                                        <LeafletMap
                                            position={tempPosition}
                                            setPosition={setTempPosition}
                                        />

                                        <div className="flex justify-end pt-4">
                                            <Button onClick={handleSave} type="button">
                                                {dictionary.order.addressForm.saveLocationButton}
                                            </Button>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
            </div>
        </div>
    );
};

export default AddressForm;
