import headset from "../../../../assets/Home_image/headset.png";
import payment from "../../../../assets/Home_image/payments.png";
import pingpong from "../../../../assets/Home_image/pingpong.png";

const HomeCategory = () => {
    const categories = [
        {
            name: 'Women',
            image: 'https://i.ibb.co.com/Gvwp34LT/women.jpg',
        },
        {
            name: 'Men',
            image: 'https://i.ibb.co.com/QqvnBnD/men.jpg',
        },
        {
            name: 'Accessories',
            image: 'https://i.ibb.co.com/NnZPTH6g/gears.jpg',
        },
    ];

    const features = [
        {
            image: pingpong,
            title: "Extensive Collection",
            description: "10,000+ premium sports gear items!",
        },
        {
            image: payment,
            title: "Secure payments",
            description: "Fast, secure, and easy payments!",
        },
        {
            image: headset,
            title: "Customer support",
            description: "Always here to assist you!",
        }
    ];

    return (
        <div className="mb-20 w-11/12 mx-auto">
            {/* Categories Section (unchanged) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {categories.map((category, idx) => (
                    <div key={idx} className="relative group overflow-hidden rounded shadow-md cursor-pointer">
                        <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-[450px] object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <button className="absolute bottom-4 left-4 bg-white text-black font-medium rounded-full px-4 py-1 text-sm shadow-lg">
                            {category.name}
                        </button>
                    </div>
                ))}
            </div>

            {/* Features Section with Images */}
            <section className=" py-16 border-b border-gray-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="mx-auto"
                        >
                            <div className=" flex items-center gap-4">
                                <div className="flex items-center justify-center">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-24 h-24"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold">{feature.title}</h2>
                                    <p className="text-gray-500">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomeCategory;