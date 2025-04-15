import ProductCard from '../../../../Components/ProductCard';
import featuredProducts from '../../../../data/featured.json';
import noImage from "../../../../assets/Common_image/noImage.png"

const FeaturedProducts = () => {
    const product = featuredProducts[0];
    return (
        <div className='py-16'>
            <div className="text-gray-800 w-11/12 mx-auto">
                <p className="uppercase text-xl font-semibold text-center font-teko text-primary mb-2">Best Picks</p>
                <h3 className="uppercase text-5xl font-semibold text-center font-teko mb-10">Explore our featured products</h3>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {/* Left Side */}
                    <div className='md:col-span-1 h-full'>
                        <div className="bg-base-100 hover:shadow-lg transition flex flex-col cursor-pointer gap-8">
                            <figure className="">
                                <img src={product?.image ? product.image : noImage} alt={product.title} className="h-full object-cover w-full" />
                            </figure>
                            <div className="flex flex-col flex-grow gap-2">
                                <h2 className="uppercase md:text-base font-semibold">{product.title}</h2>
                                <div className="space-x-2 mt-auto">
                                    <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
                                    {product.originalPrice && (
                                        <span className="line-through text-sm text-red-500">${product.originalPrice.toFixed(2)}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className="md:col-span-1 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {featuredProducts.slice(1, 5).map(product => <ProductCard key={product.productId} product={product}></ProductCard>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;