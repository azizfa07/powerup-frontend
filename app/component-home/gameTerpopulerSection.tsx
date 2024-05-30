import Image from "next/image";
import CallOfDuty from "./assets/PowerUp - UI - GamePopuler/Rectangle 732.svg";
import FreeFire from "./assets/PowerUp - UI - GamePopuler/Rectangle 745.svg";
import MobileLegends from "./assets/PowerUp - UI - GamePopuler/Rectangle 746.svg";
import PUBGM from "./assets/PowerUp - UI - GamePopuler/Rectangle 748.svg";
import LeagueOfLegends from "./assets/PowerUp - UI - GamePopuler/Rectangle 749.svg";
import ClashOfClans from "./assets/PowerUp - UI - GamePopuler/Rectangle 750.svg";

export default function GameTerpopulerSection() {
  return (
    <>
      <div className="mx-36">
        <h3 className="text-white text-2xl font-bold pb-3">
          Tersedia Pilihan Game Terpopuler! 🔥
        </h3>
        <p className="mt-2 pb-6 text-sm font-normal text-bodyText pr-72">
          Kami menyediakan daftar game-game yang sedang tren dan paling banyak
          diminati oleh para gamer. <br /> Temukan berbagai judul game yang
          menghibur, penuh tantangan, dan memberikan pengalaman bermain yang
          seru.
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-[11px]">
          <a href="../mobile-legends">
            <div className="w-[340px] h-[180px] relative">
              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[47px] text-white font-bold tracking-wide text-md">
                Mobile Legends
              </h1>
              <Image
                src={MobileLegends}
                alt="Mobile Legends"
                className="outline hover:outline-[3px] hover:outline-customPrimary hover:rounded-[18px]"
              />
            </div>
          </a>
          <a>
            <div className="w-[340px] h-[180px] relative">
              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[47px] text-white font-bold tracking-wide text-md">
                Free Fire
              </h1>
              <Image
                src={FreeFire}
                alt="Free Fire"
                className="outline hover:outline-[3px] hover:outline-customPrimary hover:rounded-[18px]"
              />
            </div>
          </a>
          <a>
            <div className="w-[340px] h-[180px] relative">
              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[47px] text-white font-bold tracking-wide text-md">
                PUBGM
              </h1>
              <Image
                src={PUBGM}
                alt="PUBGM"
                className="outline hover:outline-[3px] hover:outline-customPrimary hover:rounded-[18px]"
              />
            </div>
          </a>
          <a>
            <div className="w-[340px] h-[180px] relative">
              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[47px] text-white font-bold tracking-wide text-md">
                Call Of Duty
              </h1>
              <Image
                src={CallOfDuty}
                alt="Call Of Duty"
                className="outline hover:outline-[3px] hover:outline-customPrimary hover:rounded-[18px]"
              />
            </div>
          </a>
          <a>
            <div className="w-[340px] h-[180px] relative">
              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[47px] text-white font-bold tracking-wide text-md text-nowrap">
                League Of Legends
              </h1>
              <Image
                src={LeagueOfLegends}
                alt="League Of Legends"
                className="outline hover:outline-[3px] hover:outline-customPrimary hover:rounded-[18px]"
              />
            </div>
          </a>
          <a>
            <div className="w-[340px] h-[180px] relative">
              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[47px] text-white font-bold tracking-wide text-md">
                Clash Of Clans
              </h1>
              <Image
                src={ClashOfClans}
                alt="Clash Of Clans"
                className="outline hover:outline-[3px] hover:outline-customPrimary hover:rounded-[18px]"
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
