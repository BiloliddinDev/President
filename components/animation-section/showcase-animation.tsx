// "use client"

// import {useEffect, useMemo, useState} from "react";
// import {AnimatePresence, motion} from "framer-motion";
// import {imageLoader} from "@/lib/imageLoader";
// import images1 from "@/public/images/clock-show-case.jpg";
// import {Button} from "@/components/ui/button";
// import Link from "next/link";
// import {ShowcaseDataFrom, ShowcaseItem} from "@/interface/showcase-type/showcase-type";

// export default function ShowcaseAnimation({DataLayer, showcase}: {
//     DataLayer: ShowcaseDataFrom
//     showcase: ShowcaseItem[]
// }) {
//     const [current, setCurrent] = useState(0);


//     const images = showcase.find((item) => item.key == "showcase.image")?.mediaFiles.map((media) => media.filePath)

//     useEffect(() => {
//         if (images) {
//             const interval = setInterval(() => {
//                 setCurrent((prev) => (prev + 1) % images.length);
//             }, 3000);
//             return () => clearInterval(interval);
//         }
//     }, [images]);

//     const backgroundImageUrl = useMemo(() => {
//         if (images) {
//             return imageLoader({
//                 src: images[current],
//                 width: 1400,
//                 quality: 100,
//             });
//         }
//     }, [current, images]);


//     return (
//         <div className="relative h-screen shadow-2xl overflow-hidden">
//             <AnimatePresence mode="sync">
//                 <motion.div
//                     key={current}
//                     initial={{opacity: 0, scale: 1.04}}
//                     animate={{opacity: 1, scale: 1}}
//                     exit={{opacity: 0, scale: 1.02}}
//                     transition={{
//                         duration: 0.8,
//                         ease: "easeInOut",
//                     }}
//                     className="absolute inset-0 bg-no-repeat bg-cover bg-center"
//                     style={{
//                         backgroundImage: `url('${process.env.NEXT_PUBLIC_ADMIN_URL}${backgroundImageUrl}')` || images1.src,
//                     }}
//                 />
//             </AnimatePresence>

//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[1]"/>

//             <div className="relative z-10 h-full w-full flex flex-col justify-end py-8 px-4 md:pb-[90px]">
//                 <div className="container">
//                     <h1 className=" w-full md:w-[650px] mb-1.5 md:mb-3 text-white text-3xl md:text-6xl font-normal font-title showcase-title">
//                         {DataLayer["showcase.title"]}
//                     </h1>
//                     <p className="w-64 md:w-[600px] mb-5 md:mb-12 text-white text-base font-normal tracking-wide">
//                         {DataLayer["showcase.description"]}
//                     </p>
//                     <Link href="#support">
//                         <Button
//                             variant="outline"
//                             className="w-full sm:w-52 bg-gold hover:bg-gold/90 text-white border-none hover:text-white/90 h-12 rounded-[12px]"
//                         >
//                             {DataLayer["showcase.button"]}
//                         </Button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }
"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { imageLoader } from "@/lib/imageLoader";
import images1 from "@/public/images/clock-show-case.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShowcaseDataFrom,
  ShowcaseItem,
} from "@/interface/showcase-type/showcase-type";

export default function ShowcaseAnimation({
  DataLayer,
  showcase,
}: {
  DataLayer: ShowcaseDataFrom;
  showcase: ShowcaseItem[];
}) {
  const [current, setCurrent] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Client side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  const images = useMemo(() => {
    return (
      showcase
        .find((item) => item.key === "showcase.image")
        ?.mediaFiles.map((media) => media.filePath) || []
    );
  }, [showcase]);
  
  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [images.length]);
  
  const backgroundImageUrl = useMemo(() => {
    if (!isClient || images.length === 0) return null;
  
    return imageLoader({
      src: images[current],
      width: 1400,
      quality: 100,
    });
  }, [isClient, current, images]);
  
  
  return (
    <div className="relative h-screen shadow-2xl overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url('${
              backgroundImageUrl
                ? `${process.env.NEXT_PUBLIC_ADMIN_URL}${backgroundImageUrl}`
                : images1.src
            }')`,
          }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[1]" />

      <div className="relative z-10 h-full w-full flex flex-col justify-end py-8 px-4 md:pb-[90px]">
        <div className="container">
          <h1 className="w-full md:w-[650px] mb-1.5 md:mb-3 text-white text-3xl md:text-6xl font-normal font-title showcase-title">
            {DataLayer["showcase.title"]}
          </h1>
          <p className="w-64 md:w-[600px] mb-5 md:mb-12 text-white text-base font-normal tracking-wide">
            {DataLayer["showcase.description"]}
          </p>
          <Link href="#support">
            <Button
              variant="outline"
              className="w-full sm:w-52 bg-gold hover:bg-gold/90 text-white border-none hover:text-white/90 h-12 rounded-[12px]"
            >
              {DataLayer["showcase.button"]}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
