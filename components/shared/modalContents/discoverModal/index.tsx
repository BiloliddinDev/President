import { discoverModalItems } from "@/constants/discover-modal-item";
import Link from "next/link";
import React from "react";


interface DiscoverModalProps {
  lang : "uz" | "ru" | 'en'
}

const DiscoverModalContent = ({lang} : DiscoverModalProps) => {
  return (
    <div>
      {discoverModalItems.map((item) => (
        <div
          className={`text-sm
             font-normal leading-[1.5rem] cursor-pointer
            ${item.id === 9 ? "mt-10" : "my-5"}`}
          key={item.id}
        >
          <Link href={item.linkSrc}> {item.name[lang]}</Link>
        </div>
      ))}
    </div>
  );
};

export default DiscoverModalContent;
