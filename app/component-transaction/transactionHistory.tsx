import { Button } from "@/components/ui/button";

export default function TransactionHistory() {
  return (
    <>
      <section className="mx-36 pt-[70px] mt-11">
        <div className="flex justify-between mb-8">
          <h1 className="text-white text-xl font-medium mb-3">
            Riwayat Transaksi
          </h1>
          <Button className="h-[35px] w-28 bg-customPrimary hover:bg-primaryTextActive hover:opacity-80 text-xs">
            Ubah Email
          </Button>
        </div>
        <div className="flex justify-between">
          <div className="bg-cardPayment w-[520px] h-40 rounded-lg p-5">
            <div className="flex justify-between mb-2">
              <h3 className="text-bodyText text-xs font-light">16 Mei 2024</h3>
              <h3 className="text-sucessText text-sm font-semibold">
                Berhasil
              </h3>
            </div>
            <div className="inline-flex">
              <div className="bg-customBackground size-16 rounded-lg"></div>
              <div className="ml-3 my-3">
                <h4 className="text-bodyText text-xs font-sm">Mobile Legends</h4>
                <div className="flex items-end">
                  <p className="text-white">240 Diamonds</p>
                  <p className="ml-2 text- text-xs text-tertiary">312 + Bonus</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <h4 className="text-secondaryText text-sm">#XXXXXXXXX</h4>
              <h4 className="text-white">Rp. 62.000</h4>
            </div>
          </div>
          <div className="bg-cardPayment w-[520px] h-40 rounded-lg p-5">
            <div className="flex justify-between mb-2">
              <h3 className="text-bodyText text-xs font-light">16 Mei 2024</h3>
              <h3 className="text-sucessText text-sm font-semibold">
                Berhasil
              </h3>
            </div>
            <div className="inline-flex">
              <div className="bg-customBackground size-16 rounded-lg"></div>
              <div className="ml-3 my-3">
                <h4 className="text-bodyText text-xs font-sm">Mobile Legends</h4>
                <div className="flex items-end">
                  <p className="text-white">240 Diamonds</p>
                  <p className="ml-2 text- text-xs text-tertiary">312 + Bonus</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <h4 className="text-secondaryText text-sm">#XXXXXXXXX</h4>
              <h4 className="text-white">Rp. 62.000</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
