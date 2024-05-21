"use client"

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import VirtualAccount from "./virtualAccount";
import RetailOutlets from "./retailOutlets";
import EWalletIcon from "../assets/Wallet Logo.svg";
import Gopay from "../assets/Logo Gopay.svg";
import Dana from "../assets/DANA.svg";
import Ovo from "../assets/Logo Ovo.svg";
import ShopeePay from "../assets/Shopee Pay.svg";
import LinkAja from "../assets/Logo Shopee.svg";
import Image from "next/image";

export default function PaymentMethod() {
  const [isContentVisible, setContentVisible] = useState(false);

  const handleClick = () => {
    setContentVisible(!isContentVisible);
  };
  return (
    <>
      <div className="mt-8">
        <div className="bg-customSecondary w-[599px] h-auto pb-2 rounded-xl">
          <div className="bg-customPrimary rounded-full w-[50px] h-[50px] absolute -mt-3 ml-6 border-[6px] border-customSecondary">
            <h1 className="text-center text-white text-l absolute left-0 right-0 top-[6px] font-semibold">
              4
            </h1>
          </div>
          <h1 className="text-white text-lg left-[86px] font-medium top-2 relative">
            Pilih Metode Pembayaran
          </h1>
          <div className="text-white mt-8 mx-5 mb-6">
            <div className="bg-cardPayment w-full h-14 px-6 rounded-t-xl border-custom relative border-stroke inline-flex items-center">
              <Image
                className="absolute"
                src={EWalletIcon}
                alt="E-Wallet Icon"
              />
              <h1 className="ml-9 text-base font-medium">E-Wallet</h1>
            </div>
            <Accordion
              type="single"
              defaultValue="item-1"
              collapsible
              className=" rounded-t-xl"
            >
              <AccordionItem
                value="item-1"
                className=" bg-customSecondary mb-5"
              >
                <AccordionContent className="bg-cardPayment border-x-[2.5px] border-x-stroke border-b-[2.5px] border-b-stroke">
                  <div className="grid grid-cols-2 gap-4 pt-5 mx-5 ">
                    <Button className="w-[250px] h-[75px] bg-cardButtonPaymentMethod hover:bg-cardButtonPaymentMethod hover:border-3 hover:border-customPrimary focus:border-3 focus:bg-white focus:border-customPrimary rounded-md">
                      {/* <div className="inline-flex">
                        <Image src={Gopay} alt="Gopay" className="size-24 bg-customSecondary fill-customSecondary" />
                        <h1 className="my0">Gopay</h1>
                      </div> */}
                    </Button>
                    <Button className="w-[250px] h-[75px] bg-cardButtonPaymentMethod hover:bg-cardButtonPaymentMethod hover:border-3 hover:border-customPrimary focus:border-3 focus:bg-white focus:border-customPrimary rounded-md"></Button>
                    <Button className="w-[250px] h-[75px] bg-cardButtonPaymentMethod hover:bg-cardButtonPaymentMethod hover:border-3 hover:border-customPrimary focus:border-3 focus:bg-white focus:border-customPrimary rounded-md"></Button>
                    <Button className="w-[250px] h-[75px] bg-cardButtonPaymentMethod hover:bg-cardButtonPaymentMethod hover:border-3 hover:border-customPrimary focus:border-3 focus:bg-white focus:border-customPrimary rounded-md"></Button>
                    <Button className="w-[250px] h-[75px] bg-cardButtonPaymentMethod hover:bg-cardButtonPaymentMethod hover:border-3 hover:border-customPrimary focus:border-3 focus:bg-white focus:border-customPrimary rounded-md"></Button>
                  </div>
                </AccordionContent>
                <AccordionTrigger
                  onClick={handleClick}
                  className="h-7 bg-cardPayment pr-5 pb-5 rounded-b-xl border-x-[2.5px] border-b-[2.5px] border-x-stroke border-b-stroke"
                >
                  {isContentVisible ? (
                    <div className="w-full inline-flex space-x-2 items-center mx-5">
                      <Image src={Gopay} alt="Gopay" />
                      <Image src={Dana} alt="Dana" />
                      <Image src={Ovo} alt="Ovo" />
                      <Image src={ShopeePay} alt="ShopeePay" />
                      <Image src={LinkAja} alt="Link Aja" />
                    </div>
                  ) : null}
                  <div className="size-1 bg-transparent"></div>
                </AccordionTrigger>
              </AccordionItem>
            </Accordion>
            <VirtualAccount />
            <RetailOutlets />
          </div>
        </div>
      </div>
    </>
  );
}
