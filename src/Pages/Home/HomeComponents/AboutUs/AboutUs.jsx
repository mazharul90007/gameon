import { FaCheck, FaShippingFast, FaHeadset } from "react-icons/fa";
import soccer from "../../../../assets/Home_image/soccer.jpg";
import badminton from "../../../../assets/Home_image/badminton.jpg";
import { motion } from "framer-motion";

const AboutUs = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const imageLeft = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
  };

  const imageRight = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
  };

  const content = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="my-24 grid md:grid-cols-2 gap-12 w-11/12 mx-auto px-4"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{once:true, margin: "-100px" }}
    >
      {/* Left Column - Images */}
      <div className="relative flex items-center justify-center h-[400px] md:h-auto">
        {/* Background Image - slides from left */}
        <motion.img
          variants={imageLeft}
          src={badminton}
          alt="Badminton"
          className="w-2/3 md:w-1/2 absolute top-0 left-0 rounded-xl shadow-lg border-4 border-white"
        />
        {/* Overlay smaller image - slides from right */}
        <motion.img
          variants={imageRight}
          src={soccer}
          alt="Soccer"
          className="w-2/3 md:w-1/2 absolute bottom-0 right-0 md:right-20 rounded-xl shadow-lg border-4 border-white"
        />
      </div>

      {/* Right Column - Content */}
      <motion.div
        variants={content}
        className="flex flex-col justify-center"
      >
        <p className="uppercase text-xl font-semibold font-teko text-primary mb-2 tracking-wider">
          About Our Store
        </p>
        <h3 className="uppercase text-4xl md:text-5xl font-bold font-teko mb-8 leading-tight text-gray-800">
          Premium Gym & Sports Equipment
        </h3>

        <p className="text-lg text-gray-600 mb-8">
          Since 2010, we've been providing athletes and fitness enthusiasts with
          top-quality gear. Our products are tested by professionals to ensure peak
          performance and durability.
        </p>

        <ul className="space-y-4 mb-10">
          <li className="flex items-start gap-4">
            <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Professional-Grade Quality</h4>
              <p className="text-gray-600">
                Every product meets strict performance standards
              </p>
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

        <div className="flex flex-wrap gap-4">
          <button className="py-3 px-6 bg-button border border-button rounded hover:scale-95 transform transition-transform text-white">
            Shop Now
          </button>
          <button className="py-3 px-6 border border-gray-700 rounded hover:scale-95 transform transition-transform hover:bg-gray-100 hover:text-black">
            Learn More
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;