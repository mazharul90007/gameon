import AboutUs from "./HomeComponents/AboutUs/AboutUs";
import HomeBanner from "./HomeComponents/Banner/HomeBanner";
import FeaturedProducts from "./HomeComponents/FeaturedProducts/FeaturedProducts";
import HomeCategory from "./HomeComponents/HomeCategory/HomeCategory";
import RecentProducts from "./HomeComponents/RecentProducts/RecentProducts";


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <RecentProducts></RecentProducts>
            <HomeCategory></HomeCategory>
            <FeaturedProducts></FeaturedProducts>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;