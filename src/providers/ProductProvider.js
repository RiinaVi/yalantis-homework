import React, {useState, useEffect} from "react";
import axios from "axios";

export const ProductContext = React.createContext({
    products: [],
    loadingProducts: false
});

export default function ProductProvider({children}) {
    const [loadingProducts, setLoadingProducts] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        setLoadingProducts(true);
        axios.get('https://yalantis-react-school.herokuapp.com/api/v1/products')
            .then(res => {
                setLoadingProducts(false);
                setProducts(res.data.items)
            });
    },[]);

    return(
        <ProductContext.Provider
        value={{
            loadingProducts,
            products
        }}
        >
            {children}
        </ProductContext.Provider>
    )
}
