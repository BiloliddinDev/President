import {ReactNode} from "react";

export interface NavbarModalProps {
    children?: ReactNode;
    title?: string | ReactNode;
    showing? : boolean,
    side?: "top" | "bottom" | "right" | "left";
    sheetTitle?: string;
    textColorClass?: string;
    lang: "uz" | "ru" | "en" | "tj" | "az"
}
