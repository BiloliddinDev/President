"use client";

import { IconList } from "./icon-list";
import { HTMLAttributes, useMemo } from "react";

interface IconComponentProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  classNames?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export default function IconComponent({
  name,
  classNames,
  width,
  height,
  onClick,
}: IconComponentProps) {
  const iconHtml = useMemo(() => {
    const found = IconList.find((item) => item.name === name);
    return found ? found.icon : "";
  }, [name]);

  return (
    <div className={classNames} onClick={onClick}>
      <span
        className="hover:duration-300"
        style={{
          display: "flex",
          alignItems: "center",
          height: height,
          width: width,
        }}
        dangerouslySetInnerHTML={{ __html: iconHtml }}
      />
    </div>
  );
}
