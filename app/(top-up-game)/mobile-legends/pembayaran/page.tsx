import Navbar from "@/app/component-home/navbarBeforeLogin"
import PaymentInstruction from "@/app/component-payment/paymentInstruction"
import PaymentDetail from "@/app/component-payment/paymentDetail"
import Footer from "@/app/component-home/footer"

export default function () {
    return(
        <>
        <Navbar />
        <div className="flex justify-between mx-36 mt-[70px]">
            <PaymentInstruction />
            <PaymentDetail />
        </div>
        <Footer />
        </>
    )
}