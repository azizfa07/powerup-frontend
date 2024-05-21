import Image from "next/image";
import Logo from "./assets/Logomark.svg";
import Profile from "./assets/Profile.svg";
import SearchBar from "./searchBar";
import "./style.css";

export default function Navbar() {
  return (
    <nav className="text-white w-full h-28 flex flex-row border-b-[1px] border-customSecondary">
      <div className="container mx-28 flex justify-between">
        <div className="inline-flex items-center">
          <div className="justify-items-start inline-flex items-center gap-3">
            <Image src={Logo} alt="Logo PowerUp" />
            <h3 className="font-bold text-xl">PowerUp</h3>
          </div>
          <div className="inline-flex mx-5 items-start gap-x-10 px-[36px] text-inactiveText">
            <a
              href="#"
              className="font-bold hover:text-primaryTextHover focus:text-primaryTextActive"
              id="nav-link"
            >
              Home
            </a>
            <a
              href="#"
              className="font-bold hover:text-primaryTextHover focus:text-primaryTextActive"
              id="nav-link"
            >
              Transaksi
            </a>
            <a
              href="#"
              className="font-bold hover:text-primaryTextHover focus:text-primaryTextActive"
              id="nav-link"
            >
              Event
            </a>
          </div>
        </div>
        <div className="flex flex-row place-items-end items-center gap-5">
        <SearchBar />
          <a href="#">
            <button className="hover:bg-customSecondary rounded-full p-2">
              <Image src={Profile} alt="Profile" />
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
