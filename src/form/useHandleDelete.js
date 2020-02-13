import axios from "axios";
import {useDispatch} from "react-redux";
import {deleteProduct} from "../store/actions/productsActions";
import {hideAlert, showAlert} from "../store/actions/alertActions";


export default function useHandleDelete() {

    const dispatch = useDispatch();

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.REACT_APP_API_KEY
        }

    };

    return function (id) {
        return axios.delete(`${process.env.REACT_APP_API_URL}/products/${id}`,  config
        )
            .then(response => {
                dispatch(deleteProduct(id));
                dispatch(showAlert('Your product was deleted!', 'danger'));
                setTimeout(()=>dispatch(hideAlert()),1000);
            })
            .catch(error => {
                console.log(error.response)
            });
    };
};
