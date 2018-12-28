import { searchAction } from './actions/searchAction';

/**
 * Reducer functions
 */

export const fetchDataSuccess = (data, initialSearch, page, typeSearch) => ({ type: "FETCH_SUCCESS", data, initialSearch, page, typeSearch })
export const fetchDataFullSuccess = (data) => ({ type: "FETCH_FULL_SUCCESS", data})
export const fetchDataLoading = () => ({ type: "FETCH_LOADING" })
export const fetchDataError = () => ({ type: "FETCH_ERROR" })
export const searchValue = (e) => ({ type: "SEARCH_UPDATE", value: e.target.value })
export const resetResults = () => ({ type: "RESET_RESULTS" })
export const resetFullContent = () => ({ type: "RESET_FULL_CONTENT" })

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
        
        case "FETCH_FULL_SUCCESS":
            return { ...newState, isLoading: false, fullContent: action.data  }

        case "FETCH_LOADING":
            return {...newState, isLoading: true };

        case "FETCH_ERROR":
            return {...newState, error: true };
        
        case "RESET_RESULTS":
            return {...newState, data: null };
        
        case "RESET_FULL_CONTENT":
            return {...newState, fullContent: null };

        default:
            return newState        

    }

    

}