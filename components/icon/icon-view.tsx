"use client";

import { IconList } from "./icon-list";
import { HTMLAttributes, useMemo } from "react";

interface IconComponentProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  classNames?: string;
}

export default function IconComponent({
  name,
  classNames,
}: IconComponentProps) {
  const iconHtml = useMemo(() => {
    const found = IconList.find((item) => item.name === name);
    return found ? found.icon : "";
  }, [name]);

  return (
    <span
      className={classNames}
      style={{ display: "flex", alignItems: "center" }}
      dangerouslySetInnerHTML={{ __html: iconHtml }}
    />
  );
}
