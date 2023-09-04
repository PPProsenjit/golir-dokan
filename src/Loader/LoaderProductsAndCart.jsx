import { getShoppingCart } from "../utilities/fakedb";

export const loaderProductsAndCart = async () => {
    //get products data
    const loaderData = await fetch('products.json');
    const products = await loaderData.json();

    //get cart 
    const savedCart = getShoppingCart();
    const initialCart = [];

    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {

            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);

        }

    }
    return { products: products, initialCart }
}