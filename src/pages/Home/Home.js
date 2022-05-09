import Banner from "../../components/Banner/Banner";
import Inventory from "../../components/Inventory/Inventory";
import MidBanner from "../../components/MidBanner/MidBanner";

function Home() {
    return (
        <main>
            <Banner />
            <Inventory />
            <MidBanner />
        </main>
    );
}

export default Home;
