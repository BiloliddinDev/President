// // import React, { FC } from "react";
// // interface Props {
// //   title: string;
// //   maintext: string;
// //   maintextColor: string;
// //   rightSideTitle?: string;
// //   contentLink?: boolean;
// // }
// // const CommonHeader: FC<Props> = ({
// //   title,
// //   maintext,
// //   rightSideTitle,
// //   maintextColor,
// //   contentLink,
// // }) => {
// //   return (
// //     <div className="flex flex-wrap justify-between mb-24">
// //       <p className="text-lg font-medium">{title}</p>
// //       <div className="max-w-[582px]">
// //         {rightSideTitle && <p className="font-medium mb-4">{rightSideTitle}</p>}
// //         <p
// //           className={`text-sm  text-[${maintextColor}] ${
// //             contentLink && "mb-4"
// //           } `}
// //         >
// //           {maintext}
// //         </p>
// //         {/* {contentLink && (
// //           <a href="#" className="font-medium  leading-6 underline">
// //             Contact us for enquiries
// //           </a>
// //         )} */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CommonHeader;
// import Image, { StaticImageData } from "next/image";
// import React, { FC } from "react";

// interface Props {
//   title: string;
//   maintext: string;
//   maintextColor: string;
//   rightSideTitle?: string;
//   contentLink?: boolean;
//   imageUrl?: string | StaticImageData;
// }

// const CommonHeader: FC<Props> = ({
//   title,
//   maintext,
//   rightSideTitle,
//   maintextColor,
//   contentLink,
//   imageUrl,
// }) => {
//   return (
//     <div className="flex flex-wrap justify-between mb-24">
//       <div className="w-full">
//         <p className="text-lg font-medium">{title}</p>

//         {imageUrl && (
//           <Image
//             width={"500"}
//             height={"500"}
//             src={imageUrl}
//             alt={"videoSrc"}
//             className="w-full  h-full max-w-[500px] max-h-[500px] object-cover rounded"
//           />
//         )}
//       </div>

//       <div className="max-w-[582px]">
//         {rightSideTitle && <p className="font-medium mb-4">{rightSideTitle}</p>}
//         <p
//           className={`text-sm text-[${maintextColor}] ${contentLink && "mb-4"}`}
//         >
//           {maintext}
//         </p>
//         {/* {contentLink && (
//           <a href="#" className="font-medium leading-6 underline">
//             Contact us for enquiries
//           </a>
//         )} */}
//       </div>
//     </div>
//   );
// };

// export default CommonHeader;
import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

interface Props {
  title: string;
  maintext: string;
  maintextColor: string;
  rightSideTitle?: string;
  contentLink?: boolean;
  imageUrl?: string | StaticImageData;
}

const CommonHeader: FC<Props> = ({
  title,
  maintext,
  rightSideTitle,
  maintextColor,
  contentLink,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 mb-24">
      {/* Chap blok: Title + Rasm */}
      <div className="md:w-1/2 w-full">
        <p className="text-lg font-medium mb-4">{title}</p>

        {imageUrl && (
          <Image
            width={500}
            height={500}
            src={imageUrl}
            alt="Common Header Image"
            className="w-full h-auto max-w-[500px] rounded object-cover"
          />
        )}
      </div>

      {/* O‘ng blok: Right Side Title + Text */}
      <div className="md:w-1/2 w-full">
        {rightSideTitle && <p className="font-medium mb-4">{rightSideTitle}</p>}

        <p
          className={`text-sm text-[${maintextColor}] ${
            contentLink ? "mb-4" : ""
          }`}
        >
          {maintext}
        </p>

        {/* {contentLink && (
          <a href="#" className="font-medium leading-6 underline">
            Contact us for enquiries
          </a>
        )} */}
      </div>
    </div>
  );
};

export default CommonHeader;
