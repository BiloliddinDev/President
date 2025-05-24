import { IconProps } from "@/interface/icons-type/icons-type";
import React, { FC } from "react";

const LocationIcon: FC<IconProps> = ({
  width = "35",
  height = "34",
  fill = "none",
  stroke,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 34"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4993 18.4163C19.8466 18.4163 21.7493 16.5136 21.7493 14.1663C21.7493 11.8191 19.8466 9.91634 17.4993 9.91634C15.1521 9.91634 13.2493 11.8191 13.2493 14.1663C13.2493 16.5136 15.1521 18.4163 17.4993 18.4163Z"
        stroke={stroke ? stroke : "#0E1422"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.4993 31.1663C23.166 25.4997 28.8327 20.4256 28.8327 14.1663C28.8327 7.90711 23.7586 2.83301 17.4993 2.83301C11.2401 2.83301 6.16602 7.90711 6.16602 14.1663C6.16602 20.4256 11.8327 25.4997 17.4993 31.1663Z"
        stroke={stroke ? stroke : "#0E1422"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LocationIcon;
