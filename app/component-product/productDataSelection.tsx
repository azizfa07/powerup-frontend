import { Button } from "@/components/ui/button";
import GameIcon from "../component-home/assets/PowerUp - UI - DaftarGame/Rectangle 726.svg";
import Image from "next/image";

export default function ProductDataSelection() {
  return (
    <>
      <section className="bg-customSecondary w-[599px] h-auto pb-[3px] rounded-xl mt-8">
        <div className="bg-customPrimary rounded-full w-[50px] h-[50px] absolute -mt-3 ml-6 border-[6px] border-customSecondary">
          <h1 className="text-center text-white text-l absolute left-0 right-0 top-[6px] font-semibold">
            2
          </h1>
        </div>
        <h1 className="text-white text-lg relative top-2 left-[86px] font-medium">
          Pilih Item Top Up
        </h1>
        <div className="">
          <h1 className="text-white text-base relative mb-4 mt-9 mx-6  z-10 ">
            Pilih Kategori
          </h1>
          <div className="mx-6 grid grid-cols-3 gap-x-2">
            <Button className="w-[170px] h-[50px] bg-cardPayment border border-stroke rounded-md text-white text-sm font-medium hover:bg-primaryTextHover focus:bg-customPrimary active:bg-customPrimary inline-flex">
              <Image src={GameIcon} alt="Game Icon" className="size-8 mr-5" />
              <h1 className="my-auto">MLBB Paket A</h1>
            </Button>
            <Button className="w-[170px] h-[50px] bg-cardPayment border border-stroke rounded-md text-white text-sm font-medium hover:bg-primaryTextHover focus:bg-customPrimary active:bg-customPrimary inline-flex">
              <Image src={GameIcon} alt="Game Icon" className="size-8 mr-5" />
              <h1 className="my-auto">MLBB Paket A</h1>
            </Button>
            <Button className="w-[170px] h-[50px] bg-cardPayment border border-stroke rounded-md text-white text-sm font-medium hover:bg-primaryTextHover focus:bg-customPrimary active:bg-customPrimary inline-flex">
              <Image src={GameIcon} alt="Game Icon" className="size-8 mr-5" />
              <h1 className="my-auto">MLBB Paket A</h1>
            </Button>
          </div>
        </div>
        <div className="">
          <h1 className="text-white text-base my-4 mx-6">Pilih Item</h1>
          <div className="grid grid-cols-3 mx-6 gap-x-2 gap-y-4 mb-6">
            <Button className="bg-cardPayment w-[170px] h-[125px] hover:bg-cardPayment rounded-md border border-stroke hover:border hover:border-customPrimary focus:border focus:border-customPrimary">
              <h1></h1>
              <h1></h1>
              <h1></h1>
            </Button>
            <Button className="bg-cardPayment w-[170px] h-[125px] hover:bg-cardPayment rounded-md border border-stroke hover:border hover:border-customPrimary focus:border focus:border-customPrimary">
              <h1></h1>
              <h1></h1>
              <h1></h1>
            </Button>
            <Button className="bg-cardPayment w-[170px] h-[125px] hover:bg-cardPayment rounded-md border border-stroke hover:border hover:border-customPrimary focus:border focus:border-customPrimary">
              <h1></h1>
              <h1></h1>
              <h1></h1>
            </Button>
            <Button className="bg-cardPayment w-[170px] h-[125px] hover:bg-cardPayment rounded-md border border-stroke hover:border hover:border-customPrimary focus:border focus:border-customPrimary">
              <h1></h1>
              <h1></h1>
              <h1></h1>
            </Button>
            <Button className="bg-cardPayment w-[170px] h-[125px] hover:bg-cardPayment rounded-md border border-stroke hover:border hover:border-customPrimary focus:border focus:border-customPrimary">
              <h1></h1>
              <h1></h1>
              <h1></h1>
            </Button>
            <Button className="bg-cardPayment w-[170px] h-[125px] hover:bg-cardPayment rounded-md border border-stroke hover:border hover:border-customPrimary focus:border focus:border-customPrimary">
              <h1></h1>
              <h1></h1>
              <h1></h1>
            </Button>
            <Button className="bg-cardPayment w-[170px] h-[125px] hover:bg-cardPayment rounded-md border border-stroke hover:border hover:border-customPrimary focus:border focus:border-customPrimary">
              <h1></h1>
              <h1></h1>
              <h1></h1>
            </Button>
            <Button className="bg-cardPayment w-[170px] h-[125px] hover:bg-cardPayment rounded-md border border-stroke hover:border hover:border-customPrimary focus:border focus:border-customPrimary">
              <h1></h1>
              <h1></h1>
              <h1></h1>
            </Button>
            <Button className="bg-cardPayment w-[170px] h-[125px] hover:bg-cardPayment rounded-md border border-stroke hover:border hover:border-customPrimary focus:border focus:border-customPrimary">
              <h1></h1>
              <h1></h1>
              <h1></h1>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
