import Sub from "../../../Shared/Navbar/Sub";
import Banner from "../Banner/Banner";
import Community from "../Community/Community";
import Gallery from "../Gallery/Gallery";
import Sponsored from "../Sponsored/Sponsored";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Sub></Sub>
            <Community></Community>
            <Sponsored></Sponsored>
        </div>
    );
};

export default Home;