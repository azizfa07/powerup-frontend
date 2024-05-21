import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import ProductBanner from "./assets/Product Banner.svg";

const App: React.FC = () => (
  <div className="mx-36 -sm:mx-7 ">
  <Carousel className="pt-[96px] mt-11 -sm:w-64 -sm:pt-[70px]" autoplay draggable>
    <div>
      <Image src={ProductBanner} className="hover:border-none bg-cover" alt={"Product Banner"} />
    </div>
    <div>
      <Image src={ProductBanner} className="hover:border-none bg-cover" alt={"Product Banner"} />
    </div>
    <div>
      <Image src={ProductBanner} className="hover:border-none bg-cover" alt={"Product Banner"} />
    </div>
    <div>
      <Image src={ProductBanner} className="hover:border-none bg-cover" alt={"Product Banner"} />
    </div>
    <div>
      <Image src={ProductBanner} className="hover:border-none bg-cover" alt={"Product Banner"} />
    </div>
  </Carousel>
  </div>
);

export default App;
