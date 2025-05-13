import React, { FC } from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavbarModalProps } from "@/interface/navbar-modals-type";

const NavbarModal: FC<NavbarModalProps> = ({
  title,
  side,
  sheetTitle,
  children,
}) => {
  return (
    <Sheet>
      <SheetTrigger className={'cursor-pointer'}>{title}</SheetTrigger>
      <SheetContent side={side}>
        <div className="ml-[3.75rem] mt-10">
          <SheetTitle className="pb-1.5">{sheetTitle}</SheetTitle>
          {children}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarModal;
