import axios from "axios";
import {submitProduct} from "../store/actions/productsActions";
import {useDispatch} from "react-redux";
import {hideAlert, showAlert} from "../store/actions/alertActions";

export default function useHandleEditSubmit() {

    const dispatch = useDispatch();

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.REACT_APP_API_KEY
        }
    };

    return function (newProductValues) {
        return axios.patch(`${process.env.REACT_APP_API_URL}/products/${newProductValues.id}`, {
                "product": {
                    name: newProductValues.name,
                    price: parseInt(newProductValues.price),
                    origin: newProductValues.origin
                }
            }, config
        )
            .then(response => {
                console.log('response', response.data);
                dispatch(submitProduct(response.data));
                dispatch(showAlert('The product was edited!', 'warning'));
                setTimeout(() => dispatch(hideAlert()), 1000);
            })
            .catch(error => {
                console.log(error.response)
            });
    };
};
