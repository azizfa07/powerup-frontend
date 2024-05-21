import Image from "next/image";
import GameControllerIcon from "./assets/PowerUp - UI - KeuntunganTopUp/icon_game-controller-outline.svg";
import PointerIcon from "./assets/PowerUp - UI - KeuntunganTopUp/akar-icons_pointer-hand.svg";
import CoinIcon from "./assets/PowerUp - UI - KeuntunganTopUp/iconoir_coin.svg";
import ClockIcon from "./assets/PowerUp - UI - KeuntunganTopUp/tabler_clock-bolt.svg";
import WalletIcon from "./assets/PowerUp - UI - KeuntunganTopUp/icon_wallet-outline.svg";
import HeadsetIcon from "./assets/PowerUp - UI - KeuntunganTopUp/iconoir_headset-help.svg";
import "./style.css";

export default function PowerUpStoreBenefits() {
  return (
    <>
      <div className="mx-36">
        <div className="mb-5">
          <h3 className="text-white font-bold text-3xl mb-3">
            PowerUp Store⚡
          </h3>
          <p className="text-bodyText font-normal text-[15px]" id="spacing">
            Apa keuntungan yang didapatkan customer saat melakukan top up dan
            pembelian melalui website PowerUp?.
          </p>
        </div>
        <div className="flex flex-start flex-wrap gap-[26px]">
          <div className="bg-customSecondary w-[517px] h-[100px] rounded-lg flex justify-between items-center">
            <Image src={GameControllerIcon} alt="" className="mx-5" />
            <div>
            <h3 className="text-white font-medium text-lg" id="spacing">Pilihan Game</h3>
            <p className="text-bodyText text-[13px] font-light mr-5" id="spacing">
              Kami menyediakan top up untuk berbagai macam pilihan game.
              Pilihlah game sesuai keiinginanmu!
            </p>
            </div>
          </div>
          <div className="bg-customSecondary w-[517px] h-[100px] rounded-lg flex justify-between items-center">
            <Image src={ClockIcon} alt="" className="mx-5" />
            <div>
            <h3 className="text-white font-medium text-lg" id="spacing">Pengiriman Cepat</h3>
            <p className="text-bodyText text-[13px] font-light mr-5" id="spacing">
            Pengalaman top up yang cepat dan efisien dengan layanan pengiriman instan dari website kami!
            </p>
            </div>
          </div>
          <div className="bg-customSecondary w-[517px] h-[100px] rounded-lg flex justify-between items-center">
            <Image src={PointerIcon} alt="" className="mx-5" />
            <div>
            <h3 className="text-white font-medium text-lg" id="spacing">Variasi Nominal</h3>
            <p className="text-bodyText text-[13px] font-light mr-5" id="spacing">
            Tersedia berbagai variasi nominal untuk berbagai macam pilihan top up game. Pilih sesuai keinginan!
            </p>
            </div>
          </div>
          <div className="bg-customSecondary w-[517px] h-[100px] rounded-lg flex justify-between items-center">
            <Image src={WalletIcon} alt="" className="mx-5" />
            <div>
            <h3 className="text-white font-medium text-lg" id="spacing">Metode Pembayaran</h3>
            <p className="text-bodyText text-[13px] font-light mr-5" id="spacing">
            Kami menawarkan berbagai pilihan metode pembayaran seperti QRIS, eWallet, Pulsa dan Transfer Bank.
            </p>
            </div>
          </div>
          <div className="bg-customSecondary w-[517px] h-[100px] rounded-lg flex justify-between items-center">
            <Image src={CoinIcon} alt="" className="mx-5" />
            <div>
            <h3 className="text-white font-medium text-lg" id="spacing">Harga Terjangkau</h3>
            <p className="text-bodyText text-[13px] font-light mr-5" id="spacing">
            Nikmati kemudahan dan juga kenyamanan, top up dengan harga yang sangat terjangkau.
            </p>
            </div>
          </div>
          <div className="bg-customSecondary w-[517px] h-[100px] rounded-lg flex justify-between items-center">
            <Image src={HeadsetIcon} alt="" className="mx-5" />
            <div>
            <h3 className="text-white font-medium text-lg" id="spacing">Layanan Pelanggan</h3>
            <p className="text-bodyText text-[13px] font-light mr-5" id="spacing">
            Jika Anda memiliki kendala, tim support kami siap membantu Anda dengan tanggapan secepatnya.
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
