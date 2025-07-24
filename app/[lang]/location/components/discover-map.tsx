// "use client";
// import React from "react";
// import dynamic from "next/dynamic";
// import IconComponent from "@/components/icon/icon-view";

// const MapComponent = dynamic(
//   () => import("@/components/shared/map-component/map-component"),
//   {
//     ssr: false,
//   }
// );

// const DiscoverMap = () => {
//   return (
//     <div>
//       <div className="w-full max-w-[1200px] h-[544px] mt-[130px] rounded-md overflow-hidden">
//         <MapComponent
//           selectedPosition={[41.266262650575065, 69.24891016111192]}
//           zoom={18}
//         />
//       </div>
//       <div className="flex flex-col gap-5 mt-5">
//         <p className="font-medium text-xl">Address</p>
//         <div className="flex items-center gap-1.5">
//           <IconComponent
//             name="location"
//             height={24}
//             width={24}
//             classNames="text-gray-500 transition-colors duration-200 "
//           />
//           <p className="text-zinc-500">
//             2/A, Kichik xalqa yo`li, 100125, Тоshkent, Toshkent, Uzbekistan
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DiscoverMap;
"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
// import IconComponent from "@/components/icon/icon-view";
import { branches } from "../../(home)/components/location";

const MapComponent = dynamic(
  () => import("@/components/shared/map-component/map-component"),
  {
    ssr: false,
  }
);

const DiscoverMap = () => {
  const [selectedPosition, setSelectedPosition] = useState<
  [number, number] | null
>(null);

const handleGoTo = (lat: number, lng: number) => {
  setSelectedPosition([lat, lng]);
};
  return (
    <div>
      <div className="w-full max-w-[1200px] h-[544px] mt-[130px] rounded-md overflow-hidden">
                <MapComponent  selectedPosition={selectedPosition}/>
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <p className="font-medium text-xl">Адрес</p>
        <div className="flex items-center gap-1.5">
          {/* <IconComponent
            name="location"
            height={24}
            width={24}
            classNames="text-gray-500 transition-colors duration-200 "
          /> */}
           <div className="w-full mt-3 flex flex-col gap-[20px]">
                
                

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#5C5F6A] w-full max-w-lg">
                    {branches.map((branch, index) => (
                        <button
                            key={index}
                            onClick={() => handleGoTo(branch.lat, branch.lng)}
                            className="flex items-center font-inter text-[12px]  transition cursor-pointer"
                        >
                            {/* <IconComponent name="mapLocation"/> */}
                            {branch.name.ru}
                        </button>
                    ))}
                </div>
                <h3 className="text-[#5C5F6A] text-[12px] font-inter">
  Скоро открытие в Таджикистане, Самарканде и Баку
</h3>


            </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMap;
