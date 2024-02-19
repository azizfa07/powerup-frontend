"use client"

import React from "react";
import { useState } from "react";
import Image from "next/image";
import showPassword from "../assets/Show.png";
import hidePassword from "../assets/Hide.png";

export default function PasswordInput() {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex justify-between items-center relative">
      <input
        value={password}
        type={visible ? "text" : "password"}
        placeholder="Kata sandi Anda di sini"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 pr-10 text-white ring-1 ring-white rounded-md bg-transparent focus:ring-[#386EDC] focus:outline-none"
      />

      <div className="absolute end-0 mr-2" onClick={() => setVisible(!visible)}>
        {visible ? (
          <Image src={showPassword} alt="hidePassword" className="" />
        ) : (
          <Image src={hidePassword} alt="showPassword" className="" />
        )}
      </div>
    </div>
  );
}
