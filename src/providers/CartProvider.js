import React, {useState, useCallback} from "react";
import {alertTimer} from "../components/customFunctions";

export const CartContext = React.createContext(new Set());

export default function CartProvider({children}) {
    const [productsInCart, setProductsInCart] = useState({});
    const [cartSum, setCartSum] = useState(0);
    const [alertVisibility, setAlertVisibility] = useState(false);

    const addToCart = useCallback(
        (product) => {
            const currentProductsInCart = productsInCart;
            const {id} = product;

            if (currentProductsInCart.hasOwnProperty(id)) {
                let currentQuantity = currentProductsInCart[id].quantity;
                product.quantity = currentQuantity ? currentQuantity + 1 : 2;
            }

            currentProductsInCart[id] = product;

            setProductsInCart(currentProductsInCart);
            setCartSum(cartSum + product.price);

            alertTimer(1000, setAlertVisibility);
        },
        [cartSum, productsInCart]
    );

    return (
        <CartContext.Provider
            value={{
                addToCart,
                cartSum,
                alertVisibility,
                setAlertVisibility,
                productsInCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
