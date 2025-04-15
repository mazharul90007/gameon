import noImage from "../assets/Common_image/noImage.png"

const ProductCard = ({product}) => {
    return (
        <div className="bg-base-100 hover:shadow-lg transition flex flex-col cursor-pointer gap-8">
            <figure className="">
                <img src={product?.image ? product.image : noImage} alt={product.title} className="h-64 object-cover w-full" />
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
    );
};

export default ProductCard;