

import { Button } from "@/components/ui/button";
import "./../login/style.css";
import ToggleButtonPasswordInput from "./../login/component/PwInput"

export default function Ubahkatasandi() {
  return (
    <>
      <div className="flex flex-col space-y-1">
        <div className="text-2xl font-bold text-white">
          <h1>Ubah Kata Sandi</h1>
        </div>

        <br />
        <div>
          <div className="text-white w-full flex flex-row justify-between">
            <span className="pb-1">
              <label htmlFor="kataSandi">Kata Sandi Baru</label>
            </span>
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
          Ganti Kata Sandi
        </Button>
      </div>
    </>
  );
}
