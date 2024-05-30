import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TransactionHistorySearch() {
  return (
    <>
      <section className="mx-36 pt-[70px] mt-11 pb-[70px] ">
        <h1 className="text-white text-xl font-semibold mb-3">
          Cek Riwayat Transaksi
        </h1>
        <p className="text-bodyText text-sm font-light mb-9">
          Masukkan email anda dan klik periksa untuk melihat riwayat pesanan.
        </p>
        <div className="inline-flex">
          <input
            type="text"
            name=""
            id=""
            placeholder="Masukkan email"
            className="h-[40px] outline text-white outline-stroke rounded-md bg-cardPayment pl-5 text-xs outline-1 focus:outline focus:outline-customPrimary w-[500px]"
          />
          <Link href="#">
            <Button className="ml-2 h-[40px] w-28 bg-customPrimary hover:bg-primaryTextActive hover:opacity-80">
              Periksa
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
