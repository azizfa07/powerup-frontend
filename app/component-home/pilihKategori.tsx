import { Button } from "@/components/ui/button";

export default function PilihKategori() {
  return (
    <>
      <div className="mx-36 text-white pb-[50px]">
        <div>
          <h3 className="text-2xl font-bold pb-3">Pilih kategori</h3>
          <p className="text-sm">
            Berbagai Macam pilihan top up yang lengkap!
          </p>{" "}
          <br />
        </div>
        <div className="flex flex-row gap-x-4 bg-transparent">
          <Button
            variant="outline"
            className="px-[24px] py-[20px] font-medium text-inactiveText border-inactiveText bg-transparent rounded-full hover:bg-customPrimary hover:text-white hover:border-customPrimary"
          >
            Top Up Game
          </Button>
          <Button
            variant="outline"
            className="px-[24px] py-[20px] font-medium text-inactiveText border-inactiveText bg-transparent rounded-full hover:bg-customPrimary hover:text-white hover:border-customPrimary"
          >
            Voucher
          </Button>
          <Button
            variant="outline"
            className="px-[24px] py-[20px] font-medium text-inactiveText border-inactiveText bg-transparent rounded-full hover:bg-customPrimary hover:text-white hover:border-customPrimary"
          >
            Pulsa
          </Button>
          <Button
            variant="outline"
            className="px-[24px] py-[20px] font-medium text-inactiveText border-inactiveText bg-transparent rounded-full hover:bg-customPrimary hover:text-white hover:border-customPrimary"
          >
            Hiburan
          </Button>
        </div>
      </div>
    </>
  );
}
