import React, { FC } from "react";

interface DiscoverProps {
  dictionary: {
    about: {
      title: string;         // e.g. "Наша история"
      subtitle: string;      // e.g. "President Business Gifts"
      description: string;   // e.g. description paragraph
    };
  };
  lang: "uz" | "ru" | "en" | "tj" | "az";
}

const DiscoverAboutHeader: FC<DiscoverProps> = ({ dictionary }) => {
  return (
    <div
      data-aos="fade-left"
      className="flex flex-col lg:flex-row justify-between mt-6 md:mt-8 gap-4 md:gap-8"
    >
      <h3 className="text-base md:text-lg font-semibold">
        {dictionary.about.title}
      </h3>
      <div className="max-w-xl">
        <p className="font-semibold text-sm md:text-base">
          {/* {dictionary.about.subtitle} */}
        </p>
        <p className="text-gray-600 my-3 md:my-4 text-sm">
          {dictionary.about.description}
        </p>
      </div>
    </div>
  );
};

export default DiscoverAboutHeader;
