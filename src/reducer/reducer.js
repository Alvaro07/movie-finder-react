import { searchAction } from './actions/searchAction';

/**
 * Reducer functions
 */

export const fetchTempSuccess = (data, initialSearch, page, typeSearch) => ({ type: "FETCH_SUCCESS", data, initialSearch, page, typeSearch })
export const fetchTempLoading = () => ({ type: "FETCH_LOADING" })
export const fetchTempError = () => ({ type: "FETCH_ERROR" })
export const searchValue = (e) => ({ type: "SEARCH_UPDATE", value: e.target.value })

/**
 * Reducer
 */


export const reducer = (state, action) => {
    
    let newState = { ...state };

    switch (action.type){

        case "SEARCH_UPDATE":
            return {...newState, dataSearch: action.value };

        case "FETCH_SUCCESS":
            return searchAction(newState, action.data, action.initialSearch, action.page, action.typeSearch)

        case "FETCH_LOADING":
            return {...newState, isLoading: true };

        case "FETCH_ERROR":
            return {...newState, error: true };

        default:
            return newState        

    }

}