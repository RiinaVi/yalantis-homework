import {useDispatch} from "react-redux";

export default function useHandleEditSubmit() {

    const dispatch = useDispatch();

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return async function (newProductValues, action) {
        await sleep(2000);
        dispatch(action(newProductValues));
    };
};
