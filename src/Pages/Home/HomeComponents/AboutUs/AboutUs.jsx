import { FaCheck, FaTrophy, FaShippingFast, FaHeadset } from "react-icons/fa";
import noImage from "../../../../assets/Common_image/noImage.png"


const AboutUs = () => {
    return (
        <div className="my-24 grid md:grid-cols-2 gap-12 w-11/12 mx-auto px-6">
            {/* Left Column - Image */}
            <div className="md:col-span-1 relative rounded-xl overflow-hidden shadow-lg">
                <img
                    src={noImage}
                    alt="Our sports equipment"
                    className="w-full h-full object-cover min-h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 p-6 rounded-lg shadow">
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                            <p className="text-3xl font-bold text-primary">10K+</p>
                            <p className="text-sm uppercase">Products</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-primary">15+</p>
                            <p className="text-sm uppercase">Brands</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-primary">5K+</p>
                            <p className="text-sm uppercase">Customers</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column - Content */}
            <div className="md:col-span-1 flex flex-col justify-center">
                <p className="uppercase text-xl font-semibold font-teko text-primary mb-2 tracking-wider">
                    About Our Store
                </p>
                <h3 className="uppercase text-4xl md:text-5xl font-bold font-teko mb-8 leading-tight">
                    Premium Gym & Sports Equipment
                </h3>

                <p className="text-lg text-gray-600 mb-8">
                    Since 2010, we've been providing athletes and fitness enthusiasts with top-quality gear.
                    Our products are tested by professionals to ensure peak performance and durability.
                </p>

                <ul className="space-y-4 mb-10">
                    <li className="flex items-start gap-4">
                        <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Professional-Grade Quality</h4>
                            <p className="text-gray-600">Every product meets strict performance standards</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <FaShippingFast className="text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Fast & Free Shipping</h4>
                            <p className="text-gray-600">On all orders over $99</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <FaHeadset className="text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Expert Support</h4>
                            <p className="text-gray-600">Our team includes certified trainers</p>
                        </div>
                    </li>
                </ul>

                <div className="flex items-center gap-3">
                    <button className="py-3 px-6 bg-button border border-button rounded cursor-pointer hover:scale-95 transform transition-transform text-white">
                        Shop Now
                    </button>
                    <button className="py-3 px-6 border border-gray-700 rounded cursor-pointer hover:scale-95 transform transition-transform hover:bg-gray-100 hover:text-black">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;