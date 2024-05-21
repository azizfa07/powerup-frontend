import { Button } from "@/components/ui/button";
import "./../login/style.css";

export default function Verifikasi() {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <div className="text-2xl font-bold text-white">
          <h1>Lupa Kata Sandi </h1>
        </div>

        <br />
        <div className="bg-[#198754] text-white w-full p-3 text-center rounded-md">
          <p>
            Tautan reset kata sandi telah dikirim ke Email Anda. Silahkan
            periksa kotak masuk Email.
          </p>
        </div>
      </div>
    </>
  );
}
