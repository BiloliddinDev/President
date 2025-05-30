import { FC } from "react";
import { Button } from "@/components/ui/button";
import { imageLoader } from "@/lib/imageLoader";
import showcaseImage from "@/public/images/showcase-image.png";
import Link from "next/link";

export const Showcase: FC = () => {
  const backgroundImageUrl = imageLoader({
    src: `${showcaseImage.src}`,
    width: 1250,
    quality: 100,
  });

  return (
    <div
      className="sm:h-96 md:h-[755px] bg-no-repeat bg-cover flex flex-col justify-end bg-black/20 py-8 px-4 md:pb-[90px]"
      style={{
        backgroundImage: `
          url('${backgroundImageUrl}')
        `,
      }}
    >
      <div className="container">
        <h1 className="w-[400px] mb-3 justify-center text-white text-6xl font-normal font-title">
          Bags & Leather Goods
        </h1>
        <p className="w-64 mb-12 justify-start text-white text-base font-normal tracking-wide">
          New Styles In Refined Colours
        </p>
        <Link href={"/shops/news"}>
          <Button aria-busy={true} variant={"outline"}>
            Shop now
          </Button>
        </Link>
      </div>
    </div>
  );
};
