import {HTMLAttributes} from "react";

interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
    text: string;
}

export const AccountTitle = ({text}: SectionTitleProps) => {
    return (
        <h2 className="self-stretch justify-start text-gray-900 text-lg font-medium font-['Inter'] leading-7">{text}</h2>
    )
}           


