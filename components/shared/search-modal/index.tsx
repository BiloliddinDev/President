import React, {FC} from "react";
import {Sheet, SheetContent, SheetTitle, SheetTrigger,} from "@/components/ui/sheet";
import {NavbarModalProps} from "@/interface/navbar-modals-type";

const SearchModal: FC<NavbarModalProps> = ({title, side, sheetTitle, children,}) => {
    return (
        <Sheet>
            <div className="relative z-50">
                <SheetTrigger className="">{title}</SheetTrigger>
                <SheetContent side={side}>

                    <div className="ml-[3.75rem] mt-10">
                        <SheetTitle className="pb-1.5">{sheetTitle}</SheetTitle>
                        {children}
                    </div>
                </SheetContent>
            </div>
        </Sheet>
    );
};

export default SearchModal;