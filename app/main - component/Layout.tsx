import Image from "next/image";
import Logo from "./assets/Logomark.svg";
import { Button } from "@/components/ui/button";
import SearchBar from "../component-home/searchBar";
import "../component-home/style.css";

export default function Template({ children }: { children: React.ReactNode }) {
  return<><div>
      <nav className="text-white text-xl w-full h-24 flex flex-row bg-customBackground border-[1px] border-customSecondary fixed top-0 left-0 right-0 z-50">
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
                  <a
                    href="#"
                    className="hover:text-primaryTextHover focus:text-primaryTextActive font-normal text-base"
                    id="nav-link"
                  >
                    Home
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
              className="bg-customPrimary hover:bg-customPrimaryHover active:bg-[#335EB6] border-none w-[110px] h-[44px] hover:text-white text-base font-medium"
            >
              Masuk
            </Button>
            </a>
          </div>
        </div>
      </nav>
    {children}
    </div></> 
}