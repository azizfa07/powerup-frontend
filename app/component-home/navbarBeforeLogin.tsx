'use client'

import Image from "next/image";
import Link from "next/link";
import Logo from "./assets/Logomark.svg";
import { Button } from "@/components/ui/button";
import SearchBar from "./searchBar";
import { usePathname } from 'next/navigation'
import "./style.css";

export default function Navbar() {
  const pathname = usePathname()
  return (
    <>
      <nav className="text-white text-xl h-20 flex flex-wrap items-center justify-between bg-customBackground border-b-[1px] border-customSecondary fixed top-0 left-0 right-0 z-50">
        <div className="container mx-28 flex justify-between -sm:mx-1 -md:mx-6 -lg:mx-8 -xl:mx-12">
          <div className="inline-flex items-center">
            <div className="justify-items-start inline-flex items-center gap-3">
              <Image src={Logo} alt="Logo PowerUp" />
              <h3 className="font-semibold text-lg -sm:text-sm">PowerUp</h3>
            </div>
            <div
              className="relative inline-flex mx-3 px-[36px]  text-inactiveText font-semibold
            "
            >
              <ul>
                <li>
                  <Link
                    href="./"
                    className="hover:text-primaryTextHover focus:text-primaryTextActive font-normal text-base"
                    id="nav-link"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="./transaksi"
                    className="hover:text-primaryTextHover focus:text-primaryTextActive font-normal text-base"
                    id="nav-link"
                  >
                    Transaksi
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primaryTextHover focus:text-primaryTextActive font-normal text-base"
                    id="nav-link"
                  >
                    Event
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row place-items-end items-center gap-5">
            <SearchBar />
            <Link href="./login">
              <Button
                variant="outline"
                className="bg-customPrimary hover:bg-primaryTextActive hover:opacity-80 active:bg-customPrimary border-none rounded-sm w-[100px] h-[40px] hover:text-white text-sm font-medium"
              >
                Masuk
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
