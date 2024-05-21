import Image from "next/image";
import Logo from "./assets/Logomark.svg";
import WhatsappIcon from "./assets/PowerUp - UI - Footer/u_whatsapp.svg";
import InstagramIcon from "./assets/PowerUp - UI - Footer/fi_instagram.svg";
import FacebookIcon from "./assets/PowerUp - UI - Footer/fi_facebook.svg";
import ScrollToTop from "./scrollToTop";

export default function Footer() {
  return (
    <>
      <div className="mx-36 mt-[88px] relative">
        <ScrollToTop />
        <div className="size-10 ">
          <div className="inline-flex items-center gap-x-3 mb-5">
            <Image src={Logo} alt="PowerUp Logo" />
            <h3 className="text-white text-lg font-semibold">PowerUp</h3>
          </div>
          <p className="w-[420px] text-base text-bodyText font-medium" id="spacing">
            Top up lebih mudah dan tanpa hambatan dengan melakukan top up di
            PowerUp!
          </p>
        </div>
        <div className="w-[1000px] mt-[140px] grid grid-cols-3">
          <div className="">
            <h3 className="text-inactiveText text-sm  font-medium mb-1">
              LOKASI
            </h3>
            <p className="text-bodyText  font-medium">Semarang, Jawa Tengah, Indonesia</p>
          </div>
          <div className="">
            <h3 className="text-inactiveText text-sm  font-medium mb-1">
              EMAIL
            </h3>
            <p className="text-bodyText  font-medium">powerupstore@gmail.com</p>
          </div>
          <div className="">
            <h3 className="text-inactiveText text-sm  font-medium mb-1">
              DUKUNGAN
            </h3>
            <a href="#" className="text-bodyText  font-medium underline">
              Pusat Bantuan
            </a>
          </div>
          <div className="mt-[60px]">
            <h3 className="text-inactiveText text-sm  font-medium mb-1">
              JAM OPERASIONAL
            </h3>
            <p className="text-bodyText  font-medium">07:00 WIB - 22:00 WIB</p>
          </div>
          <div className="mt-[60px]">
            <h3 className="text-inactiveText text-sm  font-medium mb-1">
              HUBUNGI KAMI
            </h3>
            <p className="text-bodyText  font-medium">+62 838 7390 6995</p>
          </div>
        </div>
        <div className="mt-[70px]">
          <hr className="border-[1px] mb-[32px] w-full flex items-center mx-auto border-customSecondary"></hr>
          <div className="flex flex-row mb-[32px]">
            <p className="font-medium text-xs text-inactiveText content-center">
              © 2024 PowerUp — All rights reserved.
            </p>
            <div className="ml-auto flex flex-row gap-x-6">
              <button className="bg-customBackground p-2 rounded-full hover:bg-customPrimary transition duration-0 hover:duration-200">
                <Image src={WhatsappIcon} alt="Whatsapp Icon" className=""/>
              </button>
              <button className="bg-customBackground p-2 rounded-full hover:bg-customPrimary transition duration-0 hover:duration-200">
                <Image src={InstagramIcon} alt="Instagram icon" className=""/>
              </button>
              <button className="bg-customBackground p-2 rounded-full hover:bg-customPrimary transition duration-0 hover:duration-200">
                <Image src={FacebookIcon} alt="Facebook Icon" className=""/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
