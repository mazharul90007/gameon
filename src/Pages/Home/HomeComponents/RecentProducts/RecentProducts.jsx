import ProductCard from '../../../../Components/ProductCard';
import products from '../../../../data/products.json'; // make sure the path is correct

const RecentProducts = () => {
    return (
        <div className="my-20 text-gray-800 max-w-7xl mx-auto px-4">
            <p className="uppercase text-xl font-semibold text-center font-teko text-primary mb-2">Our Shop</p>
            <h3 className="uppercase text-5xl font-semibold text-center font-teko mb-10">Recent Products</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.slice(0, 8).map(product => <ProductCard key={product.productId} product={product}></ProductCard>)}
            </div>
            <div className='w-full flex flex-col'>
                <button className="btn btn-primary mx-auto mt-12 ">
                    View All Items
                </button>
            </div>
        </div>
    );
};

export default RecentProducts;
