import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import GetTouch from "../../components/GetTouch/GetTouch";
import Inventory from "../../components/Inventory/Inventory";
import MidBanner from "../../components/MidBanner/MidBanner";

function Home() {
    return (
        <main>
            <Banner />
            <Inventory />
            <MidBanner />
            <GetTouch />
            <Footer />
        </main>
    );
}

export default Home;
