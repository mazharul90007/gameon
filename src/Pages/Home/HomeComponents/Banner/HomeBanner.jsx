import { FaArrowDownLong } from "react-icons/fa6";
import bannerimg from "../../../../assets/Home_image/banner.jpg";
import { motion } from "motion/react"

const HomeBanner = () => {
    return (
        <div
            className="relative bg-cover bg-center h-[70vh] md:h-[70vh] lg:h-[100vh] flex text-white"
            style={{
                backgroundImage: `url(${bannerimg})`
            }}
        >
            <div className="absolute inset-0 bg-black/30 bg-opacity-50"></div>
            <div className="absolute bottom-10 left-10 z-10">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold tracking-wide uppercase font-teko">
                    Gym Equipments & <br /> Sports Gears
                </h1>
                <div className="flex items-center gap-3">
                    <button className="button-fill-sm md:button-fill">
                        Shop Now
                    </button>
                    <button className="button-outline-sm md:button-outline">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="absolute bottom-4 md:bottom-10 right-4  md:right-10 flex items-center gap-1 md:gap-3 cursor-pointer">
                <h3 className="uppercase text-sm md:text-xl font-thin">Scroll down</h3>
                <motion.div
                    animate={{
                        y: [0, 10, 0], // Moves down 10px and back up
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <FaArrowDownLong className="text-sm md:text-lg font-thin" />
                </motion.div>
            </div>
        </div>
    );
};

export default HomeBanner;