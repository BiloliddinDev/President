import { SectionTitle } from "@/components/ui/sectionTitle";
import Image from "next/image";
import AboutImage from "@/public/images/About.png";
import { FC } from "react";

interface AboutProps {
    dictionary: {
        about: {
            title: string;
            subtitle: string;
            description: string;
            imageAlt: string;
        };
    };
    lang?: "uz" | "ru" | "en";
}

export const About: FC<AboutProps> = ({ dictionary }) => {
    return (
        <div className="bg-gradient-to-l from-neutral-100 to-white/0 py-10">
            <div className="container">
                <SectionTitle text={dictionary.about.title} />
                <div className="mt-12 flex flex-wrap items-center gap-12 justify-center md:justify-between">
                    <Image
                        src={AboutImage.src}
                        alt={dictionary.about.imageAlt}
                        className="w-[265px] h-[245px] md:w-[600px] md:h-[600px] object-cover"
                        width={600}
                        height={600}
                    />
                    <div className="max-w-[480px]">
                        <h2 className="text-primary mb-2.5 md:mb-5 text-lg md:text-2xl font-medium md:font-semibold">
                            {dictionary.about.subtitle}
                        </h2>
                        <p className="text-gray-600 mb-5 text-base md:text-xl font-normal">
                            {dictionary.about.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};