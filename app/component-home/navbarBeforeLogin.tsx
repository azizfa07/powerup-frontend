import Image from "next/image";
import Link from 'next/link';
import Logo from "./assets/Logomark.svg";
import { Button } from "@/components/ui/button";
import SearchBar from "./searchBar";
import "./style.css";

export default function Navbar() {
  return (
    <>
      <nav className="text-white text-xl md:max-w-screen-2xl h-24 flex flex-wrap items-center justify-between bg-customBackground border-[1px] border-customSecondary fixed top-0 left-0 right-0 z-50">
        <div className="container mx-28 flex justify-between">
          <div className="inline-flex items-center">
            <div className="justify-items-start inline-flex items-center gap-3">
              <Image src={Logo} alt="Logo PowerUp" />
              <h3 className="font-semibold text-lg">PowerUp</h3>
            </div>
            <div className="relative inline-flex mx-3 px-[36px] text-inactiveText font-semibold
            ">
              <ul>
                <li>
                  <a href="./">
                  <h1
                    className="hover:text-primaryTextHover focus:text-primaryTextActive font-normal text-base"
                    id="nav-link"
                  >
                    Home
                  </h1>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primaryTextHover focus:text-primaryTextActive font-normal text-base"
                    id="nav-link"
                  >
                    Transaksi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primaryTextHover focus:text-primaryTextActive font-normal text-base"
                    id="nav-link"
                  >
                    Event
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row place-items-end items-center gap-5">
            <SearchBar />
            <a href="./login">
            <Button
              variant="outline"
              className="bg-customPrimary hover:bg-primaryTextActive hover:opacity-80 active:bg-customPrimary border-none w-[110px] h-[44px] hover:text-white text-base font-medium"
            >
              Masuk
            </Button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
