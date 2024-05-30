import { useState } from "react";
import TransactionHistorySearch from "./transactionHistorySearch";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DefaultPage() {
  const [activeComponent, setActiveComponent] = useState('TransactionHistorySearch');
  return (
    <>
      <section className="mx-36 pt-[70px] mt-11 pb-[40px] ">
        <h1 className="text-white text-xl font-medium mb-3">
          Riwayat Transaksi
        </h1>
        <div className="flex items-center justify-center pt-[70px]">
          <div className="flex flex-col items-center">
            <h2 className="text-white text-xl font-medium">Belum Ada Transaksi</h2>
            <p className="text-bodyText text-sm mt-2 font-normal text-center">
              Riwayat transaksi kamu akan muncul di sini. Mulai top up game <br />
              favorit kamu sekarang.
            </p>
            <Link href="#">
              <Button className="mt-7 h-[40px] w-28 bg-customPrimary hover:bg-primaryTextActive hover:opacity-80">
                Periksa
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
