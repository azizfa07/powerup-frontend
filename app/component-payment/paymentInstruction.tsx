import GameIcon from "../component-home/assets/PowerUp - UI - DaftarGame/Rectangle 726.svg";
import Image from "next/image";

export default function PaymentCard() {
  return (
    <>
      <div>
        <div className="bg-cardPayment w-[600px] h-auto pb-1 mt-11 rounded-xl">
          <div className="mx-6 my-6 py-6">
            <div className="flex justify-between">
              <div>
                <div className="inline-flex ">
                  <Image
                    src={GameIcon}
                    alt="Game Icon"
                    className="size-[80px] rounded-xl flex"
                  />
                  <div className="text-white ml-4">
                    <p className="text-base font-medium tracking-wide pb-1">
                      240 Diamond
                    </p>
                    <p className="text-xs font-extralight pb-3">
                      312 + 32 Bonus
                    </p>
                    <p className="text-xs font-extralight">Mobile Legends</p>
                  </div>
                </div>
              </div>
              <div className="text-white">
                <h1 className="mb-2 text-base font-medium ">
                  Total Pembayaran
                </h1>
                <h1 className="text-right">Rp. 62.000</h1>
              </div>
            </div>
            <hr className="mt-4 border-[1px] w-full flex items-center mx-auto border-stroke"></hr>
            <div className="flex items-center mt-7">
              <div className="bg-customPrimary rounded-full w-[35px] h-[35px] mt-1 mr-3">
                <h1 className="text-center text-white text-lg font-semibold pt-1">
                  1
                </h1>
              </div>
              <div>
                <div className="flex relative justify-between mt-6 ">
                  <h1 className="text-white">Menunggu Pembayaran</h1>
                  <div className="ml-[225px]">
                    <p className="text-bodyText text-xs">Kadaluarsa dalam</p>
                    <p className="text-bodyText text-sm text-right">
                      1 jam 40 menit
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-12">
              <div className="inline-flex  mt-5">
                <div className="w-[320px] h-[100px]  bg-customBackground rounded-xl"></div>
                <div className=" ml-3 text-white pt-5">
                  <h1 className="text-sm mb-2">Mandiri Virtual Account</h1>
                  <p className="text-xs">
                    Lakukan pembayaran dengan tranfer ke nomor Virtual Account
                    dibawah
                  </p>
                </div>
              </div>
              <hr className="mt-3 mb-1 border-[1px] w-full flex items-center mx-auto border-stroke"></hr>
              <h1 className="text-white">XXXX-XXXX-XXXX</h1>
              <hr className="mt-1 mb-6 border-[1px] w-full flex items-center mx-auto border-stroke"></hr>
              <div className="text-sm text-bodyText">
                <h1>Lihat cara bayar</h1> <br />
                <div className="">
                  <h1>Dari Mobile Banking</h1>
                  <p>1. Salin nomor virtual akun</p>
                  <p>2. Login ke aplikasi livin' mandiri</p>
                  <p>3. Klik bayar</p>
                  <p>4. Cari penyedia jasa 70017 atau I-PAY</p>
                  <p>
                    5. Paste/tempel nomor virtual akun tadi dan masukan nominal
                    bayar yang sesuai
                  </p>
                  <p>6. Lanjutkan</p>
                </div>
                <div className="mt-6">
                  <h1>Dari ATM</h1>
                  <p>1. Salin nomor virtual akun</p>
                  <p>2. Login ke aplikasi livin' mandiri</p>
                  <p>3. Klik bayar</p>
                  <p>4. Cari penyedia jasa 70017 atau I-PAY</p>
                  <p>
                    5. Paste/tempel nomor virtual akun tadi dan masukan nominal
                    bayar yang sesuai
                  </p>
                  <p>6. Lanjutkan</p>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-7">
              <div className="bg-inactiveText rounded-full w-[35px] h-[35px] mt-1 mr-3">
                <h1 className="text-center text-white text-lg font-semibold pt-1">
                  2
                </h1>
              </div>
              <div>
                <div className="flex mt-2">
                  <h1 className="text-white">Pesanan diproses</h1>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-7">
              <div className="bg-inactiveText rounded-full w-[35px] h-[35px] mt-1 mr-3">
                <h1 className="text-center text-white text-lg font-semibold pt-1">
                  3
                </h1>
              </div>
              <div>
                <div className="flex mt-2">
                  <h1 className="text-white">Selesai</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
