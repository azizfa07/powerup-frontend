import { Button } from "@/components/ui/button";
import "./../login/style.css";
import ToggleButtonPasswordInput from "./../login/component/PwInput"

export default function Daftarakun() {
  return (
    <>
      <div className="text-2xl font-bold text-white">
        <h1>Daftar Sekarang</h1>
      </div>

      <br />
      <div className=" text-white">
        <div className="pb-1">
          <label htmlFor="email">Email</label>
        </div>
        <input
          type="text"
          name="email"
          placeholder="Email Anda di sini"
          className="w-full p-3 ring-1 ring-white rounded-md bg-transparent focus:ring-[#386EDC] focus:outline-none"
        />
      </div>

      <br />
      <div>
        <div className="text-white w-full flex flex-row justify-between">
          <span className="pb-1">
            <label htmlFor="Nama">Nama</label>
          </span>
        </div>
        <input
          type="text"
          name="nama"
          placeholder="Nama Anda di sini"
          className="w-full p-3 ring-1 text-white ring-white rounded-md bg-transparent focus:ring-[#386EDC] focus:outline-none"
        />
      </div>

      <br />
      <div>
        <div className="text-white w-full flex flex-row justify-between">
          <span className="pb-1">Kata Sandi</span>
        </div>

      <ToggleButtonPasswordInput/>
      </div>

      <br />
      <div>
        <div className="text-white w-full flex flex-row justify-between">
          <span className="pb-1">
            <label htmlFor="kataSandi">Konfirmasi Kata Sandi</label>
          </span>
        </div>

      <ToggleButtonPasswordInput/>
      </div>

      <br />
      <Button
        variant="outline"
        className="bg-[#386EDC] w-full border-0 text-white rounded-md hover:bg-[#386EDC] hover:opacity-80 hover:text-white active:bg-[#C7C7C7] active:text-[69788F]"
      >
        Daftar
      </Button>

      <br />
      <div>
        <span className="text-center text-white">
          <p>
            Sudah punya akun?{" "}
            <a className="text-[#386EDC]" href="/login">
              Masuk
            </a>
          </p>
        </span>
      </div>
    </>
  );
}
