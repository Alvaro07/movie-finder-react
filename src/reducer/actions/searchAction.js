export const searchAction = (newState, actionData, initialSearch, actionPage, typeSearch) => {
    
    if ( initialSearch) {
        
        return {...newState, 
            totalResults: actionData.totalResults, 
            data: actionData.Search, 
            isLoading: false,
            pageSearch: 1,
            typeSearch: typeSearch
        }

    } else {

        return {...newState, 
            totalResults: actionData.totalResults, 
            data: newState.data.concat(actionData.Search), 
            isLoading: false, 
            pageSearch: actionPage,
            typeSearch: typeSearch
        }

    }
    
}

export default searchAction;