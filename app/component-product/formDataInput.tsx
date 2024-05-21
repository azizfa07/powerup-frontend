import GameIcon from "../component-home/assets/PowerUp - UI - DaftarGame/Rectangle 726.svg";
import ProductDataSelection from "./productDataSelection";
import PaymentMethod from "./payment-method/eWallet";
import EmailSection from "./emailSection";
import Image from "next/image";

export default function FormDataInput() {
  return (
    <>
      <div className="mt-11">
        <div className="bg-customSecondary w-[599px] h-[138px] rounded-xl">
          <div className="bg-customPrimary rounded-full w-[50px] h-[50px] absolute -mt-3 ml-6 border-[6px] border-customSecondary">
            <h1 className="text-center text-white text-l absolute left-0 right-0 top-[6px] font-semibold">
              1
            </h1>
          </div>
          <h1 className="text-white text-lg left-[86px] font-medium top-2 relative">
            Masukan Info Akun
          </h1>
          <div className="mt-[40px]  ml-6">
            <input
              type="text"
              name=""
              id=""
              placeholder="Masukkan User ID"
              className="w-[300px] h-[40px] outline text-white outline-stroke rounded-md bg-cardPayment pl-5 text-xs outline-1 focus:outline focus:outline-customPrimary mr-4"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Server ID"
              className="w-[146px] h-[40px] outline text-white outline-stroke rounded-md bg-cardPayment pl-5 text-xs outline-1 focus:outline focus:outline-customPrimary "
            />
          </div>
        </div>
        <ProductDataSelection />
        <PaymentMethod/>
        <EmailSection />
      </div>
    </>
  );
}
