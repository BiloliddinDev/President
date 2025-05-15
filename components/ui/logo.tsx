"use client";

import Link from "next/link";
import LogoIcon from "../icon/logoIcon";
import FooterLogoIcon from "../icon/footerLogoIcon";

export const Logo = () => {
  return (
    <Link
      href={"/"}
      className="flex items-center gap-[12px] text-primary text-xl font-extrabold  capitalize"
    >
      <LogoIcon />
    </Link>
  );
};

export const FooterLogo = () => {
  return (
    <Link href={"/"}>
      <FooterLogoIcon />
    </Link>
  );
};
