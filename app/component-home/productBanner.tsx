import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import ProductBanner from "./assets/Product Banner.svg";

const App: React.FC = () => (
  <div className="mx-36 -sm:mx-8 -md:mx-14 -lg:mx-16 -xl:mx-20 ">
  <Carousel className="pt-[70px] mt-11 -xl:mt-9 -lg:mt-7 -md:mt-5 -sm:mt-3 -sm:w-[300px] -md:w-[500px] -lg:w-[550px] -xl:w-[600px]" autoplay draggable>
    <div>
      <Image src={ProductBanner} className="hover:border-none bg-cover -sm:w-[300px] -md:w-[500px] -lg:w-[550px] -xl:w-[600px]" alt={"Product Banner"} />
    </div>
    <div>
      <Image src={ProductBanner} className="hover:border-none bg-cover -sm:w-[300px] -md:w-[500px] -lg:w-[550px] -xl:w-[600px]" alt={"Product Banner"} />
    </div>
    <div>
      <Image src={ProductBanner} className="hover:border-none bg-cover -sm:w-[300px] -md:w-[500px] -lg:w-[550px] -xl:w-[600px]" alt={"Product Banner"} />
    </div>
    <div>
      <Image src={ProductBanner} className="hover:border-none bg-cover -sm:w-[300px] -md:w-[500px] -lg:w-[550px] -xl:w-[600px]" alt={"Product Banner"} />
    </div>
    <div>
      <Image src={ProductBanner} className="hover:border-none bg-cover -sm:w-[300px] -md:w-[500px] -lg:w-[550px] -xl:w-[600px]" alt={"Product Banner"} />
    </div>
  </Carousel>
  </div>
);

export default App;
