"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import GeraiRetail from "../assets/PowerUp - UI - Tunai/mdi_shop-alert.svg";
import Indomaret from "../assets/PowerUp - UI - Tunai/Indomaret.svg";
import Alfamidi from "../assets/PowerUp - UI - Tunai/Alfamidi.svg";
import Alfamart from "../assets/PowerUp - UI - Tunai/Alfamart.svg";

export default function RetailOutlets() {
  const [isContentVisible, setContentVisible] = useState(true);

  const handleClick = () => {
    setContentVisible(!isContentVisible);
  };
  return (
    <>
      <div className="bg-cardPayment w-full h-14 px-6 rounded-t-xl border-custom relative border-stroke inline-flex items-center">
        <Image className="absolute" src={GeraiRetail} alt="Gerai Retail" />
        <h1 className="ml-9 text-base font-medium">Gerai Retail</h1>
      </div>
      <Accordion
        type="single"
        defaultValue="item-1"
        collapsible
        className=" rounded-t-xl"
      >
        <AccordionItem value="item-3" className="bg-customSecondary mb-5">
          <AccordionContent className="bg-cardPayment border-x-[2.5px] border-x-stroke border-b-[2.5px] border-b-stroke">
            <div className="grid grid-cols-2 gap-4 pt-5 mx-5 ">
              <Button className="w-[250px] h-[75px] bg-cardButtonPaymentMethod hover:bg-cardButtonPaymentMethod hover:border-3 hover:border-customPrimary focus:border-3 focus:bg-white focus:border-customPrimary rounded-md"></Button>
              <Button className="w-[250px] h-[75px] bg-cardButtonPaymentMethod hover:bg-cardButtonPaymentMethod hover:border-3 hover:border-customPrimary focus:border-3 focus:bg-white focus:border-customPrimary rounded-md"></Button>
              <Button className="w-[250px] h-[75px] bg-cardButtonPaymentMethod hover:bg-cardButtonPaymentMethod hover:border-3 hover:border-customPrimary focus:border-3 focus:bg-white focus:border-customPrimary rounded-md"></Button>
              <Button className="w-[250px] h-[75px] bg-cardButtonPaymentMethod hover:bg-cardButtonPaymentMethod hover:border-3 hover:border-customPrimary focus:border-3 focus:bg-white focus:border-customPrimary rounded-md"></Button>
              <Button className="w-[250px] h-[75px] bg-cardButtonPaymentMethod hover:bg-cardButtonPaymentMethod hover:border-3 hover:border-customPrimary focus:border-3 focus:bg-white focus:border-customPrimary rounded-md"></Button>
            </div>
          </AccordionContent>
          <AccordionTrigger
            onClick={handleClick}
            className="bg-cardPayment h-7 pr-5 outline-t-custom rounded-b-xl border-x-[2.5px] border-b-[2.5px] border-x-stroke border-b-stroke"
          >
            {isContentVisible ? (
              <div className="w-full ml-5 inline-flex space-x-2">
                <Image src={Indomaret} alt="Indomaret" />
                <Image src={Alfamidi} alt="Alfamidi" />
                <Image src={Alfamart} alt="Alfamart" />
              </div>
            ) : null}
            <div className="size-1 bg-transparent"></div>
          </AccordionTrigger>
        </AccordionItem>
      </Accordion>
    </>
  );
}
