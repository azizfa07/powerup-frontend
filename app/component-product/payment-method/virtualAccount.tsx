"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import BankIcon from "../assets/PowerUp - UI - VirtualAccount/dashicons_bank.svg";
import BCA from "../assets/PowerUp - UI - VirtualAccount/BCA.svg";
import CimbN from "../assets/PowerUp - UI - VirtualAccount/Cimb niaga.svg";
import BNI from "../assets/PowerUp - UI - VirtualAccount/BNI.svg";
import BRI from "../assets/PowerUp - UI - VirtualAccount/BRI.svg";
import Danamon from "../assets/PowerUp - UI - VirtualAccount/Danamon.svg";
import MayBank from "../assets/PowerUp - UI - VirtualAccount/Maybank.svg";
import BSI from "../assets/PowerUp - UI - VirtualAccount/Bank Syariah Indonesia.svg";

export default function VirtualAccount() {
  const [isContentVisible, setContentVisible] = useState(true);

  const handleClick = () => {
    setContentVisible(!isContentVisible);
  };
  return (
    <>
      <div className="bg-cardPayment w-full h-14 px-6 rounded-t-xl border-custom relative border-stroke inline-flex items-center ">
        <Image className="absolute" src={BankIcon} alt="BankIcon" />
        <h1 className="ml-9 text-base font-medium">Virtual Account</h1>
      </div>
      <Accordion
        type="single"
        defaultValue="item-1"
        collapsible
        className=" rounded-t-xl"
      >
        <AccordionItem value="item-2" className="bg-customSecondary mb-5">
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
                <Image src={BCA} alt="BCA" />
                <Image src={CimbN} alt="CimbN" />
                <Image src={BNI} alt="BNI" />
                <Image src={BRI} alt="BRI" />
                <Image src={Danamon} alt="Danamon" />
                <Image src={MayBank} alt="MayBank" />
                <Image src={BSI} alt="BSI" />
              </div>
            ) : null}
            <div className="size-1 bg-transparent"></div>
          </AccordionTrigger>
        </AccordionItem>
      </Accordion>
    </>
  );
}
