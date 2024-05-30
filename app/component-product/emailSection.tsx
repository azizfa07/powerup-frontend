export default function EmailSection() {
  return (
    <>
      <section className="mt-8">
        <div className="bg-customSecondary w-[599px] h-auto pb-2 rounded-xl">
          <div className="bg-customPrimary rounded-full w-[50px] h-[50px] absolute -mt-3 ml-6 border-[6px] border-customSecondary">
            <h1 className="text-center text-white text-l absolute left-0 right-0 top-[6px] font-semibold">
              4
            </h1>
          </div>
          <h1 className="text-white text-lg left-[86px] font-medium top-2 relative">
            Masukkan Info Akun <span className="text-sm">(Opsional)</span>
          </h1>
          <div className="mt-[25px] mx-5 ml-6">
            <h1 className="text-white text-xs font-extralight mb-2 mt-2">Email</h1>
            <input
              type="text"
              name=""
              id=""
              placeholder="Masukkan email"
              className="h-[40px] outline text-white outline-stroke rounded-md bg-cardPayment pl-5 text-xs outline-1 focus:outline focus:outline-customPrimary w-full"
            />
            <h1 className="text-white text-xs font-extralight mb-2 mt-2">Kamu bisa isi jika mau terima bukti transaksi</h1>
          </div>
        </div>
      </section>
    </>
  );
}
