'use client'

import { useCallback } from "react";
import ArrowToTop from "./assets/arrow-up-line.svg";
import Image from "next/image";

export default function ScrollToTop() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div  onClick={scrollToTop} className="bg-bodyText size-10 rounded-full absolute right-0 bottom-36 hover:bg-customPrimary">
        <Image
          src={ArrowToTop}
          alt="ArrowToTop"
          className="absolute top-2 left-2 hover:fill-white"
        />
      </div>
    </>
  );
}
