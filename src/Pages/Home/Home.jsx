import AboutUs from "./HomeComponents/AboutUs/AboutUs";
import HomeBanner from "./HomeComponents/Banner/HomeBanner";
import FeaturedProducts from "./HomeComponents/FeaturedProducts/FeaturedProducts";
import HomeCategory from "./HomeComponents/HomeCategory/HomeCategory";
import RecentProducts from "./HomeComponents/RecentProducts/RecentProducts";
import Testimonials from "./HomeComponents/Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <RecentProducts></RecentProducts>
            <HomeCategory></HomeCategory>
            <FeaturedProducts></FeaturedProducts>
            <AboutUs></AboutUs>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;