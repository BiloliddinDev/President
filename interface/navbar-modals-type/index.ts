import { ReactNode } from "react";

export interface NavbarModalProps {
  children?: ReactNode;
  title?: string;
  side?: "top" | "bottom" | "right" | "left";
  sheetTitle?: string;
}
