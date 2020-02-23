import httpClient from "../../api/httpClient";
import {LOAD_CURRENT_PRODUCT} from "../constants/actionTypes";

export function fetchProducts({minPrice, maxPrice, origins, page, perPage}) {

    let endpoint = '/products?';
    let pathname = window.location.pathname;

    let params = ({
        minPrice, maxPrice, origins: origins.join(','), page,
        perPage, editable: pathname.includes('/my-products')
    });
    return httpClient.get(endpoint , {params});
}

export function fetchItem({type, payload}) {
    let endpoint = type === LOAD_CURRENT_PRODUCT ? '/products' : '/orders';
    return httpClient.get(`${endpoint}/${payload}`)
}

export function createSubmitProduct({name, price, origin}) {
    return httpClient.post(`/products`, {
            "product": {
                name, price: parseInt(price), origin
            }
        }
    )
}

export function editSubmitProduct({id, name, price, origin}) {
    return httpClient.patch(`/products/${id}`, {
        "product": {
            name, price: parseInt(price), origin
        }
    })
}

export function deleteSubmitProduct(id) {
    return httpClient.delete(`/products/${id}`);
}

export function postNewProduct(products) {
    const productsAsJSON = Object.values(products).map((item) => {
        return {
            "productId": item.id,
            "count": item.quantity ? item.quantity : 1
        }
    }, []);

    const data = {
        "order": {
            "pieces":
            productsAsJSON

        }
    };

    return httpClient.post(`/orders`, data)
}
