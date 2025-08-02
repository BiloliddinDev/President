"use client";

import {Dialog, DialogContent, DialogHeader, DialogTitle,} from "@/components/ui/dialog";
import {CheckCircle} from "lucide-react";
import {useEffect} from "react";

interface AutoCloseModalProps {
    title: string;
    text: string;
    duration?: number;
    icon?: React.ReactNode;
    open: boolean;
    onClose: () => void;
}

export const AutoCloseModal = ({
                                   title,
                                   text,
                                   duration = 3000,
                                   icon = <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4"/>,
                                   open,
                                   onClose,
                               }: AutoCloseModalProps) => {
    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [open, duration, onClose]);

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-3xl text-center py-6">
                {icon}
                <h2 className="text-center text-3xl py-5 px-2 ">
                    {title}
                </h2>
                <DialogHeader>
                    <DialogTitle className="text-lg text-center">{text}</DialogTitle>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};
