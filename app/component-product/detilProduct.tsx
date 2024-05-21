import GameIcon from "../component-home/assets/PowerUp - UI - DaftarGame/Rectangle 726.svg";
import Image from "next/image";

export default function DetailProduct() {
  return (
    <>
      <div>
        <div className="bg-customSecondary w-[435px] h-auto mt-11 rounded-xl ">
          <div className="mx-6 my-6 py-6">
            <div className="flex justify-between w-[390px]">
              <Image
                src={GameIcon}
                alt="Game Icon"
                className="size-[100px] flex"
              />
              <div className="items-center mt-4 ">
                <h3 className="text-white text-xl font-medium mb-2">
                  Mobile Legends: Bang Bang
                </h3>
                <p className="text-secondaryText text-xs font-extralight">
                  Multiplayer online battle arena, <br /> Action role-playing
                  game
                </p>
              </div>
            </div>
            <hr className="my-4 border-[0.1px] border-secondaryText"></hr>
            <div>
              <p className="text-white text-sm font-light text-justify">
                Top up MLBB/Mobile Legends: Bang Bang sekarang semakin mudah
                bersama PowerUp! Kamu bisa menggunakannya untuk membeli skin
                favorit kesukaanmu. Cukup masukkan ID, pilih nominal dan lakukan
                pembayaran. <br /> <br /> PowerUp juga menyediakan beragam
                pilihan metode pembayaran untuk top up MLBB yang memudahkan
                proses pembelian Diamonds MLBB. Kamu bisa dengan mudah
                menggunakan saldo DANA, OVO, ShopeePay, GoPay, LinkAja,
                Indomaret, Alfamart, dan pembayaran lainya untuk menyelesaikan
                proses transaksi. Top up Diamonds MLBB juga bisa dilakukan tanpa
                registrasi, kartu kredit dan tanpa harus login.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-customSecondary w-[435px] h-auto mt-8 rounded-xl ">
          <div className="mx-6 my-6">
            <h1 className="font-medium text-center text-white text-xl py-6">
              Cara Top Up
            </h1>
            <p className="font-normal text-white pb-6">
              1) Pilih Nominal <br /> 2) Masukkan Data Akun <br /> 3) Tentukan
              Jumlah Pembelian <br /> 4) Pilih Pembayaran <br /> 5) Isi Detail
              Kontak (Opsional) <br /> 6) Klik Pesan Sekarang dan lakukan
              Pembayaran <br /> 7) Selesai
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
