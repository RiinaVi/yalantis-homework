import axios from "axios";
import {useDispatch} from "react-redux";
import {submitProduct} from "../store/actions/productsActions";
import {hideAlert, showAlert} from "../store/actions/alertActions";

export default function useHandleEditSubmit() {

    const dispatch = useDispatch();

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.REACT_APP_API_KEY
        }
    };

    return async function (newProductValues) {
        await sleep(2000);

        return axios.post(`${process.env.REACT_APP_API_URL}/products`, {
                "product": {
                    name: newProductValues.name,
                    price: parseInt(newProductValues.price),
                    origin: newProductValues.origin
                }
            }, config
        )
            .then(response => {
                dispatch(submitProduct(response.data));
                dispatch(showAlert('A new product was created!', 'success'));
                setTimeout(()=>dispatch(hideAlert()),1000);
            })
            .catch(error => {
                console.log(error.response)
            });
    };
};
