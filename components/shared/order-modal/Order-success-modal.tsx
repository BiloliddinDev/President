"use client";

import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CircleCheckBig } from "lucide-react";

interface OrderProps {
    order: {
      successModal: {
        title: string;
        description: string;
        goHome: string;
        goAccount:string;
      };
    };
}

export default function OrderSuccessModal({
  isOpen,
  onClose,
  dictionary,
}: {
  isOpen: boolean;
  onClose: () => void;
  dictionary: OrderProps;
}) {
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
          <DialogTitle className="text-2xl font-bold text-green-600">
            {dictionary.order.successModal.title}
          </DialogTitle>
        </DialogHeader>
        <p className="text-gray-600 text-sm mt-2">
          {dictionary.order.successModal.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center">
          <Button onClick={handleGoHome} className="w-full sm:w-auto">
            {dictionary.order.successModal.goHome}
          </Button>
          <Button
            variant="outline"
            onClick={handleGoAccount}
            className="w-full sm:w-auto"
          >
            {dictionary.order.successModal.goAccount}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
