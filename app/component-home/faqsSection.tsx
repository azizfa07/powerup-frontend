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
            <AccordionItem
              value="item-1"
              className=" border-t border-customSecondary"
            >
              <AccordionTrigger className="text-white text-xl font-normal">
                Apa itu PowerUp?
              </AccordionTrigger>
              <AccordionContent
                className="text-bodyText font-light text-sm"
                id="spacing"
              >
                PowerUp adalah platform top up yang menyediakan layanan
                pengisian saldo cepat dan aman untuk berbagai kebutuhan,
                termasuk pulsa, data internet, dan layanan lainnya.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-white text-xl font-normal">
                Bagaimana cara top up di PowerUp?
              </AccordionTrigger>
              <AccordionContent
                className="text-bodyText font-light text-sm"
                id="spacing"
              >
                Anda harus mengakses website PowerUp dan memilih produk yang
                diinginkan. Setelah memilih produk, Anda harus mengisi data
                seperti ID game, email, dan informasi lainnya yang diperlukan.
                Selanjutnya, Anda akan memasuki tahap transaksi, di mana Anda
                harus memilih metode pembayaran. Setelah pembayaran selesai,
                Anda akan menerima bukti pembayaran sebagai konfirmasi
                transaksi.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-white text-xl font-normal">
                Berapa lama waktu untuk top up diproses?
              </AccordionTrigger>
              <AccordionContent
                className="text-bodyText font-light text-sm"
                id="spacing"
              >
                Proses top up di PowerUp dirancang untuk berlangsung dengan
                cepat dan efisien. Setelah pengguna menyelesaikan transaksi, top
                up biasanya akan diproses dalam waktu beberapa menit. Namun,
                dalam beberapa kasus, terutama saat terjadi lonjakan transaksi
                atau gangguan teknis, proses ini mungkin memerlukan waktu hingga
                15 menit. PowerUp berkomitmen untuk memastikan setiap transaksi
                diproses secepat mungkin dan pengguna menerima konfirmasi top up
                dengan segera.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-white text-xl font-normal">
                Apakah PowerUp Menjamin Keamanan Transaksi?
              </AccordionTrigger>
              <AccordionContent
                className="text-bodyText font-light text-sm"
                id="spacing"
              >
                Di PowerUp, kami memahami bahwa keamanan adalah aspek krusial
                dalam setiap transaksi digital. Oleh karena itu, kami
                berkomitmen untuk menjamin keamanan transaksi pengguna melalui
                berbagai lapisan perlindungan. Selain itu, kami menggunakan
                protokol keamanan yang ketat untuk memverifikasi setiap
                transaksi, sehingga pengguna dapat merasa aman dan tenang saat
                menggunakan layanan kami.PowerUp menyediakan layanan pelanggan
                yang siap membantu 24/7 untuk menangani setiap masalah atau
                kekhawatiran terkait keamanan.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-white text-xl font-normal">
                Bisakah Saya Melacak Riwayat Transaksi Saya?
              </AccordionTrigger>
              <AccordionContent
                className="text-bodyText font-light text-sm"
                id="spacing"
              >
                PowerUp adalah platform top up yang menyediakan layanan
                pengisian saldo cepat dan aman untuk berbagai kebutuhan,
                termasuk pulsa, data internet, dan layanan lainnya.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-6"
              className="border-b border-customSecondary"
            >
              <AccordionTrigger className="text-white text-xl font-normal">
                Bisakah memberi kritik & saran tentang layanan PowerUp?
              </AccordionTrigger>
              <AccordionContent
                className="text-bodyText font-light text-sm"
                id="spacing"
              >
                PowerUp selalu berkomitmen untuk meningkatkan kualitas layanan
                demi kepuasan pengguna. Kami percaya bahwa umpan balik dari
                pengguna sangat berharga untuk pengembangan dan perbaikan
                kedepannya layanan kami. Oleh karena itu, PowerUp menyediakan
                nomor telepon dan alamat email khusus untuk menerima saran,
                kritik, dan masukan dari pengguna. Melalui layanan kontak yang
                tersedia di bagian profil kami, pengguna dapat dengan cepat dan
                langsung menyampaikan pendapat mereka kepada tim customer
                service kami. Tim kami siap mendengarkan dan mencatat setiap
                saran serta memberikan solusi atau tanggapan yang dibutuhkan.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          ;
        </div>
      </div>
    </>
  );
}
