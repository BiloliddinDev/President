import { discoverModalItems } from "@/constants/discover-modal-item";
import Link from "next/link";
import React from "react";

const DiscoverModalContent = () => {
  return (
    <div>
      {discoverModalItems.map((item) => (
        <div
          className={`text-sm
             font-normal leading-[1.5rem] cursor-pointer
            ${item.id === 9 ? "mt-10" : "my-5"}`}
          key={item.id}
        >
          <Link href="/"> {item.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default DiscoverModalContent;
