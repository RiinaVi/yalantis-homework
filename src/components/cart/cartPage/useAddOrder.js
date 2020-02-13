import axios from "axios";
import {hideAlert, showAlert} from "../../../store/actions/alertActions";
import {addOrder} from "../../../store/actions/cartActions";
import {useDispatch} from "react-redux";

export default function useAddOrder() {

    const dispatch = useDispatch();

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.REACT_APP_API_KEY
        }
    };

    return function (products) {

        const productsAsJSON = Object.values(products).map((item) => {
             return  {
                 "productId": item.id,
                 "count": item.quantity ? item.quantity : 1
             }
        },[]);

        const data = {
            "order": {
                "pieces":
                    productsAsJSON

            }
        };

        return axios.post(`${process.env.REACT_APP_API_URL}/orders`, data, config
        )
            .then(response => {
                console.log(response);
                dispatch(addOrder());
                dispatch(showAlert('Your order was submitted!', 'success'));
                setTimeout(() => dispatch(hideAlert()), 1000);
            })
            .catch(error => {
                console.log(error.response)
            });
    }
}
