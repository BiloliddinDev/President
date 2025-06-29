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
      className={`${className} text-primary  text-4xl md:text-5xl font-normal uppercase font-title section-title`}
      {...props}
    >
      {text}
    </div>
  );
};
