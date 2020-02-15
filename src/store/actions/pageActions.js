import {SET_TOTAL_NUMBER_OF_PAGES} from "../constants/actionTypes";


export function setTotalNumberOfPages(totalNumberOfPages) {
    return {
        type: SET_TOTAL_NUMBER_OF_PAGES,
        payload: totalNumberOfPages
    }
}
