import IconComponent from "@/components/icon/icon-view";
import Link from "next/link";
import React from "react";

export const ServiceCard = ({
  text,
  iconName,
  link,
}: {
  text: string;
  iconName: string;
  link: string;
}) => {
  return (
      <Link
          className="block w-full  hover:shadow-md"
          key={text}
          href={`service/${link}`}
      >
        <div className=" px-9 py-7 min-h-[7.25rem] flex items-center justify-between rounded gap-6 outline-1 outline-offset-[-1px] outline-gray-200">
          <p className="text-sm font-medium leading-tight">
            {text}
          </p>
          <IconComponent name={iconName} />
        </div>
      </Link>
  );
};
