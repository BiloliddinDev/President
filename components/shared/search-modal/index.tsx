import React, {FC} from "react";
import {Sheet, SheetContent, SheetTitle, SheetTrigger,} from "@/components/ui/sheet";
import {NavbarModalProps} from "@/interface/navbar-modals-type";

const SearchModal: FC<NavbarModalProps> = ({title, side, sheetTitle, children, lang,}) => {

    return (
        <Sheet>
            <div className="relative z-60 ">
                <SheetTrigger className="">{title}</SheetTrigger>
                <SheetContent className={"z-[100]"} side={side}>

                    <div className="ml-[3.75rem] mt-10">
                        <SheetTitle className="pb-1.5">{sheetTitle}</SheetTitle>
                        {children}
                    </div>
                    <p className={"flex flex-none"}>{lang}</p>
                </SheetContent>
            </div>
        </Sheet>
    );
};

export default SearchModal;