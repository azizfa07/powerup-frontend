import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQsSection() {
  return (
    <>
      <div className="mx-36 flex justify-between">
        <div className="w-[800px] text-wrap mr-3">
          <h3 className="text-white font-semibold text-3xl mb-3">FAQs</h3>
          <p className="text-bodyText font-light text-sm" id="spacing">
            Jika pertanyaan Anda tidak terjawab di sini, jangan ragu untuk
            menghubungi tim dukungan pelanggan kami untuk bantuan lebih lanjut,
            Kami pasti melayani anda
          </p>
        </div>
        <div className="w-full">
          <Accordion type="single" defaultValue="item-1">
            <AccordionItem value="item-1" className=" border-t border-customSecondary">
              <AccordionTrigger className="text-white text-xl font-normal">
              Apa itu PowerUp?
              </AccordionTrigger>
              <AccordionContent className="text-bodyText font-light text-sm" id="spacing">
                PowerUp adalah platform top up yang menyediakan layanan
                pengisian saldo cepat dan aman untuk berbagai kebutuhan,
                termasuk pulsa, data internet, dan layanan lainnya.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-white text-xl font-normal">
              Bagaimana Cara Menggunakan PowerUp?
              </AccordionTrigger>
              <AccordionContent className="text-bodyText font-light text-sm" id="spacing">
                PowerUp adalah platform top up yang menyediakan layanan
                pengisian saldo cepat dan aman untuk berbagai kebutuhan,
                termasuk pulsa, data internet, dan layanan lainnya.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-white text-xl font-normal">
              Berapa lama waktu  untuk top up diproses?
              </AccordionTrigger>
              <AccordionContent className="text-bodyText font-light text-sm" id="spacing">
                PowerUp adalah platform top up yang menyediakan layanan
                pengisian saldo cepat dan aman untuk berbagai kebutuhan,
                termasuk pulsa, data internet, dan layanan lainnya.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-white text-xl font-normal">
              Apakah PowerUp Menjamin Keamanan Transaksi?
              </AccordionTrigger>
              <AccordionContent className="text-bodyText font-light text-sm" id="spacing">
                PowerUp adalah platform top up yang menyediakan layanan
                pengisian saldo cepat dan aman untuk berbagai kebutuhan,
                termasuk pulsa, data internet, dan layanan lainnya.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-white text-xl font-normal">
              Bisakah Saya Melacak Riwayat Transaksi Saya?
              </AccordionTrigger>
              <AccordionContent className="text-bodyText font-light text-sm" id="spacing">
                PowerUp adalah platform top up yang menyediakan layanan
                pengisian saldo cepat dan aman untuk berbagai kebutuhan,
                termasuk pulsa, data internet, dan layanan lainnya.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border-b border-customSecondary">
              <AccordionTrigger className="text-white text-xl font-normal">
              Bisakah memberi saran tentang layanan PowerUp?
              </AccordionTrigger>
              <AccordionContent className="text-bodyText font-light text-sm" id="spacing">
                PowerUp adalah platform top up yang menyediakan layanan
                pengisian saldo cepat dan aman untuk berbagai kebutuhan,
                termasuk pulsa, data internet, dan layanan lainnya.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          ;
        </div>
      </div>
    </>
  );
}
