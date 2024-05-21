import Navbar from "./component-home/navbarBeforeLogin";
import Banner from "./component-home/productBanner";
import PromoSection from "./component-home/promoSection";
import GameTerpopulerSection from "./component-home/gameTerpopulerSection";
import PilihKategori from "./component-home/pilihKategori";
import KategoriTopUpGame from "./component-home/kategoriTopUpGame";
import PowerUpStoreBenefits from "./component-home/powerUpStoreBenefits";
import FAQsSection from "./component-home/faqsSection";
import Footer from "./component-home/footer";
import "./globals.css";

export default function Home() {
  return (
    <>
      <body className="bg-customBackground">
        <header>
          <Navbar />
        </header>
        <section>
          <Banner />
          <hr className="my-10 border-[1px] w-[800px] flex items-center mx-auto border-customSecondary -sm:w-[255px] -sm:mx-7 -sm:my-5"></hr>
          <PromoSection />
          <hr className="my-10 border-[1px] w-[800px] flex items-center mx-auto border-customSecondary -sm:w-[255px] -sm:mx-7 -sm:my-5"></hr>
          <GameTerpopulerSection />
          <hr className="my-10 border-[1px] w-[800px] flex items-center mx-auto border-customSecondary -sm:w-[255px] -sm:mx-7 -sm:my-5"></hr>
          <PilihKategori />
          <KategoriTopUpGame />
          <hr className="my-10 border-[1px] w-[800px] flex items-center mx-auto border-customSecondary -sm:w-[255px] -sm:mx-7 -sm:my-5"></hr>
          <PowerUpStoreBenefits />
          <hr className="my-10 border-[1px] w-[800px] flex items-center mx-auto border-customSecondary -sm:w-[255px] -sm:mx-7 -sm:my-5"></hr>
          <FAQsSection />
        </section>
        <footer>
          <Footer />
        </footer>
      </body>
    </>
  );
}
