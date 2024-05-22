import { Button } from "@/components/ui/button";

export default function CheckOutSection() {
  return (
    <>
      <nav className="w-full h-[86px] fixed bg-cardPayment bottom-0 z-50">
        <div className="mx-36">
          <div className="flex justify-between items-center w-[580px] h-[86px] ml-auto">
            <div className="text-white">
              <strong>Rp 0</strong>
              <span className="block">
                0 Diamonds (0 + 0 Bonus),<span>Qris</span>
              </span>
            </div>
            <a href="../mobile-legends/pembayaran">
            <Button className="w-[180px] h-[47px] bg-customPrimary hover:bg-primaryTextActive hover:opacity-80 text-base font-semibold">
              Beli Sekarang
            </Button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
