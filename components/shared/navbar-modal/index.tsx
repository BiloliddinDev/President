import React, {FC, useRef, useState} from "react";
import {Sheet, SheetContent, SheetTitle, SheetTrigger,} from "@/components/ui/sheet";
import {NavbarModalProps} from "@/interface/navbar-modals-type";
import Link from "next/link";
import {navbarContent} from "@/constants/navbar";


const NavbarModal: FC<NavbarModalProps> = ({title, side, sheetTitle, children}) => {

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
        <Sheet  modal={false} open={isOpen}>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative z-50"
            >
                <SheetTrigger
                    className="transition-all !outline-0 text-sm font-medium cursor-pointer flex flex-row-reverse items-center gap-2 group"
                >
                    {title}

                    {(title === 'Shop' || title === 'Discover') && (
                        <span
                            className={`w-1.5 h-1.5 rounded-full bg-black transition-opacity ${
                                isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                            }`}
                        />
                    )}

                </SheetTrigger>



                <SheetContent
                    side={side}
                    className={'w-[350px]'}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                <div className="ml-[3.75rem] mt-10 h-full py-10">
                        <SheetTitle className="pb-1.5 pt-6">{sheetTitle}</SheetTitle>
                        <div className={'flex flex-col justify-between h-full pb-5'}>
                            {children}
                            {
                                title === "Shop" || title === "Discover" ? (
                                    <div >
                                        {navbarContent.map((item) => (
                                            <div
                                                className={`text-sm font-normal leading-[1.5rem] cursor-pointer ${
                                                    item.id === 9 ? "mt-10" : "my-5"
                                                }`}
                                                key={item.id}
                                            >
                                                <Link href={item.linkSrc}>{item.name}</Link>
                                            </div>
                                        ))}
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>
                </SheetContent>
            </div>
        </Sheet>
    )
        ;
};

export default NavbarModal;