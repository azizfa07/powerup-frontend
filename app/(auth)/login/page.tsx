import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "./assets/Google-logo.png";
import ToggleButtonPasswordInput from "./component/PwInput";
import "./style.css";

export default function Login() {
  return (
    <>
      <div className="text-2xl font-bold text-white">
        <h1>Masuk ke Akun Kamu </h1>
      </div>

      <br />
      <form action="">
        <div className=" text-white">
          <div className="pb-1">
            <label htmlFor="email">Email</label>
          </div>

          <input
            type="text"
            name="email"
            placeholder="Email Anda di sini"
            id="emailInput"
            className="w-full p-3 ring-1 ring-white rounded-md bg-transparent focus:ring-[#386EDC] focus:outline-none focus:shadow-md "
          />
        </div>

        <br />
        <div>
          <div className="text-white w-full flex flex-row justify-between pb-1">
            <span>
              <label htmlFor="kataSandi">Kata Sandi</label>
            </span>
            <span>
              <a className="text-[#386EDC]" href="./../lupakatasandi">
                Lupa Kata Sandi?
              </a>
            </span>
          </div>
          <div>
            <ToggleButtonPasswordInput />
          </div>
        </div>
      </form>

      <br />
      <a href="./">
        <Button
          variant="outline"
          className="bg-[#386EDC] w-full border-0 text-white rounded-md hover:bg-[#386EDC] hover:text-white hover:opacity-80  active:bg-[#C7C7C7] active:text-[#69788F]"
        >
          Masuk
        </Button>
      </a>

      <br />
      <div className="flex flex-row items-center justify-center">
        <div className=" w-1/2">
          <hr className="border-gray-400" />
        </div>
        <div className="text-center text-nowrap text-white px-3">
          <p>Atau lanjutkan dengan</p>
        </div>
        <div className="w-1/2">
          <hr className="border-gray-400" />
        </div>
      </div>

      <br />
      <div>
        <Button
          variant="outline"
          className=" bg-white text-white w-full rounded-md bg-transparent hover:bg-[#C7C7C7] items-center flex flex-row flex-nowrap"
        >
          <Image src={logo} alt="logo" className="size-5 mr-2" />
          <h1 className="font-thin text-xs">Masuk dengan Google</h1>
        </Button>
      </div>

      <br />
      <div>
        <span className="text-center text-white">
          <p className="font-light">
            Belum memiliki akun?{" "}
            <a className="text-[#386EDC] pl-1" href="./../register">
              Daftar Sekarang
            </a>
          </p>
        </span>
      </div>
    </>
  );
}
