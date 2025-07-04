import {FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {useFormContext} from "react-hook-form";

export default function CheckoutForm() {
    const {control} = useFormContext();

    return (
        <div className="p-6 rounded-[4px] border mt-4">
            <h2 className="text-lg font-semibold mb-4">Информация о получателе</h2>

            <div className="space-y-5">
                <FormField
                    control={control}
                    name="userInformation.name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Имя</FormLabel>
                            <FormControl>
                                <Input placeholder="Введите имя" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="userInformation.secondname"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Фамилия</FormLabel>
                            <FormControl>
                                <Input placeholder="Введите фамилию" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="userInformation.phone"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Номер телефона</FormLabel>
                            <FormControl>
                                <Input placeholder="+998901234567" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="userInformation.secondPhone"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Дополнительный номер (необязательно)</FormLabel>
                            <FormControl>
                                <Input placeholder="+998..." {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
            </div>
        </div>
    );
}
