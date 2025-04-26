import { HTMLAttributes } from 'react';

interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
    text: string;
}

export const SectionTitle = ({ 
    text, 
    className ,
    ...props 
}: SectionTitleProps) => {
    return (
        <div 
            className={`${className} text-gray-900 text-2xl font-medium  uppercase `}
            {...props}
        >
            {text}
        </div>
    )
}