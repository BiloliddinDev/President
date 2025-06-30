import {Button} from "@/components/ui/button";

export default function OrderSummary() {
    return (
        <div className="w-full max-w-sm border rounded-[4px] p-6 space-y-4 text-gray-800">
            <h2 className="text-lg font-semibold">Детали вашего заказа</h2>

            <div className="space-y-2">
                <div className="flex justify-between">
                    <span>Количество товара</span>
                    <span className="font-semibold">5 шт.</span>
                </div>
                <div className="flex justify-between">
                    <span>Цены продуктов</span>
                    <span className="font-semibold">102 000 000 сум</span>
                </div>
                <div className="flex justify-between">
                    <span>Стоимость доставки</span>
                    <span className="font-semibold">10 000 000 сум</span>
                </div>
                <div className="flex justify-between">
                    <span>Скидка</span>
                    <span className="font-semibold">10 000 сум</span>
                </div>
                <hr/>
                <div className="flex justify-between text-lg font-semibold">
                    <span>Итого:</span>
                    <span>112 000 000 сум</span>
                </div>
            </div>
            
            <Button variant={"default"} type="submit" className={'w-full'}
            >
                Перейти к оплату
            </Button>

            <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Служба доставки в течение 2–3 дней.</span>
            </div>
        </div>
    );
}
