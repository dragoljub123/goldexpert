import React from "react";
import Link from "next/link";
import Image from "next/image";
import glogo from "../images/gold expert.png";
Image;
interface Props {
  title?: string;
  className: string;
}

export const Logo = ({ title, className }: Props) => {
  return (
    <Link href={"/"}>
      <Image
        src={glogo}
        alt="slika"
        className="w-[134px] h-[27px] md:w-[204px] md:h-[41px]"
        priority={true}
      />
    </Link>
  );
};
