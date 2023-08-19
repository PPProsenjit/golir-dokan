
import './Cart.css'
const Cart = ({cart}) => {

    console.log(cart);
    let totalPrice = 0;
    let shipping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        shipping = shipping + product.shipping;     
    }
    const tax = totalPrice*7/100;
    const grantTotal = totalPrice + shipping + tax;
    return (
        <div className="cart-container">
            <h5>Order Summary</h5>
            <p>Select Items: {cart.length}</p>
            <p>Total Price:${totalPrice}</p>
            <p>Total Shopping Charge:${shipping}</p>
            <p>tex:${tax}</p>
            <h6>Grant Total:${grantTotal}</h6>

        </div>
    );
};

export default Cart;