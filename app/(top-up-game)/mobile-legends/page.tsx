import Banner from "../../component-home/assets/Product Banner.svg";
import Navbar from "../../component-home/navbarBeforeLogin";
import DetilProduct from "../../component-product/detilProduct";
import FormDataInput from "../../component-product/formDataInput";
import ProductDataSelection from "../../component-product/productDataSelection";
import CheckOutSection from "../../component-product/checkOutSection";
import Footer from "../../component-home/footer";
import GameIcon from "../../component-home/assets/PowerUp - UI - DaftarGame/Rectangle 726.svg";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/router';
import Image from "next/image";

export default function TopUpGame() {
  return (
    <>
      <Navbar />
      <CheckOutSection />
      <div className="mx-36">
        <Image src={Banner} alt="Game Banner" className="pt-[70px] mt-11" />
        <div className=" flex justify-between">
          <DetilProduct />
          {/* komponen product data selection, payment method, email section dipanggil di file FormDataInput */}
          <FormDataInput /> 
        </div>
      </div>
      <div className="pb-[86px]">
      <Footer />
      </div>
    </>
  );
}
