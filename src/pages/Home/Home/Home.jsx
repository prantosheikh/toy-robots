import Sub from "../../../Shared/Navbar/Sub";
import Banner from "../Banner/Banner";
import Community from "../Community/Community";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Sub></Sub>
            <Community></Community>
        </div>
    );
};

export default Home;