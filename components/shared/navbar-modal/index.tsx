import React, {FC, useRef, useState} from "react";
import {Sheet, SheetContent, SheetTitle, SheetTrigger,} from "@/components/ui/sheet";
import {NavbarModalProps} from "@/interface/navbar-modals-type";

const NavbarModal: FC<NavbarModalProps> = ({title, side, sheetTitle, children,}) => {

    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 300);
    };

    return (
        <Sheet modal={false} open={isOpen}>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative z-50"
            >
                <SheetTrigger className="cursor-pointer">{title}</SheetTrigger>
                <SheetContent
                    className="top-[86.5px]"
                    side={side}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="ml-[3.75rem] mt-10">
                        <SheetTitle className="pb-1.5">{sheetTitle}</SheetTitle>
                        {children}
                    </div>
                </SheetContent>
            </div>
        </Sheet>
    );
};

export default NavbarModal;
