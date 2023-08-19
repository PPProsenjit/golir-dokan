import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {

    
    const { name, seller, img, price, ratings } = props.product;

    // eslint-disable-next-line react/prop-types
    const handleAddTOCart = props.handleAddTOCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} star</p>
            </div>
            <button onClick={() => handleAddTOCart(props.product)} className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon icon={faCartShopping} />
            </button>
        </div>
    );
};

export default Product;