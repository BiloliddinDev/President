import { HTMLAttributes } from "react";

interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

export const SectionTitle = ({
  text,
  className,
  ...props
}: SectionTitleProps) => {
  return (
    <div
      className={`${className} text-primary text-xl md:text-5xl font-medium uppercase font-title`}
      {...props}
    >
      {text}
    </div>
  );
};
