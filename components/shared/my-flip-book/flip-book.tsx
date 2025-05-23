"use client";
import HTMLFlipBook from "react-pageflip";
const MyFlipBook = (props: {
  children: React.ReactNode;
  className: string;
  startPage?: number;
  width?: number;
  height?: number;
  size?: "fixed" | "stretch";
}) => {
  return (
    <HTMLFlipBook
      className={props.className}
      startPage={props.startPage || 0}
      size={props.size || "fixed"}
      width={props.width || 300}
      height={props.height || 400}
    >
      {props.children}
    </HTMLFlipBook>
  );
};

export default MyFlipBook;
