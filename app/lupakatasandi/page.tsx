import { Button } from "@/components/ui/button";
import "./../login/style.css";

export default function Lupakatasandi() {
  return (
    <>
  
            <div className="flex flex-col space-y-4">
              <div className="text-2xl font-bold text-white">
                <h1>Lupa Kata Sandi </h1>
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
                  className="w-full p-3 text-white ring-1 ring-white rounded-md bg-transparent focus:ring-[#386EDC] focus:outline-none"
                />
              </div>

              <br />
              <a href="/login/verifikasi">
                <Button
                  variant="outline"
                  className="bg-[#386EDC] w-full border-0 text-white rounded-md hover:bg-[#386EDC] hover:opacity-80 hover:text-white active:bg-[#C7C7C7] active:text-[69788F]"
                >
                  Kirim
                </Button>
              </a>
            </div>

    </>
  );
}
