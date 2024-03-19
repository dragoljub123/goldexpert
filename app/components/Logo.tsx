import React from "react";
import Link from "next/link";
import Image from "next/image";
import crlogo from "../images/crlogo.png";
Image;
interface Props {
  title?: string;
  className: string;
}

export const Logo = ({ title, className }: Props) => {
  return (
    <Link href={"/"}>
      <Image src={crlogo} alt="slika" className=" object-contain" />
    </Link>
  );
};
