export default function () {
  return (
    <>
      <div className="text-white mr-0">
        <div className="w-[435px] h-12 mt-11 bg-customSecondary rounded-t-xl">
          <h1 className="ml-6 pt-3">Detail Transaksi</h1>
        </div>
        <div className="w-auto h-auto bg-cardPayment rounded-b-xl">
          <div className="flex justify-between mx-6 mb-[7px] text-sm font-thin pt-6">
            <p>ID Transaksi</p>
            <p>xxx-xxx-xxx</p>
          </div>
          <div className="flex justify-between mx-6 mb-[7px] text-sm font-thin">
            <p>User ID</p>
            <p>123456789</p>
          </div>
          <div className="flex justify-between mx-6 mb-[7px] text-sm font-thin">
            <p>Server</p>
            <p>1234</p>
          </div>
          <div className="flex justify-between mx-6 mb-[7px] text-sm font-thin">
            <p>Metode Pembayaran</p>
            <p>QRIS (All Payments)</p>
          </div>
          <div className="flex justify-between mx-6 mb-[7px] text-sm font-thin">
            <p>Total Tagihan</p>
            <p>Rp XX.XXX</p>
          </div>
          <div className="flex justify-between mx-6 mb-[7px] text-sm font-thin">
            <p>Status</p>
            <p>Pending</p>
          </div>
          <div className="flex justify-between mx-6 mb-[7px] text-sm font-thin pb-6">
            <p>Waktu Transaksi</p>
            <p>29 Apr 2024 12:53</p>
          </div>
        </div> 
      </div>
    </>
  );
}
