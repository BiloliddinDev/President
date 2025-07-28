// components/order-success-modal.tsx
"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CircleCheckBig } from "lucide-react";

export default function OrderSuccessModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const router = useRouter();

    const handleGoHome = () => {
        router.push("/");
        onClose();
    };

    const handleGoAccount = () => {
        router.push("/account");
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-sm text-center">
                <DialogHeader className="flex flex-col items-center justify-center gap-2 mb-4">
                    <CircleCheckBig className="w-16 h-16 text-green-600" />
                    <DialogTitle className="text-2xl font-bold text-green-600">Заказ успешно оформлен!</DialogTitle>
                </DialogHeader>
                <p className="text-gray-600 text-sm mt-2">
                    Благодарим за ваш заказ! Мы свяжемся с вами в ближайшее время для подтверждения и уточнения деталей.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center">
                    <Button onClick={handleGoHome} className="w-full sm:w-auto">
                        На главную
                    </Button>
                    <Button variant="outline" onClick={handleGoAccount} className="w-full sm:w-auto">
                        В личный кабинет
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
