import {useDispatch} from "react-redux";
import {deleteMyProduct} from "../store/actions/formActions";


export default function useHandleDelete() {

    const dispatch = useDispatch();

    return function (id) {
        dispatch(deleteMyProduct(id))
    }

};
