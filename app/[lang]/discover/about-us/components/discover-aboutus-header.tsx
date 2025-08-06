import React from "react";

const DiscoverAboutHeader = () => {
  return (
    <div  data-aos="fade-left" className="flex flex-col lg:flex-row justify-between mt-6 md:mt-8 gap-4 md:gap-8">
      <h3 className="text-base md:text-lg font-semibold">
        {/* About President Business Gifts */}
        Наша история
      </h3>
      <div className="max-w-xl">
        <p className="font-semibold text-sm md:text-base">
          {/* President Business Gifts */}
        </p>
        <p className="text-gray-600 my-3 md:my-4 text-sm">
          {/* From the beginning stages of assembling individual parts to presenting
          a truly alive and resplendent piece, our products are lifestyle
          companions that will accompany yours and future generations to come. */}
          Бренд President Business Gift начал свою деятельность в 2017 году и уже с 2021 года активно заявил о себе на рынке эксклюзивных корпоративных подарков. За считаные годы мы превратились в надёжного партнёра для компаний, государственных структур и частных клиентов, которые ценят статус, стиль и высокое качество.
        </p>
      </div>
    </div>
  );
};

export default DiscoverAboutHeader;
