import Navbar from "../component-home/navbarBeforeLogin"
import DefaultPage from "../component-transaction/defaultPage"
import TransactionHistorySearch from "../component-transaction/transactionHistorySearch"
import TransactionHistory from "../component-transaction/transactionHistory"
import Footer from "../component-home/footer"

export default function TransaksiPage () {
    return(
        <>
        <Navbar />
        {/* <TransactionHistory /> */}
        {/* <DefaultPage /> */}
        <TransactionHistorySearch />
        <Footer />
        </>
    )
}