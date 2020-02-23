import {addOrder} from "../../../store/actions/cartActions";
import {useDispatch} from "react-redux";

export default function useAddOrder() {

    const dispatch = useDispatch();

    return function (products) {
        dispatch(addOrder(products));
    }
}
