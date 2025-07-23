import React, { FC } from "react";
interface Props {
  title: string;
  maintext: string;
  maintextColor: string;
  rightSideTitle?: string;
  contentLink?: boolean;
}
const CommonHeader: FC<Props> = ({
  title,
  maintext,
  rightSideTitle,
  maintextColor,
  contentLink,
}) => {
  return (
    <div className="flex flex-wrap justify-between mb-24">
      <p className="text-lg font-medium">{title}</p>
      <div className="max-w-[582px]">
        {rightSideTitle && <p className="font-medium mb-4">{rightSideTitle}</p>}
        <p
          className={`text-sm  text-[${maintextColor}] ${
            contentLink && "mb-4"
          } `}
        >
          {maintext}
        </p>
        {/* {contentLink && (
          <a href="#" className="font-medium  leading-6 underline">
            Contact us for enquiries
          </a>
        )} */}
      </div>
    </div>
  );
};

export default CommonHeader;
